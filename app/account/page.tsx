import Link from "next/link";
import { redirect } from "next/navigation";
import { AccountLayout } from "@/components/account/AccountLayout";
import { AccountHeader } from "@/components/account/AccountHeader";
import { getAuthenticatedUser, getOrders, getProfile } from "@/lib/account";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const user = await getAuthenticatedUser();
  if (!user) redirect("/login");

  const [profile, result] = await Promise.all([getProfile(user.id), getOrders(user.id)]);
  const name = profile?.full_name || user.user_metadata.full_name || "NOEXCUSIV customer";
  const recentOrder = result.orders[0];

  return <AccountLayout>
    <AccountHeader title={"YOUR\nNOEXCUSIV"} description={`Welcome back, ${name}. Your account space for orders and personal information.`} />
    <div className="grid gap-14 pt-14 md:grid-cols-12 md:gap-16">
      <section className="md:col-span-7">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">Recent order</p>
        {result.error ? <p className="mt-6 border-y border-white/[0.08] py-8 text-sm text-red-300">{result.error}</p> : recentOrder ? <div className="mt-6"><p className="text-lg">Order {recentOrder.orderNumber}</p><p className="mt-2 text-sm text-white/40">{recentOrder.status} · €{recentOrder.total.toFixed(2)}</p><Link href={`/account/orders/${recentOrder.id}`} className="mt-6 inline-block text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white">View order</Link></div> : <p className="mt-6 border-y border-white/[0.08] py-8 text-[15px] leading-7 text-white/40">You do not have any orders yet.</p>}
      </section>
      <section className="md:col-span-4 md:col-start-9">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">Account information</p>
        <p className="mt-6 text-lg">{name}</p>
        <p className="mt-2 break-words text-sm leading-6 text-white/40">{user.email}</p>
        <div className="mt-8 flex flex-wrap gap-5 text-[10px] uppercase tracking-[0.2em]">
          <Link href="/account/orders" className="text-white/60 hover:text-white">View orders</Link>
          <Link href="/account/settings" className="text-white/60 hover:text-white">Settings</Link>
        </div>
      </section>
    </div>
  </AccountLayout>;
}
