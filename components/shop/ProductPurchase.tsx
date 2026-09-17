"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Minus, Plus } from "lucide-react";

import { ProductKeyOption } from "@/types/product";

type Props = {
  slug: string;
  price: number;
  keyOptions?: ProductKeyOption[];
};

export function ProductPurchase({
  slug,
  price,
  keyOptions = [],
}: Props) {
  const availableKey =
    keyOptions.find((option) => option.status === "available") ??
    keyOptions[0];

  const [selectedKey, setSelectedKey] = useState(
    availableKey?.id ?? ""
  );

  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increase = () => {
    setQuantity((current) => Math.min(10, current + 1));
  };

  const selectedOption = keyOptions.find(
    (option) => option.id === selectedKey
  );

  const checkoutUrl =
    `/checkout/${slug}?quantity=${quantity}` +
    (selectedKey ? `&key=${selectedKey}` : "");

  return (
    <div className="mt-9">

      {/* KEY SELECTION */}
      {keyOptions.length > 0 && (
        <div>

          <div className="flex items-end justify-between gap-6">

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                Choose your key
              </p>

              {selectedOption && (
                <p className="mt-2 text-[15px] font-medium text-white">
                  {selectedOption.name}
                </p>
              )}
            </div>

            <span className="pb-0.5 text-[10px] uppercase tracking-[0.18em] text-white/25">
              {keyOptions.filter(
                (option) => option.status === "available"
              ).length}{" "}
              available
            </span>

          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">

            {keyOptions.map((option) => {
              const isAvailable =
                option.status === "available";

              const isSelected =
                selectedKey === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  disabled={!isAvailable}
                  onClick={() => {
                    if (isAvailable) {
                      setSelectedKey(option.id);
                    }
                  }}
                  className={`
                    group
                    relative
                    min-h-[68px]
                    rounded-xl
                    border
                    px-4
                    py-3.5
                    text-left
                    transition-all
                    ${
                      isSelected
                        ? "border-white bg-white"
                        : "border-white/[0.11] bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05]"
                    }
                    ${
                      isAvailable
                        ? "cursor-pointer"
                        : "cursor-not-allowed opacity-30"
                    }
                  `}
                >

                  <span
                    className={`
                      block text-[11px] font-semibold uppercase tracking-[0.1em]
                      ${
                        isSelected
                          ? "text-black"
                          : "text-white/70 transition-colors group-hover:text-white"
                      }
                    `}
                  >
                    {option.name}
                  </span>

                  <span
                    className={`
                      mt-2 block text-[10px] uppercase tracking-[0.1em]
                      ${
                        isSelected
                          ? "text-black/45"
                          : "text-white/25"
                      }
                    `}
                  >
                    {isAvailable
                      ? "Available"
                      : "Coming soon"}
                  </span>

                  {isSelected && (
                    <span className="absolute right-3.5 top-3.5 h-2 w-2 rounded-full bg-black" />
                  )}

                </button>
              );
            })}

          </div>

        </div>
      )}

      {/* QUANTITY + TOTAL */}
      <div className="mt-9 flex items-end justify-between border-t border-white/[0.09] pt-7">

        <div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
            Quantity
          </p>

          <div className="mt-3 flex w-fit items-center overflow-hidden rounded-xl border border-white/[0.11]">

            <button
              type="button"
              onClick={decrease}
              className="flex h-11 w-11 items-center justify-center text-white/40 transition hover:bg-white/[0.06] hover:text-white"
              aria-label="Decrease quantity"
            >
              <Minus size={14} strokeWidth={1.5} />
            </button>

            <span className="flex h-11 w-11 items-center justify-center border-x border-white/[0.08] text-sm font-medium text-white">
              {quantity}
            </span>

            <button
              type="button"
              onClick={increase}
              className="flex h-11 w-11 items-center justify-center text-white/40 transition hover:bg-white/[0.06] hover:text-white"
              aria-label="Increase quantity"
            >
              <Plus size={14} strokeWidth={1.5} />
            </button>

          </div>

        </div>

        <div className="pb-1 text-right">

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
            Total
          </p>

          <p className="mt-1.5 text-xl font-semibold tracking-[-0.03em] text-white">
            €{(price * quantity).toFixed(2)}
          </p>

        </div>

      </div>

      {/* BUY BUTTON */}
      <Link
        href={checkoutUrl}
        className="
          mt-6
          flex
          min-h-[58px]
          w-full
          items-center
          justify-center
          rounded-full
          bg-white
          px-6
          text-[13px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-black
          transition-all
          hover:scale-[1.01]
          hover:bg-white/90
          active:scale-[0.99]
        "
      >
        Buy now
      </Link>

      {/* CHECKOUT NOTE */}
      <div className="mt-4 flex items-center justify-center gap-2.5">

        <Lock
          size={12}
          strokeWidth={1.5}
          className="text-white/25"
        />

        <span className="text-[10px] uppercase tracking-[0.16em] text-white/25">
          Secure checkout · Stripe
        </span>

      </div>

    </div>
  );
}