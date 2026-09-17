import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function BrandSection() {
  return (
    <Section id="brand" className="bg-black">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p
            className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            THE NOEXCUSIV PHILOSOPHY
          </p>

          <h2
            className="
              text-4xl
              font-black
              leading-tight
              md:text-6xl
            "
          >
            Refuse the ordinary.
            <br />
            Build the exceptional.
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-zinc-400
            "
          >
            NOEXCUSIV is built around ambition, discipline, freedom and
            self-belief. Not to tell you how to live, but to represent the
            mindset of someone who decided that average was never enough.
          </p>

          <div
            className="
              mt-16
              grid
              gap-px
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/10
              md:grid-cols-3
            "
          >
            <div className="bg-black p-8 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">
                01
              </p>

              <h3 className="mt-6 text-xl font-bold">
                Ambition
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Want more. Expect more. Build for more.
              </p>
            </div>

            <div className="bg-black p-8 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">
                02
              </p>

              <h3 className="mt-6 text-xl font-bold">
                Discipline
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Keep going when motivation disappears.
              </p>
            </div>

            <div className="bg-black p-8 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30">
                03
              </p>

              <h3 className="mt-6 text-xl font-bold">
                Freedom
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Build a life you do not need permission to live.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}