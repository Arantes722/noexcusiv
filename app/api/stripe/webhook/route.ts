import { NextResponse } from "next/server";
import Stripe from "stripe";

import { products } from "@/data/products";
import { getSupabase } from "@/lib/supabase";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

type JsonRecord = Record<string, unknown>;
type SupabaseServiceClient = ReturnType<typeof getSupabase>;

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

function getMetadataValue(
  metadata: Stripe.Metadata | null | undefined,
  key: string
) {
  const value = metadata?.[key];
  return typeof value === "string" ? value : "";
}

function parseQuantity(value: string) {
  const quantity = Number(value);
  return Number.isInteger(quantity) && quantity >= 1 && quantity <= 10
    ? quantity
    : null;
}

function getPaymentIntentId(
  paymentIntent: string | Stripe.PaymentIntent | null
) {
  return typeof paymentIntent === "string"
    ? paymentIntent
    : paymentIntent?.id ?? "";
}

function getAddressSnapshot(session: Stripe.Checkout.Session) {
  const details = session.customer_details;
  const address = details?.address;

  return {
    name: details?.name ?? null,
    email: details?.email ?? null,
    phone: details?.phone ?? null,
    line1: address?.line1 ?? null,
    line2: address?.line2 ?? null,
    city: address?.city ?? null,
    state: address?.state ?? null,
    postal_code: address?.postal_code ?? null,
    country: address?.country ?? null,
  };
}

async function findExistingOrder(
  supabase: SupabaseServiceClient,
  sessionId: string,
  paymentIntentId: string
) {
  if (sessionId) {
    const bySession = await supabase
      .from("payments")
      .select("order_id")
      .eq("stripe_checkout_session_id", sessionId)
      .maybeSingle();

    if (bySession.error) throw bySession.error;
    if (bySession.data?.order_id) return bySession.data.order_id as string;
  }

  if (paymentIntentId) {
    const byPaymentIntent = await supabase
      .from("payments")
      .select("order_id")
      .eq("stripe_payment_intent_id", paymentIntentId)
      .maybeSingle();

    if (byPaymentIntent.error) throw byPaymentIntent.error;
    if (byPaymentIntent.data?.order_id) {
      return byPaymentIntent.data.order_id as string;
    }
  }

  return null;
}

async function upsertPayment(
  supabase: Awaited<ReturnType<typeof getSupabase>>,
  values: JsonRecord,
  paymentIntentId: string,
  sessionId: string
) {
  const existing = paymentIntentId
    ? await supabase
        .from("payments")
        .select("id, order_id")
        .eq("stripe_payment_intent_id", paymentIntentId)
        .limit(1)
        .maybeSingle()
    : await supabase
        .from("payments")
        .select("id, order_id")
        .eq("stripe_checkout_session_id", sessionId)
        .limit(1)
        .maybeSingle();

  if (existing.error) throw existing.error;

  if (existing.data?.id) {
    const updated = await supabase
      .from("payments")
      .update(values)
      .eq("id", existing.data.id)
      .select("id, order_id")
      .single();

    if (updated.error) throw updated.error;
    return updated.data;
  }

  const inserted = await supabase
    .from("payments")
    .insert(values)
    .select("id, order_id")
    .single();

  if (inserted.error) throw inserted.error;
  return inserted.data;
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const paymentIntentId = getPaymentIntentId(session.payment_intent);
  const userId =
    getMetadataValue(session.metadata, "user_id") ||
    session.client_reference_id ||
    "";
  const productId = getMetadataValue(session.metadata, "product_id");
  const selectedKey = getMetadataValue(session.metadata, "selected_key");
  const quantity = parseQuantity(getMetadataValue(session.metadata, "quantity"));
  const product = products.find((item) => item.id === productId);
  const keyOption = product?.keyOptions.find((option) => option.id === selectedKey);

  if (!userId || !product || !keyOption || keyOption.status !== "available" || !quantity) {
    throw new Error("Checkout metadata does not identify a valid user, product, key or quantity.");
  }

  const amountTotal = session.amount_total;
  const currency = session.currency;
  if (amountTotal === null || !currency) {
    throw new Error("Checkout session does not contain a paid amount and currency.");
  }

  const expectedAmount = Math.round(product.price * quantity * 100);
  if (currency !== "eur" || amountTotal !== expectedAmount) {
    throw new Error("Paid Stripe amount does not match the server product price.");
  }

  const supabase = getSupabase();
  const existingOrderId = await findExistingOrder(
    supabase,
    session.id,
    paymentIntentId
  );

  if (existingOrderId) {
    await upsertPayment(
      supabase,
      {
        order_id: existingOrderId,
        stripe_checkout_session_id: session.id,
        stripe_payment_intent_id: paymentIntentId || null,
        amount: amountTotal,
        currency,
        status: "succeeded",
        paid_at: new Date().toISOString(),
      },
      paymentIntentId,
      session.id
    );
    return;
  }

  const subtotal = session.amount_subtotal ?? amountTotal;
  const shippingAmount = session.total_details?.amount_shipping ?? 0;
  const orderInsert = await supabase
    .from("orders")
    .insert({
      user_id: userId,
      status: "paid",
      currency,
      subtotal,
      shipping: shippingAmount,
      total: amountTotal,
      shipping_address_snapshot: getAddressSnapshot(session),
    })
    .select("id")
    .single();

  if (orderInsert.error) throw orderInsert.error;

  const orderId = orderInsert.data.id as string;
  const itemInsert = await supabase.from("order_items").insert({
    order_id: orderId,
    product_id: product.id,
    product_name: product.name,
    product_snapshot: product,
    key_option_id: keyOption.id,
    key_option_name: keyOption.name,
    quantity,
    unit_price: product.price,
    total: product.price * quantity,
  });

  if (itemInsert.error) throw itemInsert.error;

  await upsertPayment(
    supabase,
    {
      order_id: orderId,
      stripe_checkout_session_id: session.id,
      stripe_payment_intent_id: paymentIntentId || null,
      amount: amountTotal,
      currency,
      status: "succeeded",
      paid_at: new Date().toISOString(),
    },
    paymentIntentId,
    session.id
  );
}

async function updatePaymentIntentStatus(
  paymentIntent: Stripe.PaymentIntent,
  status: "succeeded" | "failed"
) {
  const paymentIntentId = paymentIntent.id;
  const supabase = getSupabase();
  const payment = await supabase
    .from("payments")
    .select("id, order_id")
    .eq("stripe_payment_intent_id", paymentIntentId)
    .maybeSingle();

  if (payment.error) throw payment.error;
  if (!payment.data?.id) return;

  const paymentUpdate: JsonRecord = {
    status,
    amount: paymentIntent.amount,
    currency: paymentIntent.currency,
  };

  if (status === "failed") {
    paymentUpdate.failure_code = paymentIntent.last_payment_error?.code ?? null;
    paymentUpdate.failure_message =
      paymentIntent.last_payment_error?.message ?? null;
  }

  const updated = await supabase
    .from("payments")
    .update(paymentUpdate)
    .eq("id", payment.data.id);

  if (updated.error) throw updated.error;

  if (payment.data.order_id) {
    const orderUpdate = await supabase
      .from("orders")
      .update({ status: status === "succeeded" ? "paid" : "pending" })
      .eq("id", payment.data.order_id);

    if (orderUpdate.error) throw orderUpdate.error;
  }
}

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");

  if (!webhookSecret || !process.env.STRIPE_SECRET_KEY) {
    return jsonError("Stripe webhook is not configured.", 503);
  }

  if (!signature) {
    return jsonError("Missing Stripe webhook signature.", 400);
  }

  const body = await request.text();
  let event: Stripe.Event;
  let stripe: Stripe;

  try {
    stripe = getStripe();
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.error("Stripe webhook signature verification failed:", error);
    return jsonError("Invalid Stripe webhook signature.", 400);
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = await stripe.checkout.sessions.retrieve(
          (event.data.object as Stripe.Checkout.Session).id,
          { expand: ["payment_intent"] }
        );
        await handleCheckoutCompleted(session);
        break;
      }
      case "payment_intent.succeeded":
        await updatePaymentIntentStatus(
          event.data.object as Stripe.PaymentIntent,
          "succeeded"
        );
        break;
      case "payment_intent.payment_failed":
        await updatePaymentIntentStatus(
          event.data.object as Stripe.PaymentIntent,
          "failed"
        );
        break;
      default:
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook processing failed:", {
      eventId: event.id,
      eventType: event.type,
      error,
    });
    return jsonError("Webhook processing failed.", 500);
  }
}
