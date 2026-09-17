"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  name: string;
  collection?: string;
};

export function ProductGallery({
  images,
  name,
  collection = "NOEXCUSIV / 001",
}: Props) {
  const [activeImage, setActiveImage] = useState(0);

  if (!images.length) {
    return (
      <div className="flex aspect-[4/5] w-full items-center justify-center bg-white/[0.025]">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/25">
          No image available
        </p>
      </div>
    );
  }

  const currentImage =
    images[activeImage] ?? images[0];

  return (
    <div className="w-full">

      {/* MAIN IMAGE */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#080808]">

        <Image
          src={currentImage}
          alt={name}
          fill
          priority
          sizes="
            (max-width: 1024px) 100vw,
            55vw
          "
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
          "
        />

        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />

        {/* COLLECTION */}
        <div className="absolute bottom-5 left-5">

          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
            {collection}
          </span>

        </div>

        {/* IMAGE COUNTER */}
        {images.length > 1 && (
          <div className="absolute bottom-5 right-5">

            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>

          </div>
        )}

      </div>

      {/* THUMBNAILS */}
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2.5">

          {images.map((image, index) => {
            const isActive =
              activeImage === index;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1}`}
                className={`
                  relative
                  aspect-square
                  overflow-hidden
                  bg-white/[0.025]
                  transition-all
                  ${
                    isActive
                      ? "ring-1 ring-white/60"
                      : "opacity-45 ring-1 ring-white/[0.06] hover:opacity-80"
                  }
                `}
              >

                <Image
                  src={image}
                  alt={`${name} image ${index + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />

              </button>
            );
          })}

        </div>
      )}

    </div>
  );
}