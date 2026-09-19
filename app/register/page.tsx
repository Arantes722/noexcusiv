import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/auth/AuthForm";
import { getAuthenticatedUser } from "@/lib/account";

export const dynamic = "force-dynamic";

export default async function RegisterPage() {
  if (await getAuthenticatedUser()) redirect("/account");
  return (
    <main className="min-h-screen bg-black px-5 pb-28 pt-36 text-white sm:px-6">
      <div className="mx-auto max-w-md">
        <p className="text-[10px] uppercase tracking-[0.45em] text-white/25">NOEXCUSIV / ACCOUNT</p>
        <h1 className="mt-8 text-6xl font-black leading-[0.85] tracking-[-0.075em]">JOIN<br />NOEXCUSIV.</h1>
        <p className="mt-7 text-[15px] leading-7 text-white/40">Create an account to keep your orders and details in one place.</p>
        <AuthForm mode="register" />
        <p className="mt-8 text-center text-sm text-white/35">Already have an account? <Link href="/login" className="text-white underline underline-offset-4">Log in</Link></p>
      </div>
    </main>
  );
}
