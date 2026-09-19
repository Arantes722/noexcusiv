import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";

import { products } from "@/data/products";
import { CheckoutButton } from "@/components/shop/CheckoutButton";

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    quantity?: string;
    key?: string;
  }>;
};

export default async function CheckoutPage({
  params,
  searchParams,
}: Props) {
  const { slug } = await params;
  const { quantity: quantityParam, key: selectedKey } = await searchParams;

  const parsedQuantity = Number(quantityParam);

  const quantity =
    Number.isInteger(parsedQuantity) &&
    parsedQuantity >= 1 &&
    parsedQuantity <= 10
      ? parsedQuantity
      : 1;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
            NOEXCUSIV
          </p>

          <h1 className="mt-6 text-4xl font-black">
            Product not found
          </h1>

          <Link
            href="/shop"
            className="mt-8 inline-block text-sm text-white/50 hover:text-white"
          >
            Back to collection
          </Link>
        </div>
      </main>
    );
  }

  const total = product.price * quantity;

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-32">
      <p className="text-[10px] uppercase tracking-[0.5em] text-white/30">
        Checkout
      </p>

      <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] md:text-6xl">
        Complete your order.
      </h1>

      <p className="mt-5 max-w-lg text-sm leading-7 text-white/45">
        You&apos;re one step away from your NOEXCUSIV piece.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <Image
            src={product.image}
            alt={product.name}
            width={900}
            height={900}
            priority
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/25">
            Order summary
          </p>

          <div className="mt-8 flex gap-4">
            <Image
              src={product.image}
              alt={product.name}
              width={90}
              height={90}
              className="rounded-xl object-cover"
            />

            <div className="flex-1">
              <h2 className="font-bold">
                {product.name}
              </h2>

              <p className="mt-1 text-sm text-white/40">
                {product.collection}
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-5 text-sm text-white/60">
            <div className="flex justify-between">
              <span>Quantity</span>
              <span className="text-white">
                {quantity}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Unit price</span>
              <span className="text-white">
                €{product.price.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-white/35">
                Calculated at checkout
              </span>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="flex items-end justify-between">
                <span className="font-bold text-white">
                  Total
                </span>

                <span className="text-3xl font-black text-white">
                  €{total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <CheckoutButton
            slug={product.slug}
            quantity={quantity}
            selectedKey={selectedKey}
          />

          <div className="mt-5 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
            <Lock size={13} />
            <span>Secure payments · Stripe</span>
          </div>

          <Link
            href={`/shop/${product.slug}`}
            className="mt-8 block text-center text-xs uppercase tracking-[0.2em] text-white/30 hover:text-white"
          >
            Back to product
          </Link>
        </div>
      </div>
    </main>
  );
}
