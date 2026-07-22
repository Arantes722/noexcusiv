import Link from "next/link";
import Image from "next/image";

import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        transition
        hover:-translate-y-2
      "
    >
      <Link href={`/shop/${product.slug}`}>
        <div
          className="
            relative
            aspect-square
            overflow-hidden
          "
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="
              object-cover
              transition
              duration-500
              group-hover:scale-105
            "
          />

          {product.collection && (
            <span
              className="
                absolute
                left-4
                top-4
                rounded-full
                bg-white
                px-4
                py-2
                text-xs
                font-bold
                text-black
              "
            >
              {product.collection}
            </span>
          )}
        </div>

        <div className="p-6">
          <h2
            className="
              text-xl
              font-bold
            "
          >
            {product.name}
          </h2>

          <div
            className="
              mt-3
              flex
              justify-between
              items-center
            "
          >
            <span className="text-white/70">
              €{product.price}
            </span>

            <span
              className="
                text-sm
                uppercase
                tracking-widest
                text-white/50
              "
            >
              View
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}