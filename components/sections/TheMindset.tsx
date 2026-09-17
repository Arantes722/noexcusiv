import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function TheMindset() {
  return (
    <Section id="about" className="bg-zinc-950">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            THE MINDSET
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Average was
            <br />
            never the goal.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            NOEXCUSIV represents the pursuit of an exceptional life.
            Ambition, discipline, freedom and self-belief — without excuses.
            Built for those who refuse to settle for average.
          </p>
        </div>
      </Container>
    </Section>
  );
}