import type { ReactNode } from "react";

type InformationSection = {
  number: string;
  title: string;
  content: ReactNode;
};

type Props = {
  title: string;
  description: string;
  sideLabel: ReactNode;
  sections: InformationSection[];
  updated?: string;
};

export function InformationPageLayout({
  title,
  description,
  sideLabel,
  sections,
  updated,
}: Props) {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/[0.08] px-5 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-white/25">
            NOEXCUSIV / INFORMATION
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
            <h1 className="max-w-4xl whitespace-pre-line text-[clamp(3.75rem,10vw,8rem)] font-black leading-[0.85] tracking-[-0.075em] md:col-span-8">
              {title}
            </h1>
            <div className="md:col-span-4 md:pb-2">
              <p className="max-w-sm text-[15px] leading-7 text-white/35">
                {description}
              </p>
              {updated ? (
                <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/20">
                  {updated}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-3">
              <p className="sticky top-28 text-[10px] font-medium uppercase tracking-[0.4em] text-white/20">
                {sideLabel}
              </p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <div className="border-t border-white/[0.08]">
                {sections.map((section) => (
                  <section
                    key={section.number}
                    className="border-b border-white/[0.08] py-10 md:py-14"
                  >
                    <div className="grid gap-8 md:grid-cols-[80px_1fr] md:gap-10">
                      <span className="text-[10px] font-medium tracking-[0.25em] text-white/20">
                        {section.number}
                      </span>
                      <div>
                        <h2 className="text-2xl font-bold tracking-[-0.03em] md:text-3xl">
                          {section.title}
                        </h2>
                        <div className="mt-6 text-[15px] leading-8 text-white/45 md:text-[16px]">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
