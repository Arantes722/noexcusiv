"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Minus, Plus, Lock } from "lucide-react";

type Props = {
  slug: string;
  price: number;
};

export function ProductPurchase({ slug, price }: Props) {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      {/* QUICK BENEFITS */}

      <div
        className="
          mt-8
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-5
        "
      >
        <div
          className="
            space-y-3
            text-sm
            text-white/70
          "
        >
          <div className="flex items-center gap-3">
            <Check size={16} />
            <span>Adjustable One Size Fit</span>
          </div>

          <div className="flex items-center gap-3">
            <Check size={16} />
            <span>Free Shipping</span>
          </div>

          <div className="flex items-center gap-3">
            <Check size={16} />
            <span>Estimated delivery: 5–15 business days</span>
          </div>
        </div>
      </div>

      {/* QUANTITY */}

      <div className="mt-8">
        <p
          className="
            mb-3
            text-sm
            uppercase
            tracking-widest
            text-white/50
          "
        >
          Quantity
        </p>

        <div
          className="
            flex
            w-fit
            items-center
            overflow-hidden
            rounded-full
            border
            border-white/10
            bg-white/5
          "
        >
          <button
            onClick={decrease}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              transition
              hover:bg-white/10
            "
          >
            <Minus size={18} />
          </button>

          <div
            className="
              flex
              h-12
              w-16
              items-center
              justify-center
              font-semibold
            "
          >
            {quantity}
          </div>

          <button
            onClick={increase}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              transition
              hover:bg-white/10
            "
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* BUY BUTTON */}

      <Link
        href={`/checkout/${slug}?quantity=${quantity}`}
        className="
          mt-8
          inline-flex
          w-full
          items-center
          justify-center
          rounded-full
          bg-white
          px-10
          py-4
          text-lg
          font-bold
          text-black
          transition
          hover:scale-[1.02]
        "
      >
        Buy Now • €{(price * quantity).toFixed(2)}
      </Link>

      {/* SECURE CHECKOUT */}

      <div
        className="
          mt-4
          flex
          items-center
          justify-center
          gap-2
          text-sm
          text-white/45
        "
      >
        <Lock size={15} />

        <span>Secure checkout powered by Stripe</span>
      </div>
    </>
  );
}
