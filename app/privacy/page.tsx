export default function PrivacyPage() {
  return (
    <main
      className="
        mx-auto
        max-w-4xl
        px-6
        pb-24
        pt-32
      "
    >
      <h1
        className="
          text-5xl
          font-bold
        "
      >
        Privacy Policy
      </h1>

      <p
        className="
          mt-4
          text-white/50
        "
      >
        Last updated: July 2026
      </p>

      <div
        className="
          mt-10
          space-y-10
          text-white/70
          leading-8
        "
      >
        <section>
          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            Information We Collect
          </h2>

          <p className="mt-3">
            When you place an order, we collect the information required to
            process and fulfill your purchase, including your name, email
            address, shipping address and any information necessary to complete
            your order.
          </p>
        </section>

        <section>
          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            How We Use Your Information
          </h2>

          <p className="mt-3">Your information is used solely to:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Process and fulfill your order.</li>
            <li>Provide customer support.</li>
            <li>Communicate with you regarding your purchase.</li>
            <li>Comply with legal obligations when required.</li>
          </ul>
        </section>

        <section>
          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            Payment Information
          </h2>

          <p className="mt-3">
            All payments are securely processed through Stripe. We never store,
            receive or have access to your complete payment card details.
          </p>
        </section>

        <section>
          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            Order Fulfillment
          </h2>

          <p className="mt-3">
            Orders are produced and shipped through our fulfillment partner,
            Printful. To manufacture and deliver your order, the required
            shipping information may be shared with Printful solely for order
            fulfillment purposes.
          </p>
        </section>

        <section>
          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            Data Protection
          </h2>

          <p className="mt-3">
            We take reasonable technical and organizational measures to protect
            your personal information. We do not sell, rent or trade your
            personal data to third parties.
          </p>
        </section>

        <section>
          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            Cookies
          </h2>

          <p className="mt-3">
            Our website may use essential cookies and similar technologies to
            ensure the website functions correctly and to improve your browsing
            experience.
          </p>
        </section>

        <section>
          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            Changes to This Policy
          </h2>

          <p className="mt-3">
            We may update this Privacy Policy from time to time. Any changes
            will be published on this page with the updated revision date.
          </p>
        </section>

        <section>
          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            Contact
          </h2>

          <p className="mt-3">
            If you have any questions regarding this Privacy Policy or your
            personal information, please contact us at:
          </p>

          <p
            className="
              mt-3
              font-semibold
              text-white
            "
          >
            noexcusivclub@gmail.com
          </p>
        </section>
      </div>
    </main>
  );
}
