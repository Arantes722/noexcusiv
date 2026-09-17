"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black px-5 pb-24 pt-28 text-white md:px-8">
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}
        <section className="border-b border-white/10 pb-8">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-white/30">
                NOEXCUSIV / COLLECTION
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-6xl">
                The Collection
              </h1>
            </div>

            <p className="max-w-sm text-[15px] leading-7 text-white/35 md:text-right">
              Distinctive pieces designed to bring identity,
              presence and character into your space.
            </p>

          </div>
        </section>

        {/* TOOLBAR */}
        <div className="flex items-center justify-between border-b border-white/10 py-5">

          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/30">
            {products.length}{" "}
            {products.length === 1 ? "piece" : "pieces"}
          </p>

          <button
            type="button"
            className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-white/35 transition hover:text-white"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter & Sort
          </button>

        </div>

        {/* PRODUCTS */}
        {products.length > 0 ? (
          <section className="grid grid-cols-2 gap-x-4 gap-y-12 pt-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-16">

            {products.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.08,
                }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.04, 0.2),
                }}
              >

                <Link
                  href={`/shop/${product.slug}`}
                  className="group block"
                >

                  {/* PRODUCT IMAGE */}
                  <div className="relative overflow-hidden rounded-2xl bg-zinc-950">

                    <div className="relative aspect-[4/5] overflow-hidden">

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="
                          (max-width: 640px) 50vw,
                          (max-width: 1024px) 33vw,
                          25vw
                        "
                        className="
                          object-cover
                          transition
                          duration-700
                          ease-out
                          group-hover:scale-[1.04]
                        "
                      />

                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

                      {/* QUICK VIEW / ARROW */}
                      <div
                        className="
                          absolute
                          bottom-4
                          right-4
                          flex
                          h-10
                          w-10
                          translate-y-2
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          text-black
                          opacity-0
                          transition
                          duration-300
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                      >
                        <ArrowUpRight size={15} />
                      </div>

                    </div>

                  </div>

                  {/* PRODUCT INFO */}
                  <div className="mt-4 flex items-start justify-between gap-4">

                    <div className="min-w-0">

                      <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/25">
                        {product.collection}
                      </p>

                      <h2 className="mt-1.5 truncate text-[15px] font-medium tracking-[-0.01em] text-white">
                        {product.name}
                      </h2>

                    </div>

                    <p className="shrink-0 text-[15px] font-medium text-white/70">
                      €{product.price.toFixed(2)}
                    </p>

                  </div>

                </Link>

              </motion.article>
            ))}

          </section>
        ) : (
          /* EMPTY STATE */
          <section className="flex min-h-[50vh] items-center justify-center">

            <div className="text-center">

              <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-white/20">
                NOEXCUSIV
              </p>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.05em]">
                Coming soon.
              </h2>

              <p className="mx-auto mt-3 max-w-sm text-[15px] leading-6 text-white/30">
                The first collection is currently being prepared.
              </p>

            </div>

          </section>
        )}

      </div>
    </main>
  );
}