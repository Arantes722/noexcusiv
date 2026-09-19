import { redirect } from "next/navigation";
import { AccountLayout } from "@/components/account/AccountLayout";
import { AccountHeader } from "@/components/account/AccountHeader";
import { OrderSummary } from "@/components/account/OrderSummary";
import { getAuthenticatedUser, getOrders } from "@/lib/account";

export const dynamic = "force-dynamic";

export default async function AccountOrdersPage() {
  const user = await getAuthenticatedUser();
  if (!user) redirect("/login");
  const result = await getOrders(user.id);

  return <AccountLayout>
    <AccountHeader title="ORDERS" description="A record of your NOEXCUSIV purchases and their current status." />
    <section className="pt-14">
      {result.error ? <p className="border-y border-white/[0.08] py-8 text-sm text-red-300">{result.error}</p> : result.orders.length ? result.orders.map((order) => <OrderSummary key={order.id} order={order} />) : <p className="border-y border-white/[0.08] py-8 text-[15px] leading-7 text-white/40">You do not have any orders yet.</p>}
    </section>
  </AccountLayout>;
}
