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
            Information We Collect
          </h2>

          <p className="mt-3">
            When you place an order, we collect information
            necessary to process your purchase, including your
            name, email address, shipping address, and payment
            information.
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

          <p className="mt-3">
            We use your information to process orders, provide
            customer support, improve our services, and deliver
            your products.
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
            Payment Information
          </h2>

          <p className="mt-3">
            Payments are securely processed by Stripe. We do not
            store or have access to your full payment card details.
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
            We take reasonable measures to protect your personal
            information and maintain the security of our website.
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
            If you have any questions about this Privacy Policy,
            contact us:
          </p>

          <p className="mt-2 text-white">
            noexcusivclub@gmail.com
          </p>

        </section>



      </div>


    </main>
  );
}