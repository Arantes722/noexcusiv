import { products } from "@/constants/products";

import { ProductGallery } from "@/components/shop/ProductGallery";
import { ProductPurchase } from "@/components/shop/ProductPurchase";
import { ProductInformation } from "@/components/shop/ProductInformation";
import { ProductDetails } from "@/components/shop/ProductDetails";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="pt-32 text-center">
        <h1 className="text-4xl font-bold">Product not found</h1>
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
        {/* GALLERY */}

        <ProductGallery images={product.gallery} name={product.name} />

        {/* PRODUCT INFO */}

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
            €{product.price.toFixed(2)}
          </div>

          <ProductPurchase slug={product.slug} price={product.price} />
        </div>
      </div>

      {/* PRODUCT INFORMATION */}

      <ProductInformation />

      {/* WHY NOEXCUSIV */}

      <ProductDetails />
    </main>
  );
}
