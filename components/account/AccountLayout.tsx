import type { ReactNode } from "react";
import { AccountNavigation } from "./AccountNavigation";
import { LogoutButton } from "@/components/auth/LogoutButton";

export function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-black px-5 pb-28 pt-32 text-white sm:px-6 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <AccountNavigation />
        <div className="pt-12">{children}</div>
        <div className="mt-16 border-t border-white/[0.08] pt-5">
          <LogoutButton />
        </div>
      </div>
    </main>
  );
}
