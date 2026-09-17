import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-12">
          {/* BRAND */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-xl font-bold tracking-[0.18em] transition hover:opacity-70"
            >
              NOEXCUSIV
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
              A lifestyle brand creating distinctive pieces for the spaces
              and lives we build.
            </p>

            <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-white/20">
              #NOEXCUSIVCLUB
            </p>
          </div>

          {/* COLLECTION */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em]">
              Collection
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/40">
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

              <Link
                href="/shipping"
                className="transition hover:text-white"
              >
                Shipping
              </Link>
            </div>
          </div>

          {/* CONNECT */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em]">
              Connect
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/40">
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
            </div>
          </div>

          {/* LEGAL */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em]">
              Legal
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/40">
              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy
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
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NOEXCUSIV</p>

          <p>NO EXCUSES. NO AVERAGE LIFE.</p>
        </div>
      </div>
    </footer>
  );
}