"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Mode = "login" | "register";

export function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (mode === "register" && password !== confirmation) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();
      const result =
        mode === "login"
          ? await supabase.auth.signInWithPassword({ email, password })
          : await supabase.auth.signUp({
              email,
              password,
              options: { data: { full_name: fullName.trim() || null } },
            });

      if (result.error) {
        setError(result.error.message);
        return;
      }

      if (mode === "register" && !result.data.session) {
        setMessage("Account created. Check your email to confirm your address before signing in.");
        return;
      }

      router.push("/account");
      router.refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Authentication failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
      {mode === "register" ? (
        <label className="block">
          <span className="field-label">Full name <span className="text-white/20">(optional)</span></span>
          <input value={fullName} onChange={(event) => setFullName(event.target.value)} className="field-input" autoComplete="name" />
        </label>
      ) : null}
      <label className="block">
        <span className="field-label">Email</span>
        <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="field-input" autoComplete="email" />
      </label>
      <label className="block">
        <span className="field-label">Password</span>
        <input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="field-input" autoComplete={mode === "login" ? "current-password" : "new-password"} />
      </label>
      {mode === "register" ? (
        <label className="block">
          <span className="field-label">Confirm password</span>
          <input required type="password" value={confirmation} onChange={(event) => setConfirmation(event.target.value)} className="field-input" autoComplete="new-password" />
        </label>
      ) : null}
      {error ? <p role="alert" className="text-sm text-red-300">{error}</p> : null}
      {message ? <p role="status" className="text-sm text-white/60">{message}</p> : null}
      <button disabled={loading} className="w-full bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white/85 disabled:cursor-not-allowed disabled:opacity-50">
        {loading ? "Please wait" : mode === "login" ? "Log in" : "Create account"}
      </button>
    </form>
  );
}
