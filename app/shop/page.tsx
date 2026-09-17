import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <section className="max-w-4xl">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
            NOEXCUSIV
          </p>

          <h1 className="mt-7 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-8xl">
            THE
            <br />
            COLLECTION.
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/40 md:text-base">
            Distinctive pieces created for the spaces you live in,
            work in and build your life around.
          </p>
        </section>

        {/* FIRST PIECE */}
        <section className="mt-24">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
                The first piece
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] md:text-5xl">
                FIRST PIECE.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/35">
              The beginning of the NOEXCUSIV collection.
            </p>
          </div>

          <div className="relative mt-8 flex min-h-[600px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-zinc-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.09),transparent_32%)]" />

            <div className="relative text-center">
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
                NOEXCUSIV
              </p>

              <h3 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white/20 md:text-6xl">
                FIRST PIECE
              </h3>

              <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-white/15">
                Coming soon
              </p>
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm text-white/35">
                The first NOEXCUSIV statement piece.
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/20">
                Details coming soon
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:text-white/60"
            >
              Back to NOEXCUSIV
              <MoveRight size={15} />
            </Link>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-32 border-t border-white/10 pt-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
                Stay close
              </p>

              <h2 className="mt-5 max-w-2xl text-3xl font-black tracking-[-0.04em] md:text-5xl">
                The collection
                <br />
                is only beginning.
              </h2>
            </div>

            <a
              href="https://www.tiktok.com/@noexcusivclub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
            >
              Follow NOEXCUSIV
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}