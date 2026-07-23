export default function TermsPage() {
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
        Terms & Conditions
      </h1>

      <div
        className="
          mt-10
          space-y-8
          text-white/70
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
            General
          </h2>

          <p className="mt-3">
            By accessing this website and placing an order, you agree to these
            Terms & Conditions.
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
            Products
          </h2>

          <p className="mt-3">
            Every NOEXCUSIV product is made to order. Product images are for
            illustration purposes and slight differences in colour or placement
            may occur due to the production process.
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
            Pricing & Payments
          </h2>

          <p className="mt-3">
            All prices are displayed in Euros (€). Payments are processed
            securely through Stripe.
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
            Shipping
          </h2>

          <p className="mt-3">
            Orders are produced after purchase and shipped according to our
            Shipping Policy. Delivery estimates are not guaranteed.
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
            Returns & Refunds
          </h2>

          <p className="mt-3">
            Returns and refunds are handled according to our Refund Policy.
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
            Intellectual Property
          </h2>

          <p className="mt-3">
            All NOEXCUSIV branding, designs, images and website content remain
            the intellectual property of NOEXCUSIV and may not be copied,
            reproduced or distributed without prior written permission.
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
            Questions regarding these Terms & Conditions can be sent to:
          </p>

          <a
            href="mailto:noexcusivclub@gmail.com"
            className="
              mt-3
              inline-block
              text-white
              underline
            "
          >
            noexcusivclub@gmail.com
          </a>
        </section>
      </div>
    </main>
  );
}
