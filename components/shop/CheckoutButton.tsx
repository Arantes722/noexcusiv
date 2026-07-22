"use client";

import { useState } from "react";

type Props = {
  slug: string;
};

export function CheckoutButton({ slug }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="
        mt-10
        w-full
        rounded-full
        bg-white
        px-10
        py-4
        font-bold
        text-black
        transition
        hover:scale-105
        disabled:opacity-50
      "
    >
      {loading ? "Processing..." : "Continue to Payment"}
    </button>
  );
}
