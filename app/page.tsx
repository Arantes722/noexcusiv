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

        <div
          className="
            max-w-5xl
          "
        >

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
              font-bold
              tracking-tight
              md:text-9xl
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
            Built for people who refuse excuses,
            chase progress and demand more from themselves.
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
              font-bold
              text-black
              transition
              hover:scale-105
            "
          >
            Shop First Drop
          </Link>


        </div>

      </section>





      {/* FEATURED PRODUCT */}


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
            items-center
            gap-12
            md:grid-cols-2
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





            <p
              className="
                mt-4
                text-sm
                uppercase
                tracking-widest
                text-white/40
              "
            >
              First Drop • Limited Availability
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
              href={`/shop/${product.slug}`}
              className="
                mt-8
                inline-flex
                rounded-full
                bg-white
                px-10
                py-4
                font-bold
                text-black
                transition
                hover:scale-105
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