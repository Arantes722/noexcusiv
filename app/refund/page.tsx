export default function RefundPage() {
  const sections = [
    {
      number: "01",
      title: "Returns",
      content: (
        <p>
          Returns and exchanges are subject to the applicable consumer
          protection rules and the specific circumstances of each order.
          If you have changed your mind or no longer wish to keep your
          purchase, please contact us before sending anything back so we can
          confirm whether your order is eligible for a return.
        </p>
      ),
    },
    {
      number: "02",
      title: "Damaged or Incorrect Items",
      content: (
        <>
          <p>
            If your order arrives damaged, defective or you receive the wrong
            product, please contact us within{" "}
            <strong className="font-semibold text-white">14 days</strong> of
            receiving your order.
          </p>

          <p className="mt-5">
            Include your order number together with clear photos showing the
            issue so we can investigate and determine the appropriate
            resolution.
          </p>
        </>
      ),
    },
    {
      number: "03",
      title: "Refunds",
      content: (
        <p>
          If your claim is approved, we will confirm the applicable refund or
          replacement process with you. Approved refunds will be issued to the
          original payment method used for the purchase.
        </p>
      ),
    },
    {
      number: "04",
      title: "Contact",
      content: (
        <>
          <p>
            For questions regarding returns, refunds or your order, please
            contact us at:
          </p>

          <a
            href="mailto:noexcusivclub@gmail.com"
            className="mt-5 inline-block font-semibold text-white underline decoration-white/20 underline-offset-4 transition hover:decoration-white"
          >
            noexcusivclub@gmail.com
          </a>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <section className="border-b border-white/[0.08] px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-white/25">
            NOEXCUSIV / INFORMATION
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h1 className="text-6xl font-black leading-[0.85] tracking-[-0.075em] md:text-[8rem]">
                REFUND
                <br />
                POLICY.
              </h1>
            </div>

            <div className="md:col-span-4 md:pb-2">
              <p className="max-w-sm text-[15px] leading-7 text-white/35">
                Information about returns, damaged orders, replacements and
                refunds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            {/* SIDE LABEL */}
            <div className="md:col-span-3">
              <p className="sticky top-28 text-[10px] font-medium uppercase tracking-[0.4em] text-white/20">
                Returns
                <br />
                &amp; refunds
              </p>
            </div>

            {/* SECTIONS */}
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

      {/* FOOTER NOTE */}
      <section className="border-t border-white/[0.08] px-6 py-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 text-[10px] uppercase tracking-[0.3em] text-white/15">
          <span>NOEXCUSIV</span>
          <span>NO EXCUSES. NO AVERAGE LIFE.</span>
        </div>
      </section>
    </main>
  );
}