import { products } from "@/constants/products";
import { ProductCard } from "@/components/shop/ProductCard";


export default function ShopPage() {
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

      <div className="text-center">

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
            text-6xl
            font-bold
          "
        >
          SHOP
        </h1>

      </div>


      <section
        className="
          mt-16
          grid
          gap-8
          md:grid-cols-3
        "
      >

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </section>


    </main>
  );
}