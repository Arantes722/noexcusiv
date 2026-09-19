import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/auth/AuthForm";
import { getAuthenticatedUser } from "@/lib/account";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  if (await getAuthenticatedUser()) redirect("/account");
  return (
    <main className="min-h-screen bg-black px-5 pb-28 pt-36 text-white sm:px-6">
      <div className="mx-auto max-w-md">
        <p className="text-[10px] uppercase tracking-[0.45em] text-white/25">NOEXCUSIV / ACCOUNT</p>
        <h1 className="mt-8 text-6xl font-black leading-[0.85] tracking-[-0.075em]">WELCOME<br />BACK.</h1>
        <p className="mt-7 text-[15px] leading-7 text-white/40">Sign in to view your orders and account information.</p>
        <AuthForm mode="login" />
        <p className="mt-8 text-center text-sm text-white/35">New to NOEXCUSIV? <Link href="/register" className="text-white underline underline-offset-4">Create an account</Link></p>
      </div>
    </main>
  );
}
