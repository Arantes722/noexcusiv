import Image from "next/image";
import Link from "next/link";

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
        max-w-5xl
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

      <div
        className="
          mt-12
          grid
          gap-10
          md:grid-cols-2
        "
      >
        {/* PRODUCT */}

        <div
          className="
            rounded-3xl
            bg-white/5
            p-6
          "
        >
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            priority
            className="
              rounded-2xl
            "
          />

          <h2
            className="
              mt-6
              text-2xl
              font-bold
            "
          >
            {product.name}
          </h2>

          <p
            className="
              mt-2
              text-white/50
            "
          >
            {product.collection}
          </p>
        </div>

        {/* ORDER SUMMARY */}

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

          <div
            className="
              mt-8
              space-y-4
            "
          >
            <div
              className="
                flex
                justify-between
                text-white/70
              "
            >
              <span>{product.name}</span>

              <span>€{product.price}</span>
            </div>

            <div
              className="
                border-t
                border-white/10
                pt-4
                flex
                justify-between
                text-xl
                font-bold
              "
            >
              <span>Total</span>

              <span>€{product.price}</span>
            </div>
          </div>

          {/* STRIPE CHECKOUT */}

          <CheckoutButton slug={product.slug} />

          <Link
            href={`/shop/${product.slug}`}
            className="
              mt-6
              block
              text-center
              text-sm
              text-white/50
            "
          >
            ← Back to product
          </Link>
        </div>
      </div>
    </main>
  );
}
