import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Lock,
  Truck,
} from "lucide-react";

import { products } from "@/data/products";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { ProductPurchase } from "@/components/shop/ProductPurchase";

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
          <p className="text-[11px] uppercase tracking-[0.4em] text-white/30">
            NOEXCUSIV
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-[-0.05em]">
            Product not found.
          </h1>

          <Link
            href="/shop"
            className="mt-8 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/40 transition hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* TOP BAR */}
      <div className="border-b border-white/[0.08] px-5 md:px-8">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.25em] text-white/40 transition hover:text-white"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Collection
          </Link>

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
            {product.collection}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 pb-28 pt-8 md:px-8 md:pt-12">
        {/* HERO */}
        <section className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:gap-24">
          {/* PRODUCT IMAGE */}
          <div className="min-w-0">
            <ProductGallery
              images={product.gallery}
              name={product.name}
              collection={product.collection}
            />
          </div>

          {/* PRODUCT INFO */}
          <div className="flex min-w-0 flex-col lg:py-3">
            {/* EYEBROW */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">
                Statement piece
              </p>

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                001
              </p>
            </div>

            {/* TITLE */}
            <div className="pt-8 md:pt-10">
              <h1 className="max-w-[800px] text-[clamp(3rem,6vw,6.5rem)] font-black leading-[0.86] tracking-[-0.075em]">
                {product.name}
              </h1>

              <p className="mt-7 max-w-xl text-[16px] leading-7 text-white/50 md:text-[17px] md:leading-8">
                {product.statementDescription}
              </p>
            </div>

            {/* PRICE */}
            <div className="mt-9 flex items-end justify-between border-b border-white/[0.08] pb-7">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/30">
                Price
              </span>

              <span className="text-[30px] font-semibold tracking-[-0.04em] text-white">
                €{product.price.toFixed(2)}
              </span>
            </div>

            {/* PURCHASE */}
            <ProductPurchase
              slug={product.slug}
              price={product.price}
              keyOptions={product.keyOptions}
            />

            {/* TRUST */}
            <div className="mt-9 grid grid-cols-2 border-y border-white/[0.08]">
              <div className="flex items-start gap-3.5 border-r border-white/[0.08] py-6 pr-5">
                <Lock
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-white/40"
                />

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                    Secure checkout
                  </p>

                  <p className="mt-2 text-[12px] leading-5 text-white/30">
                    Payments securely processed through Stripe.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 py-6 pl-5">
                <Truck
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-white/40"
                />

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                    Carefully prepared
                  </p>

                  <p className="mt-2 text-[12px] leading-5 text-white/30">
                    Protected carefully before dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE IDEA */}
        <section className="mt-28 border-t border-white/[0.08] pt-16 md:mt-36 md:pt-24">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/30">
                The idea
              </p>

              <h2 className="mt-7 max-w-sm text-4xl font-black leading-[0.92] tracking-[-0.06em] md:text-6xl">
                Keep the dream
                <br />
                visible.
              </h2>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <p className="text-[16px] leading-8 text-white/50 md:text-[17px]">
                {product.description}
              </p>

              <p className="mt-7 text-[16px] leading-8 text-white/35 md:text-[17px]">
                The key is a symbol of the destination. The piece is designed
                to keep that destination visible while the work is still being
                done.
              </p>
            </div>
          </div>
        </section>

        {/* DETAILS */}
        <section className="mt-28 border-t border-white/[0.08] pt-16 md:mt-36 md:pt-24">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/30">
                Specifications
              </p>

              <h2 className="mt-7 text-4xl font-black leading-[0.92] tracking-[-0.06em] md:text-6xl">
                The
                <br />
                essentials.
              </h2>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <div className="border-t border-white/[0.08]">
                {[
                  ["Material", product.details.material],
                  ["Dimensions", product.details.dimensions],
                  ["Finish", product.details.finish],
                  ["Presentation", product.details.presentation],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-8 border-b border-white/[0.08] py-6"
                  >
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
                      {label}
                    </span>

                    <span className="text-right text-[15px] text-white/70">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INCLUDED */}
        <section className="mt-28 border-t border-white/[0.08] pt-16 md:mt-36 md:pt-24">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/30">
                In the box
              </p>

              <h2 className="mt-7 text-4xl font-black leading-[0.92] tracking-[-0.06em] md:text-6xl">
                Nothing
                <br />
                missing.
              </h2>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {product.included.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-6 py-6"
                  >
                    <p className="text-[15px] text-white/60">
                      {item}
                    </p>

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10">
                      <Check
                        size={12}
                        strokeWidth={1.5}
                        className="text-white/50"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SHIPPING */}
        <section className="mt-28 border-t border-white/[0.08] pt-16 md:mt-36 md:pt-24">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="border border-white/[0.08] p-8 md:p-9">
              <Truck
                size={20}
                strokeWidth={1.5}
                className="text-white/40"
              />

              <h3 className="mt-8 text-[16px] font-semibold">
                Prepared with care
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-white/35">
                Each piece is carefully protected before it leaves.
              </p>
            </div>

            <div className="border border-white/[0.08] p-8 md:p-9">
              <Lock
                size={20}
                strokeWidth={1.5}
                className="text-white/40"
              />

              <h3 className="mt-8 text-[16px] font-semibold">
                Secure payment
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-white/35">
                Checkout is securely processed through Stripe.
              </p>
            </div>

            <div className="border border-white/[0.08] p-8 md:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Shipping
              </p>

              <h3 className="mt-8 text-[16px] font-semibold">
                Ready for its new space
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-white/35">
                Carefully packaged and prepared for delivery.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}