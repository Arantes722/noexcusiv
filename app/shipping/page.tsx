export default function ShippingPage() {
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
        Shipping Policy
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
            Shipping
          </h2>

          <p className="mt-3">
            We currently ship to countries within Europe only.
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
            Shipping Costs
          </h2>

          <p className="mt-3">
            We offer <strong className="text-white">Free Shipping</strong> on
            all orders.
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
            Processing Time
          </h2>

          <p className="mt-3">
            Every product is made to order. Orders are usually processed within
            <strong className="text-white"> 2–5 business days</strong>.
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
            Estimated Delivery
          </h2>

          <p className="mt-3">
            Delivery usually takes
            <strong className="text-white"> 5–15 business days</strong>,
            depending on your country and the shipping carrier.
          </p>

          <p className="mt-4">
            Delivery times are estimates and may vary during busy periods,
            customs procedures or other circumstances outside our control.
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
            Order Tracking
          </h2>

          <p className="mt-3">
            Once your order has been shipped, you'll receive a confirmation
            email with a tracking number.
          </p>
        </section>
      </div>
    </main>
  );
}
