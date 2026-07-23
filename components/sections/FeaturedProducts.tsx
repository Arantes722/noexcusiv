import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";


const products = [
  {
    name: "NO EXCUSES Hat",
    price: "34.99€",
    image: "/images/hat.png",
    slug: "first-drop-cap",
  },

  {
    name: "NO EXCUSES Tee",
    price: "39.99€",
    image: "/images/shirt.png",
    slug: "first-drop-tee",
  },

  {
    name: "NO EXCUSES Poster",
    price: "24.99€",
    image: "/images/poster.png",
    slug: "first-drop-poster",
  },
];



export function FeaturedProducts() {
  return (
    <Section id="products">

      <Container>

        <SectionHeading
          eyebrow="FIRST DROP"
          title="Premium Essentials"
          description="Limited pieces created for those who refuse excuses."
        />


        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-3
          "
        >

          {products.map((product) => (

            <div
              key={product.name}
              className="
                rounded-3xl
                border
                border-white/10
                bg-zinc-950
                p-8
                transition
                hover:-translate-y-2
                hover:border-white/20
              "
            >

              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="
                  rounded-2xl
                "
              />



              <h3
                className="
                  mt-6
                  text-xl
                  font-bold
                "
              >
                {product.name}
              </h3>



              <p
                className="
                  mt-2
                  text-zinc-400
                "
              >
                {product.price}
              </p>



              <Link
                href={`/shop/${product.slug}`}
                className="
                  mt-8
                  block
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-center
                  font-bold
                  text-black
                  transition
                  hover:scale-105
                "
              >
                View Product
              </Link>


            </div>

          ))}

        </div>


      </Container>

    </Section>
  );
}