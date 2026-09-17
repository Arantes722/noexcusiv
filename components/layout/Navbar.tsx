"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === href) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5">
          <Link
            href="/"
            onClick={(event) => handleNavClick(event, "/")}
            className="shrink-0 text-[15px] font-bold tracking-[0.18em] transition hover:opacity-80 sm:text-xl sm:tracking-[0.25em]"
          >
            NOEXCUSIV
          </Link>

          <div className="flex min-w-0 items-center gap-3 text-[9px] uppercase tracking-[0.12em] sm:gap-8 sm:text-sm sm:tracking-[0.2em]">
            <Link
              href="/"
              onClick={(event) => handleNavClick(event, "/")}
              className="whitespace-nowrap transition hover:text-white/70"
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={(event) => handleNavClick(event, "/shop")}
              className="whitespace-nowrap transition hover:text-white/70"
            >
              Collection
            </Link>

            <Link
              href="/about"
              onClick={(event) => handleNavClick(event, "/about")}
              className="whitespace-nowrap transition hover:text-white/70"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}