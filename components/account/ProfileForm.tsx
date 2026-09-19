"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function ProfileForm({ initialName, email }: { initialName: string; email: string }) {
  const [name, setName] = useState(initialName);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setError("Your session has expired. Please log in again.");
      setLoading(false);
      return;
    }
    const { error: updateError } = await supabase.from("profiles").update({ full_name: name.trim() }).eq("id", user.id);
    if (updateError) setError(updateError.message);
    else setMessage("Your name has been updated.");
    setLoading(false);
  }

  return <form onSubmit={submit} className="max-w-xl space-y-6">
    <label className="block"><span className="field-label">Full name</span><input value={name} onChange={(event) => setName(event.target.value)} className="field-input" required /></label>
    <div><span className="field-label">Email</span><p className="break-words text-sm text-white/45">{email}</p><p className="mt-2 text-xs leading-5 text-white/25">Email changes require Supabase Auth email-change confirmation and are not editable here.</p></div>
    {error ? <p role="alert" className="text-sm text-red-300">{error}</p> : null}
    {message ? <p role="status" className="text-sm text-white/60">{message}</p> : null}
    <button disabled={loading} className="bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black disabled:opacity-50">{loading ? "Saving" : "Save changes"}</button>
  </form>;
}
