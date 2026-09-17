"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  name: string;
};

export function ProductGallery({ images, name }: Props) {
  const [activeImage, setActiveImage] = useState(images[0] ?? "");

  if (!images.length) {
    return (
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">
          Images coming soon
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* MAIN IMAGE */}

      <div className="overflow-hidden rounded-3xl bg-white/5">
        <Image
          src={activeImage}
          alt={name}
          width={900}
          height={900}
          priority
          className="w-full object-cover"
        />
      </div>

      {/* THUMBNAILS */}

      {images.length > 1 && (
        <div className="mt-6 grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(image)}
              aria-label={`View ${name} image ${index + 1}`}
              aria-pressed={activeImage === image}
              className={`
                overflow-hidden
                rounded-xl
                border
                bg-white/5
                transition
                hover:border-white/40
                ${
                  activeImage === image
                    ? "border-white"
                    : "border-white/10"
                }
              `}
            >
              <Image
                src={image}
                alt={`${name} view ${index + 1}`}
                width={300}
                height={300}
                className="aspect-square object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}