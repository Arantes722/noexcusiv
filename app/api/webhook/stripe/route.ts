import { NextResponse } from "next/server";
import Stripe from "stripe";

import { supabase } from "@/lib/supabase";


const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY!
);


const endpointSecret =
  process.env.STRIPE_WEBHOOK_SECRET!;



export async function POST(request: Request) {

  const body = await request.text();

  const signature =
    request.headers.get("stripe-signature")!;


  let event: Stripe.Event;


  try {

    event = stripe.webhooks.constructEvent(
      body,
      signature,
      endpointSecret
    );


  } catch (error) {

    console.error(
      "Webhook signature failed:",
      error
    );


    return new NextResponse(
      "Webhook Error",
      {
        status: 400,
      }
    );

  }



  if (
    event.type === "checkout.session.completed"
  ) {


    const session =
      event.data.object as Stripe.Checkout.Session;



    const productName =
      session.metadata?.product_name;



    const productId =
      session.metadata?.product_id;



    await supabase
      .from("orders")
      .insert({

        stripe_session_id:
          session.id,

        customer_email:
          session.customer_details?.email,

        customer_name:
          session.customer_details?.name,


        product_id:
          productId,


        product_name:
          productName,


        price:
          session.amount_total! / 100,


        status:
          "paid",

      });


  }



  return NextResponse.json({
    received: true,
  });

}