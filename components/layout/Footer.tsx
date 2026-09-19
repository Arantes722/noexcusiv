import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-7 md:px-8 md:py-8">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-7 md:grid-cols-12 md:items-start md:gap-6">

          {/* BRAND */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-base font-bold tracking-[0.18em] transition hover:opacity-70"
            >
              NOEXCUSIV
            </Link>

            <p className="mt-2 max-w-xs text-[11px] leading-5 text-white/30">
              Distinctive pieces for the spaces and lives we build.
            </p>
          </div>

          {/* EXPLORE */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
              Explore
            </p>

            <nav className="mt-2 flex flex-col gap-1.5 text-[11px] text-white/40">
              <Link
                href="/shop"
                className="transition hover:text-white"
              >
                Collection
              </Link>

              <Link
                href="/about"
                className="transition hover:text-white"
              >
                About
              </Link>
            </nav>
          </div>

          {/* CONNECT */}
          <div className="md:col-span-2">
            <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
              Connect
            </p>

            <nav className="mt-2 flex flex-col gap-1.5 text-[11px] text-white/40">
              <a
                href="https://www.tiktok.com/@noexcusivclub"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                TikTok ↗
              </a>

              <a
                href="https://www.instagram.com/noexcusivclub"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Instagram ↗
              </a>

              <a
                href="mailto:noexcusivclub@gmail.com"
                className="transition hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* LEGAL */}
          <div className="md:col-span-2">
            <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
              Legal
            </p>

            <nav className="mt-2 flex flex-col gap-1.5 text-[11px] text-white/40">
              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy
              </Link>

              <Link href="/shipping" className="transition hover:text-white">
                Shipping
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms
              </Link>

              <Link
                href="/refund"
                className="transition hover:text-white"
              >
                Refunds
              </Link>

            </nav>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 flex items-center justify-between text-[8px] uppercase tracking-[0.25em] text-white/15">
          <p>© {new Date().getFullYear()} NOEXCUSIV</p>
          <p>#NOEXCUSIVCLUB</p>
        </div>

      </div>
    </footer>
  );
}