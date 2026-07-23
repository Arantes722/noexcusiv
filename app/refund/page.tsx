export default function RefundPage() {
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
        Refund Policy
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
            Returns
          </h2>

          <p className="mt-3">
            Every NOEXCUSIV product is made to order. Because of this, we do not
            accept returns or exchanges for incorrect size selection, change of
            mind or buyer's remorse.
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
            Damaged or Incorrect Items
          </h2>

          <p className="mt-3">
            If your order arrives damaged, defective or you receive the wrong
            product, please contact us within
            <strong className="text-white"> 14 days</strong> of receiving your
            order.
          </p>

          <p className="mt-4">
            Include your order number together with clear photos showing the
            issue so we can investigate and resolve it as quickly as possible.
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
            Refunds
          </h2>

          <p className="mt-3">
            If your claim is approved, we'll issue either a replacement product
            or a full refund to your original payment method.
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
            For any questions regarding your order, contact us at:
          </p>

          <a
            href="mailto:noexcusivclub@gmail.com"
            className="
              mt-3
              inline-block
              font-medium
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
