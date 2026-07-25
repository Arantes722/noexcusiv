import Image from "next/image";
import Link from "next/link";
import { Check, Lock } from "lucide-react";

import { products } from "@/constants/products";
import { CheckoutButton } from "@/components/shop/CheckoutButton";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CheckoutPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main
        className="
          pt-32
          text-center
        "
      >
        <h1
          className="
            text-4xl
            font-bold
          "
        >
          Product not found
        </h1>
      </main>
    );
  }

  return (
    <main
      className="
        mx-auto
        max-w-6xl
        px-6
        pb-24
        pt-32
      "
    >
      <p
        className="
          text-sm
          uppercase
          tracking-[0.5em]
          text-white/50
        "
      >
        Checkout
      </p>

      <h1
        className="
          mt-6
          text-5xl
          font-bold
        "
      >
        Complete your order
      </h1>

      <p
        className="
          mt-4
          max-w-lg
          text-white/60
        "
      >
        You're one step away from joining NOEXCUSIV.
      </p>

      <div
        className="
          mt-14
          grid
          gap-10
          lg:grid-cols-[1.2fr_0.8fr]
        "
      >
        {/* PRODUCT */}

        <div
          className="
            rounded-3xl
            bg-white/5
            p-8
          "
        >
          <Image
            src={product.image}
            alt={product.name}
            width={900}
            height={900}
            priority
            className="
              rounded-2xl
            "
          />
        </div>

        {/* SUMMARY */}

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
          "
        >
          <h2
            className="
              text-2xl
              font-bold
            "
          >
            Order Summary
          </h2>

          {/* PRODUCT */}

          <div
            className="
              mt-8
              flex
              gap-4
            "
          >
            <Image
              src={product.image}
              alt={product.name}
              width={90}
              height={90}
              className="
                rounded-xl
              "
            />

            <div className="flex-1">
              <h3 className="font-semibold">{product.name}</h3>

              <p
                className="
                  mt-1
                  text-sm
                  text-white/50
                "
              >
                Classic Dad Hat
              </p>
            </div>
          </div>

          {/* PRICE */}

          <div
            className="
              mt-8
              space-y-5
              text-white/70
            "
          >
            <div className="flex justify-between">
              <span>Quantity</span>

              <span>1</span>
            </div>

            <div className="flex justify-between">
              <span>Unit Price</span>

              <span>€{product.price.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>

              <span className="font-semibold">FREE</span>
            </div>

            <div
              className="
                border-t
                border-white/10
                pt-5
                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  text-xl
                  font-bold
                "
              >
                Total
              </span>

              <span
                className="
                  text-3xl
                  font-bold
                "
              >
                €{product.price.toFixed(2)}
              </span>
            </div>
          </div>

          {/* TRUST */}

          <div
            className="
              mt-8
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-5
            "
          >
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Check size={16} />
                <span>Free Shipping</span>
              </div>

              <div className="flex items-center gap-3">
                <Check size={16} />
                <span>Europe only</span>
              </div>

              <div className="flex items-center gap-3">
                <Check size={16} />
                <span>Made to order</span>
              </div>

              <div className="flex items-center gap-3">
                <Check size={16} />
                <span>Estimated delivery: 5–15 business days</span>
              </div>

              <div className="flex items-center gap-3">
                <Check size={16} />
                <span>Tracking included</span>
              </div>
            </div>
          </div>

          <CheckoutButton slug={product.slug} />

          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
              text-sm
              text-white/45
            "
          >
            <Lock size={15} />

            <span>Secure payments powered by Stripe</span>
          </div>

          <Link
            href={`/shop/${product.slug}`}
            className="
              mt-8
              block
              text-center
              text-sm
              text-white/50
              transition
              hover:text-white
            "
          >
            ← Back to product
          </Link>
        </div>
      </div>
    </main>
  );
}
