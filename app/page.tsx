"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.88]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  return (
    <main className="overflow-hidden bg-black text-white">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 px-6 pt-24"
      >
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="mx-auto w-full max-w-7xl"
        >
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] uppercase tracking-[0.5em] text-white/30"
            >
              NOEXCUSIV / 001
            </motion.p>

            <div className="mt-8 grid gap-10 md:grid-cols-12 md:items-end">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[19vw] font-black leading-[0.75] tracking-[-0.09em] md:col-span-9 md:text-[11rem]"
              >
                NO
                <br />
                EXCUSES.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-xs md:col-span-3 md:pb-3"
              >
                <p className="text-[15px] leading-7 text-white/40">
                  A lifestyle brand for people who refuse to settle
                  for an average life.
                </p>

                <Link
                  href="/shop"
                  className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] transition hover:text-white/50"
                >
                  Enter NOEXCUSIV
                  <ArrowUpRight size={15} />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-white/20"
            >
              <ArrowDown size={14} />
              Scroll to explore
            </motion.div>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-white/[0.025] blur-3xl" />
      </section>

      {/* STATEMENT */}
      <section className="border-b border-white/10 px-6 py-32 md:py-48">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.45em] text-white/25">
                01 / Philosophy
              </p>
            </div>

            <div className="md:col-span-9 md:col-start-4">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9 }}
                className="text-4xl font-bold leading-[1.05] tracking-[-0.045em] md:text-7xl"
              >
                Your environment should reflect
                <span className="text-white/25">
                  {" "}
                  the life you are building.
                </span>
              </motion.h2>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PIECE */}
      <section className="border-b border-white/10 px-6 py-28 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.45em] text-white/25">
              02 / First release
            </p>

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
              NOEXCUSIV / 001
            </span>
          </div>

          <div className="grid items-center gap-16 md:grid-cols-12 md:gap-20">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5"
            >
              <p className="text-[10px] uppercase tracking-[0.45em] text-white/25">
                Statement piece
              </p>

              <h2 className="mt-6 max-w-lg text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                KEEP
                <br />
                GOING
                <br />
                FOR IT.
              </h2>

              <p className="mt-8 max-w-md text-[15px] leading-7 text-white/40">
                A physical reminder of the things worth pursuing.
                Designed to live in your space and keep the bigger
                picture in sight.
              </p>

              <p className="mt-6 max-w-md text-[15px] leading-7 text-white/30">
                Some dreams take years to become real.
                That doesn't make them any less worth chasing.
              </p>

              <div className="mt-10 flex items-center gap-8">
                <span className="text-sm font-medium tracking-wide text-white">
                  €49.90
                </span>

                <Link
                  href="/shop/pursuit"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition duration-300 hover:scale-105"
                >
                  Explore piece
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="flex justify-end md:col-span-7 md:col-start-6"
            >
              <Link
                href="/shop/pursuit"
                className="group relative block w-full max-w-[520px]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950">
                  <Image
                    src="/products/pursuit.jpg"
                    alt="KEEP GOING FOR IT."
                    fill
                    sizes="(max-width: 768px) 100vw, 520px"
                    quality={100}
                    className="object-contain transition duration-700 group-hover:scale-[1.015]"
                  />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative border-b border-white/10 px-6 py-32 md:py-48">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.45em] text-white/25">
              03 / The mindset
            </p>

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/15">
              NOEXCUSIV CLUB
            </span>
          </div>

          <div className="space-y-5 md:space-y-8">
            {[
              "Average was never the goal.",
              "Nobody is coming.",
              "Build anyway.",
              "Become unstoppable.",
            ].map((line, index) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                className="group flex items-center gap-5 border-b border-white/10 pb-5 md:pb-8"
              >
                <span className="text-[10px] text-white/20">
                  0{index + 1}
                </span>

                <p className="text-3xl font-black tracking-[-0.045em] transition group-hover:translate-x-3 md:text-6xl">
                  {line}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION PREVIEW */}
      <section className="border-b border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-white/25">
                04 / What comes next
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
                Built beyond
                <br />
                one piece.
              </h2>
            </div>

            <p className="max-w-sm text-[15px] leading-7 text-white/35">
              Pieces for walls, rooms and environments.
              Objects designed to become part of the life around them.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "WALLS",
                text: "Statement pieces with presence.",
              },
              {
                number: "02",
                title: "SPACES",
                text: "Objects that shape an environment.",
              },
              {
                number: "03",
                title: "OBJECTS",
                text: "Pieces created to mean something.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group min-h-[280px] rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-2 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] tracking-[0.3em] text-white/20">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-white/20 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                  />
                </div>

                <div className="mt-24">
                  <h3 className="text-2xl font-black tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] text-white/35">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 px-6 py-28 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-12 md:items-end">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-8"
            >
              <p className="text-[10px] uppercase tracking-[0.45em] text-white/25">
                05 / Enter NOEXCUSIV
              </p>

              <h2 className="mt-8 text-6xl font-black leading-[0.82] tracking-[-0.07em] md:text-[8rem]">
                REFUSE
                <br />
                AVERAGE.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-4 md:pb-3"
            >
              <div className="border-l border-white/15 pl-6">
                <p className="max-w-xs text-[15px] leading-7 text-white/35">
                  The first piece is only the beginning.
                  Enter the collection and discover what comes next.
                </p>

                <Link
                  href="/shop"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:scale-105"
                >
                  Explore collection
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-20 h-px origin-left bg-white/10"
          />

          <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/15">
            <span>NOEXCUSIV</span>
            <span>NO EXCUSES. NO AVERAGE LIFE.</span>
          </div>
        </div>
      </section>
    </main>
  );
}