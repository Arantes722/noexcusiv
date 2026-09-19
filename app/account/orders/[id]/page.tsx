import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { AccountLayout } from "@/components/account/AccountLayout";
import { AccountHeader } from "@/components/account/AccountHeader";
import { getAuthenticatedUser, getOrder } from "@/lib/account";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export default async function OrderDetailsPage({ params }: Props) {
  const user = await getAuthenticatedUser();
  if (!user) redirect("/login");
  const { id } = await params;
  const result = await getOrder(user.id, id);
  if (result.error) return <AccountLayout><p className="text-sm text-red-300">{result.error}</p></AccountLayout>;
  if (!result.order) notFound();
  const order = result.order;

  return <AccountLayout>
    <AccountHeader eyebrow="ACCOUNT / ORDER" title={`ORDER\n${order.orderNumber}`} description="A detailed view of your NOEXCUSIV order." />
    <div className="grid gap-12 pt-14 md:grid-cols-2">
      <section className="border-y border-white/[0.08]">
        {order.items.map((item, index) => <div key={`${item.productName}-${index}`} className="border-b border-white/[0.08] py-6 last:border-0"><p>{item.productName || "NOEXCUSIV product"}</p><p className="mt-3 text-sm text-white/40">Quantity {item.quantity}{item.key ? ` · ${item.key}` : ""}</p><p className="mt-3 text-sm text-white/55">€{item.unitPrice.toFixed(2)} each</p></div>)}
        <div className="flex justify-between py-6"><span className="text-[10px] uppercase tracking-[0.2em] text-white/35">Total</span><span className="text-2xl">€{order.total.toFixed(2)}</span></div>
      </section>
      <dl className="space-y-6 text-sm text-white/45">
        <div><dt className="field-label">Date</dt><dd>{order.date ? new Date(order.date).toLocaleDateString() : "Not available"}</dd></div>
        <div><dt className="field-label">Status</dt><dd>{order.status}</dd></div>
        <div><dt className="field-label">Payment</dt><dd>{order.paymentStatus}</dd></div>
        <div><dt className="field-label">Shipping</dt><dd>{[order.shipping.name, order.shipping.address, order.shipping.city, order.shipping.postalCode, order.shipping.country].filter(Boolean).join(", ") || "Not available"}</dd></div>
        <div><dt className="field-label">Tracking</dt><dd>{order.tracking || "Not available"}</dd></div>
      </dl>
    </div>
    <Link href="/account/orders" className="mt-12 inline-block text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-white">Back to orders</Link>
  </AccountLayout>;
}
