import { Package, Truck, Shirt } from "lucide-react";

const items = [
  {
    icon: Package,
    title: "Product",
    points: [
      "Classic Dad Hat by Yupoong",
      "Premium embroidered design",
      "Curved visor",
      "Adjustable strap",
      "One size fits most",
    ],
  },
  {
    icon: Truck,
    title: "Shipping",
    points: [
      "Free Shipping",
      "Europe only",
      "Made to order",
      "Estimated delivery: 5–15 business days",
      "Tracking included",
    ],
  },
  {
    icon: Shirt,
    title: "Care",
    points: [
      "Spot clean only",
      "Air dry naturally",
      "Do not machine wash",
      "Avoid bleach",
      "Handle embroidery with care",
    ],
  },
];

export function ProductInformation() {
  return (
    <section
      className="
        mt-20
        grid
        gap-6
        lg:grid-cols-3
      "
    >
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              transition
              hover:border-white/20
              hover:bg-white/[0.08]
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-white
                text-black
              "
            >
              <Icon size={28} />
            </div>

            <h3
              className="
                mt-6
                text-2xl
                font-bold
              "
            >
              {item.title}
            </h3>

            <ul
              className="
                mt-5
                space-y-3
                text-white/60
              "
            >
              {item.points.map((point) => (
                <li key={point} className="leading-7">
                  • {point}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
