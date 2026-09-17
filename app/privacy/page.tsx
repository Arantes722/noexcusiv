export default function PrivacyPage() {
  const sections = [
    {
      number: "01",
      title: "Information We Collect",
      content: (
        <p>
          When you place an order, we collect the information required to
          process and fulfill your purchase, including your name, email
          address, shipping address and any information necessary to complete
          your order.
        </p>
      ),
    },
    {
      number: "02",
      title: "How We Use Your Information",
      content: (
        <>
          <p>Your information is used solely to:</p>

          <ul className="mt-5 space-y-3">
            <li className="flex gap-4">
              <span className="text-white/20">01</span>
              <span>Process and fulfill your order.</span>
            </li>

            <li className="flex gap-4">
              <span className="text-white/20">02</span>
              <span>Provide customer support.</span>
            </li>

            <li className="flex gap-4">
              <span className="text-white/20">03</span>
              <span>Communicate with you regarding your purchase.</span>
            </li>

            <li className="flex gap-4">
              <span className="text-white/20">04</span>
              <span>Comply with legal obligations when required.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      number: "03",
      title: "Payment Information",
      content: (
        <p>
          Payments are securely processed through Stripe. NOEXCUSIV does not
          store or have access to your complete payment card details.
        </p>
      ),
    },
    {
      number: "04",
      title: "Order Fulfillment",
      content: (
        <p>
          The information required to prepare and deliver your order may be
          shared with the service providers involved in fulfilling and
          delivering your purchase. This information is used solely for the
          purpose of completing your order.
        </p>
      ),
    },
    {
      number: "05",
      title: "Data Protection",
      content: (
        <p>
          We take reasonable technical and organizational measures to protect
          your personal information. We do not sell, rent or trade your
          personal data to third parties.
        </p>
      ),
    },
    {
      number: "06",
      title: "Cookies",
      content: (
        <p>
          Our website may use essential cookies and similar technologies to
          ensure the website functions correctly and to improve your browsing
          experience.
        </p>
      ),
    },
    {
      number: "07",
      title: "Changes to This Policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be published on this page with the updated revision date.
        </p>
      ),
    },
    {
      number: "08",
      title: "Contact",
      content: (
        <>
          <p>
            If you have any questions regarding this Privacy Policy or your
            personal information, please contact us at:
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
                PRIVACY
                <br />
                POLICY.
              </h1>
            </div>

            <div className="md:col-span-4 md:pb-2">
              <p className="max-w-sm text-[15px] leading-7 text-white/35">
                How NOEXCUSIV collects, uses and protects the information
                required to operate the store.
              </p>

              <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/20">
                Last updated / July 2026
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
                Privacy
                <br />
                &amp; data
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