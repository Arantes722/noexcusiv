"use client";

import { useState } from "react";

type Props = {
  slug: string;
  quantity?: number;
  selectedKey?: string;
};

export function CheckoutButton({
  slug,
  quantity = 1,
  selectedKey,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
          quantity,
          key: selectedKey,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(
          data.error || "Unable to start checkout."
        );
      }

      window.location.href = data.url;
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );

      setLoading(false);
    }
  }

  return (
    <div className="mt-10">
      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className="
          w-full
          rounded-full
          bg-white
          px-10
          py-4
          font-bold
          text-black
          transition
          hover:scale-[1.02]
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {loading ? "Processing..." : "Continue to Payment"}
      </button>

      {error && (
        <p className="mt-4 text-center text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}