import Link from "next/link";

import { products } from "@/constants/products";

import { ProductGallery } from "@/components/shop/ProductGallery";
import { ProductDetails } from "@/components/shop/ProductDetails";
import { DropBanner } from "@/components/shop/DropBanner";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function ProductPage({ params }: Props) {

  const { slug } = await params;


  const product = products.find(
    (item) => item.slug === slug
  );


  if (!product) {
    return (
      <main className="pt-32 text-center">

        <h1 className="text-4xl font-bold">
          Product not found
        </h1>

      </main>
    );
  }


  return (
    <main
      className="
        mx-auto
        max-w-7xl
        px-6
        pb-24
        pt-32
      "
    >


      {/* PRODUCT HERO */}

      <div
        className="
          grid
          gap-12
          lg:grid-cols-2
        "
      >


        {/* GALERIA */}

        <ProductGallery
          images={product.gallery}
          name={product.name}
        />



        {/* INFO */}

        <div
          className="
            flex
            flex-col
            justify-center
          "
        >

          <p
            className="
              text-sm
              uppercase
              tracking-[0.4em]
              text-white/50
            "
          >
            {product.collection}
          </p>



          <h1
            className="
              mt-6
              text-5xl
              font-bold
            "
          >
            {product.name}
          </h1>



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
              text-4xl
              font-bold
            "
          >
            €{product.price}
          </div>



          <Link
            href={`/checkout/${product.slug}`}
            className="
              mt-10
              inline-flex
              justify-center
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



          {/* DROP BANNER */}

          <DropBanner />



          {/* FEATURES */}

          <div
            className="
              mt-10
              space-y-4
              border-t
              border-white/10
              pt-8
              text-sm
              text-white/50
            "
          >

            <p>
              ✓ Premium quality cap
            </p>


            <p>
              ✓ Designed by NOEXCUSIV
            </p>


            <p>
              ✓ Worldwide shipping
            </p>

          </div>


        </div>


      </div>



      {/* PRODUCT DETAILS */}

      <ProductDetails />


    </main>
  );
}