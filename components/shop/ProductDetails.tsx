import { ShieldCheck, Truck, RotateCcw, Sparkles } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description:
      "Built with premium materials for everyday wear and long-lasting comfort.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders within Europe.",
  },
  {
    icon: RotateCcw,
    title: "14-Day Returns",
    description:
      "Contact us within 14 days if your order arrives damaged or incorrect.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description:
      "Every payment is securely processed through Stripe using encrypted checkout.",
  },
];

export function ProductDetails() {
  return (
    <section
      className="
        mt-24
      "
    >
      <div className="text-center">
        <p
          className="
            text-sm
            uppercase
            tracking-[0.4em]
            text-white/40
          "
        >
          WHY NOEXCUSIV
        </p>

        <h2
          className="
            mt-4
            text-4xl
            font-bold
          "
        >
          Built Without Excuses.
        </h2>
      </div>

      <div
        className="
          mt-14
          grid
          gap-6
          md:grid-cols-2
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

              <p
                className="
                  mt-3
                  leading-7
                  text-white/60
                "
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
