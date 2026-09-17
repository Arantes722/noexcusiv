import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { products } from "@/data/products";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { ProductPurchase } from "@/components/shop/ProductPurchase";
import { ProductInformation } from "@/components/shop/ProductInformation";
import { ProductDetails } from "@/components/shop/ProductDetails";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
            NOEXCUSIV
          </p>

          <h1 className="mt-6 text-4xl font-black">
            Product not found.
          </h1>

          <Link
            href="/shop"
            className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 pb-32 pt-32 text-white">
      <div className="mx-auto max-w-7xl">

        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-white"
        >
          <ArrowLeft size={13} />
          Collection
        </Link>

        <section className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          <div>
            <ProductGallery
              images={product.gallery}
              name={product.name}
            />
          </div>

          <div className="flex flex-col justify-center lg:sticky lg:top-32 lg:h-fit">

            <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
              {product.collection}
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
              {product.name}
            </h1>

            <div className="mt-7 text-2xl font-medium">
              €{product.price.toFixed(2)}
            </div>

            <div className="mt-8 h-px w-full bg-white/10" />

            <p className="mt-8 max-w-lg text-sm leading-7 text-white/45 md:text-base">
              {product.description}
            </p>

            <ProductPurchase
              slug={product.slug}
              price={product.price}
            />

            <div className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/25">
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              NOEXCUSIV — FIRST PIECE
            </div>

          </div>

        </section>

        <section className="mt-32 border-t border-white/10 pt-20">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
                The piece
              </p>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] md:text-5xl">
                More than an object.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/35">
              Created to have presence, character and a reason to exist
              in the space around you.
            </p>

          </div>

          <ProductInformation />

        </section>

        <section className="mt-32 border-t border-white/10 pt-20">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
                The NOEXCUSIV standard
              </p>

              <h2 className="mt-5 max-w-2xl text-3xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
                Designed with intention.
                <br />
                Made to mean something.
              </h2>
            </div>

            <ArrowUpRight
              className="hidden text-white/20 md:block"
              size={28}
            />

          </div>

          <ProductDetails />

        </section>

        <section className="mt-32 border-t border-white/10 pt-20">

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
              NOEXCUSIV
            </p>

            <h2 className="mt-7 text-4xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
              Average was
              <br />
              never the goal.
            </h2>

            <Link
              href="/shop"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black hover:scale-105"
            >
              Explore the collection
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
}