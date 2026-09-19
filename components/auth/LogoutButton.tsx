"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function logout() {
    setLoading(true);
    const { error } = await createClient().auth.signOut();
    if (error) {
      console.error("Supabase logout failed:", error);
      setLoading(false);
      return;
    }
    router.push("/login");
    router.refresh();
  }

  return (
    <button type="button" onClick={logout} disabled={loading} className="text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-white disabled:opacity-50">
      {loading ? "Logging out" : "Log out"}
    </button>
  );
}
