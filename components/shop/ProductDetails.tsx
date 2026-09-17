import { ShieldCheck, Sparkles, Eye, Layers } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Designed with intention",
    description:
      "Every NOEXCUSIV piece is created to have a clear identity and a reason to exist.",
  },
  {
    icon: Eye,
    title: "Made to be seen",
    description:
      "Distinctive pieces designed to add presence, character and identity to the spaces they belong to.",
  },
  {
    icon: Layers,
    title: "More than an object",
    description:
      "NOEXCUSIV pieces are designed to become part of the environment around you — not simply fill a space.",
  },
  {
    icon: ShieldCheck,
    title: "The NOEXCUSIV standard",
    description:
      "We care about the details, the presentation and the experience behind every release.",
  },
];

export function ProductDetails() {
  return (
    <section className="mt-24">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">
          THE NOEXCUSIV STANDARD
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em]">
          Designed to mean something.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
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

              <p className="mt-3 leading-7 text-white/60">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}