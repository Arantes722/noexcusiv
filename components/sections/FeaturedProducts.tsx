import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const products = [
  {
    name: "NO EXCUSES Hat",
    price: "34.99€",
    image: "/images/hat.png",
  },
  {
    name: "NO EXCUSES Tee",
    price: "39.99€",
    image: "/images/shirt.png",
  },
  {
    name: "NO EXCUSES Poster",
    price: "24.99€",
    image: "/images/poster.png",
  },
];

export function FeaturedProducts() {
  return (
    <Section id="products">
      <Container>
        <SectionHeading
          eyebrow="FIRST DROP"
          title="Premium Essentials"
          description="Minimal pieces. Maximum mindset."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-3xl border border-white/10 bg-zinc-950 p-8 transition hover:-translate-y-2 hover:border-white/20"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
              />

              <h3 className="mt-6 text-xl font-bold">
                {product.name}
              </h3>

              <p className="mt-2 text-zinc-400">
                {product.price}
              </p>

              <Button className="mt-8 w-full rounded-full">
                Buy Now
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}