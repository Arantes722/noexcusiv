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
          space-y-10
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
            We offer <strong>Free Shipping</strong> on all orders.
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
            Production
          </h2>

          <p className="mt-3">
            Every product is made to order before being shipped.
          </p>

          <p className="mt-3">
            This allows us to reduce waste while ensuring every item is produced
            specifically for your order.
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
            Orders are typically delivered within
            <strong> 5–15 business days</strong>, depending on your destination
            and the shipping carrier.
          </p>

          <p className="mt-3">
            Delivery times are estimates and may vary during busy periods,
            public holidays, customs procedures or other circumstances outside
            our control.
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
            email containing your tracking number so you can monitor your
            delivery.
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
            Questions
          </h2>

          <p className="mt-3">
            If you have any questions regarding shipping, feel free to contact
            us at:
          </p>

          <p className="mt-2 text-white">noexcusivclub@gmail.com</p>
        </section>
      </div>
    </main>
  );
}
