"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, Lock } from "lucide-react";

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
      {/* QUANTITY */}

      <div className="mt-8">
        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/35">
          Quantity
        </p>

        <div className="flex w-fit items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
          <button
            type="button"
            onClick={decrease}
            className="flex h-12 w-12 items-center justify-center text-white/60 transition hover:bg-white/10 hover:text-white"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>

          <div className="flex h-12 w-14 items-center justify-center text-sm font-medium">
            {quantity}
          </div>

          <button
            type="button"
            onClick={increase}
            className="flex h-12 w-12 items-center justify-center text-white/60 transition hover:bg-white/10 hover:text-white"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
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
          text-sm
          font-bold
          uppercase
          tracking-[0.18em]
          text-black
          transition
          hover:scale-[1.02]
          hover:bg-white/90
        "
      >
        Buy now · €{(price * quantity).toFixed(2)}
      </Link>

      {/* SECURE CHECKOUT */}

      <div className="mt-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
        <Lock size={13} />
        <span>Secure checkout · Stripe</span>
      </div>
    </>
  );
}

