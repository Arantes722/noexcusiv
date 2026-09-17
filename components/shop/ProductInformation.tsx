import { Package, Sparkles, Truck } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "The piece",
    points: [
      "Designed with intention",
      "Created to have presence",
      "Built to belong in your space",
    ],
  },
  {
    icon: Package,
    title: "The experience",
    points: [
      "Premium presentation",
      "Thoughtful details",
      "Designed to feel like more than a product",
    ],
  },
  {
    icon: Truck,
    title: "Shipping",
    points: [
      "Shipping details available with each release",
      "Carefully prepared for delivery",
      "Tracking details provided when available",
    ],
  },
];

export function ProductInformation() {
  return (
    <section className="mt-20 grid gap-6 lg:grid-cols-3">
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
              <Icon size={26} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {item.title}
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/60">
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