import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center px-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/35">
              NOEXCUSIV
            </p>

            <h1 className="mt-7 text-6xl font-black leading-[0.86] tracking-[-0.065em] sm:text-7xl md:text-9xl">
              NO
              <br />
              EXCUSES.
            </h1>

            <p className="mt-10 max-w-lg text-sm leading-7 text-white/45 md:text-base">
              For those who refuse an average life.
            </p>

            <Link
              href="/shop"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
            >
              Explore the collection
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="border-y border-white/[0.08] px-6 py-28 md:py-40">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
              Why NOEXCUSIV
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] md:text-5xl">
              Your environment should reflect
              the life you are building.
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-white/40 md:text-base">
              <p>
                NOEXCUSIV exists to make ambition tangible.
              </p>

              <p>
                We create distinctive pieces designed to bring the
                NOEXCUSIV mindset into the spaces you live in, work in
                and build your life around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE COLLECTION */}
      <section className="px-6 py-28 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
              The collection
            </p>

            <h2 className="mt-7 text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Pieces that
              <br />
              change a space.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              From statement pieces for your walls to objects that become
              part of your everyday environment, NOEXCUSIV is creating
              products designed to shape the spaces they belong to.
            </p>
          </div>
        </div>
      </section>

      {/* FIRST PIECE */}
      <section className="border-y border-white/[0.08] px-6 py-28 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
                The first piece
              </p>

              <h2 className="mt-5 text-5xl font-black tracking-[-0.05em] md:text-7xl">
                FIRST PIECE.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/35">
              The beginning of the NOEXCUSIV collection.
              A statement piece created to bring the identity
              of the brand into your space.
            </p>
          </div>

          <div className="relative mt-12 flex min-h-[560px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-zinc-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.09),transparent_32%)]" />

            <div className="relative text-center">
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
                NOEXCUSIV
              </p>

              <p className="mt-5 text-3xl font-bold text-white/20 md:text-5xl">
                FIRST PIECE
              </p>

              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/15">
                Coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STANDARD */}
      <section className="border-y border-white/[0.08] px-6 py-28 md:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
            The NOEXCUSIV standard
          </p>

          <h2 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Designed with intention.
            <br />
            Made to mean something.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
            We care about how a piece looks, how it feels and what it
            represents. Every product should deserve its place in your space.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-28 md:py-36">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
              Enter NOEXCUSIV
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Start with
              <br />
              the first piece.
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
          >
            Discover the first piece
            <MoveRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}