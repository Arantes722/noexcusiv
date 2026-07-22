import Link from "next/link";
import Image from "next/image";

import { products } from "@/data/products";
import { BrandSection } from "@/components/home/BrandSection";

export default function Home() {
  const product = products[0];

  return (
    <main>
      {/* HERO */}

      <section
        className="
          min-h-screen
          flex
          items-center
          justify-center
          px-6
          pt-24
          text-center
        "
      >
        <div className="max-w-5xl">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.5em]
              text-white/50
            "
          >
            NOEXCUSIV
          </p>

          <h1
            className="
              mt-6
              text-7xl
              md:text-9xl
              font-bold
              tracking-tight
            "
          >
            NO
            <br />
            EXCUSES.
          </h1>

          <p
            className="
              mx-auto
              mt-8
              max-w-xl
              text-lg
              text-white/60
            "
          >
            A movement built for people who choose discipline, consistency and
            results.
          </p>

          <Link
            href="/shop/first-drop-cap"
            className="
              mt-10
              inline-flex
              rounded-full
              bg-white
              px-10
              py-4
              text-black
              font-bold
              hover:scale-105
              transition
            "
          >
            Shop First Drop
          </Link>
        </div>
      </section>


      {/* PRODUCT */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-6
          py-24
        "
      >
        <div
          className="
            grid
            gap-12
            md:grid-cols-2
            items-center
          "
        >

          <div
            className="
              rounded-3xl
              bg-white/5
              p-8
            "
          >

            <Image
              src={product.image}
              alt={product.name}
              width={700}
              height={700}
              priority
              className="
                w-full
                rounded-2xl
              "
            />

          </div>


          <div>

            <p
              className="
                text-sm
                uppercase
                tracking-widest
                text-white/50
              "
            >
              {product.collection}
            </p>


            <h2
              className="
                mt-4
                text-5xl
                font-bold
              "
            >
              {product.name}
            </h2>


            <p
              className="
                mt-6
                text-lg
                text-white/60
              "
            >
              {product.description}
            </p>


            <div
              className="
                mt-8
                text-3xl
                font-bold
              "
            >
              €{product.price}
            </div>


            <Link
              href="/shop/first-drop-cap"
              className="
                mt-8
                inline-flex
                rounded-full
                bg-white
                px-10
                py-4
                text-black
                font-bold
              "
            >
              Buy Now
            </Link>


          </div>

        </div>

      </section>


      <BrandSection />

    </main>
  );
}