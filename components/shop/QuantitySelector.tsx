"use client";

import { Minus, Plus } from "lucide-react";

type Props = {
  quantity: number;
  setQuantity: (value: number) => void;
};

export function QuantitySelector({
  quantity,
  setQuantity,
}: Props) {
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
  );
}