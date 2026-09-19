import Link from "next/link";
import { OrderStatus } from "./OrderStatus";
import type { AccountOrder } from "@/types/account";

export function OrderSummary({ order }: { order: AccountOrder }) {
  return (
    <div className="border-y border-white/[0.08]">
      <div className="grid gap-5 py-6 md:grid-cols-[1.4fr_1fr_0.7fr_auto] md:items-center">
        <div><p className="text-[10px] uppercase tracking-[0.25em] text-white/25">Order {order.orderNumber}</p><p className="mt-2 text-lg">{order.items[0]?.productName || "NOEXCUSIV order"}</p></div>
        <p className="text-sm text-white/45">{order.date ? new Date(order.date).toLocaleDateString() : "Date unavailable"} · Qty {order.items.reduce((total, item) => total + item.quantity, 0)}</p>
        <OrderStatus status={order.status} />
        <Link href={`/account/orders/${order.id}`} className="text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-white">View order</Link>
      </div>
    </div>
  );
}
