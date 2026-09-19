import "server-only";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import type { AccountOrder } from "@/types/account";

type Row = Record<string, unknown>;

function stringValue(row: Row, ...keys: string[]) {
  for (const key of keys) {
    if (typeof row[key] === "string" && row[key]) return row[key] as string;
  }
  return "";
}

function numberValue(row: Row, ...keys: string[]) {
  for (const key of keys) {
    if (typeof row[key] === "number") return row[key] as number;
  }
  return 0;
}

function relationRows(value: unknown) {
  if (Array.isArray(value)) return value as Row[];
  if (value && typeof value === "object") return [value as Row];
  return [] as Row[];
}

function normalizeOrder(row: Row): AccountOrder {
  const items = relationRows(row.order_items);
  const shippingRows = relationRows(row.shipping);
  const paymentRows = relationRows(row.payments);
  const firstShipping = shippingRows[0] ?? {};
  const firstPayment = paymentRows[0] ?? {};

  return {
    id: stringValue(row, "id"),
    orderNumber: stringValue(row, "order_number", "number", "id"),
    date: stringValue(row, "created_at", "date"),
    total: numberValue(row, "total", "amount", "price"),
    status: stringValue(row, "status") || "Processing",
    items: items.map((item) => ({
      productName: stringValue(item, "product_name", "name"),
      quantity: numberValue(item, "quantity") || 1,
      key: stringValue(item, "selected_key", "key_option", "key"),
      unitPrice: numberValue(item, "unit_price", "price"),
    })),
    shipping: {
      name: stringValue(firstShipping, "name", "full_name"),
      address: stringValue(firstShipping, "address", "address_line_1"),
      city: stringValue(firstShipping, "city"),
      postalCode: stringValue(firstShipping, "postal_code", "zip"),
      country: stringValue(firstShipping, "country"),
    },
    paymentStatus: stringValue(firstPayment, "status") || "Not available",
    tracking: stringValue(firstShipping, "tracking_number", "tracking"),
  };
}

export async function getAuthenticatedUser(): Promise<User | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      if (error.name === "AuthSessionMissingError") {
        return null;
      }

      console.error("Supabase user lookup failed:", error);
      return null;
    }

    return data.user;
  } catch (error) {
    console.error("Supabase authentication is not configured:", error);
    return null;
  }
}

export async function getProfile(userId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("id, full_name, email, created_at, updated_at")
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    console.error("Supabase profile lookup failed:", error);
    return null;
  }

  return data;
}

export async function getOrders(userId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("orders")
    .select("*, order_items(*), payments(*), shipping(*)")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase orders lookup failed:", error);
    return { orders: [] as AccountOrder[], error: "Orders could not be loaded." };
  }

  return {
    orders: (data as unknown as Row[]).map(normalizeOrder),
    error: null,
  };
}

export async function getOrder(userId: string, orderId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("orders")
    .select("*, order_items(*), payments(*), shipping(*)")
    .eq("user_id", userId)
    .eq("id", orderId)
    .maybeSingle();

  if (error) {
    console.error("Supabase order lookup failed:", error);
    return { order: null, error: "Order could not be loaded." };
  }

  return {
    order: data ? normalizeOrder(data as unknown as Row) : null,
    error: null,
  };
}
