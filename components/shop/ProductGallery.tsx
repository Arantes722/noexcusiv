"use client";

import Image from "next/image";
import { useState } from "react";


type Props = {
  images: string[];
  name: string;
};


export function ProductGallery({
  images,
  name,
}: Props) {

  const [activeImage, setActiveImage] = useState(images[0]);


  return (
    <div>


      {/* IMAGEM PRINCIPAL */}

      <div
        className="
          overflow-hidden
          rounded-3xl
          bg-white/5
        "
      >

        <Image
          src={activeImage}
          alt={name}
          width={900}
          height={900}
          priority
          className="
            w-full
            object-cover
          "
        />

      </div>



      {/* MINIATURAS */}

      <div
        className="
          mt-6
          grid
          grid-cols-3
          gap-4
        "
      >

        {images.map((image) => (

          <button
            key={image}
            onClick={() => setActiveImage(image)}
            className={`
              overflow-hidden
              rounded-xl
              bg-white/5
              border
              transition

              ${
                activeImage === image
                  ? "border-white"
                  : "border-white/10"
              }
            `}
          >

            <Image
              src={image}
              alt={name}
              width={300}
              height={300}
              className="
                aspect-square
                object-cover
              "
            />

          </button>

        ))}

      </div>


    </div>
  );
}