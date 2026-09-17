export default function AboutPage() {
  const principles = [
    {
      number: "01",
      title: "Ambition",
      text: "Think beyond what is expected and keep building toward something bigger.",
    },
    {
      number: "02",
      title: "Discipline",
      text: "Keep moving when motivation disappears. The standard stays the same.",
    },
    {
      number: "03",
      title: "Independence",
      text: "Build a life that is defined by your own standards, not someone else's.",
    },
    {
      number: "04",
      title: "Persistence",
      text: "Some things take longer than expected. That is not a reason to stop.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="border-b border-white/[0.08] px-6 pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-white/25">
            NOEXCUSIV / ABOUT
          </p>

          <div className="mt-10 grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-9">
              <h1 className="text-6xl font-black leading-[0.84] tracking-[-0.075em] md:text-[8rem]">
                BUILT
                <br />
                WITHOUT
                <br />
                EXCUSES.
              </h1>
            </div>

            <div className="md:col-span-3 md:pb-2">
              <p className="text-[15px] leading-7 text-white/35">
                NOEXCUSIV is built around the pursuit of a life that feels
                worth building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-b border-white/[0.08] px-6 py-24 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-3">
              <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/20">
                01 / The idea
              </p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-6xl">
                Your environment should reflect the life you are building.
              </h2>

              <div className="mt-10 space-y-7 text-[16px] leading-8 text-white/45 md:text-[17px]">
                <p>
                  NOEXCUSIV was created around a simple belief: the life you
                  want does not appear by itself. It is built through the
                  decisions you make every day.
                </p>

                <p>
                  Ambition means knowing there is more you want from life.
                  Discipline means continuing to work toward it when the
                  excitement disappears.
                </p>

                <p>
                  NOEXCUSIV exists to turn that mindset into something
                  tangible — pieces and objects designed to live around the
                  people who are still building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-white/[0.08] px-6 py-24 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between gap-8 md:mb-24">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/20">
                02 / The mindset
              </p>

              <h2 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                What we
                <br />
                stand for.
              </h2>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-white/15 md:block">
              NOEXCUSIV
            </span>
          </div>

          <div className="border-t border-white/[0.08]">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="grid gap-6 border-b border-white/[0.08] py-10 md:grid-cols-12 md:items-center md:py-12"
              >
                <span className="text-[10px] font-medium tracking-[0.25em] text-white/20 md:col-span-1">
                  {principle.number}
                </span>

                <h3 className="text-2xl font-bold tracking-[-0.03em] md:col-span-4 md:text-3xl">
                  {principle.title}
                </h3>

                <p className="max-w-xl text-[15px] leading-7 text-white/40 md:col-span-6 md:col-start-7">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-6 py-28 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-white/20">
                03 / The standard
              </p>

              <h2 className="mt-8 text-6xl font-black leading-[0.82] tracking-[-0.07em] md:text-[8rem]">
                KEEP
                <br />
                GOING.
              </h2>
            </div>

            <div className="md:col-span-4 md:pb-3">
              <p className="border-l border-white/15 pl-6 text-[15px] leading-7 text-white/35">
                The goal is not perfection. The goal is to keep building a
                life you are proud to call your own.
              </p>
            </div>
          </div>

          <div className="mt-20 h-px bg-white/[0.08]" />

          <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/15">
            <span>NOEXCUSIV</span>
            <span>NO EXCUSES. NO AVERAGE LIFE.</span>
          </div>
        </div>
      </section>
    </main>
  );
}