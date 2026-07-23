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
          space-y-6
          text-lg
          text-white/60
        "
      >

        <p>
          We currently ship orders worldwide.
        </p>


        <p>
          Orders are processed within 2-5 business days
          after payment confirmation.
        </p>


        <p>
          Estimated delivery time:
        </p>


        <ul className="space-y-2">

          <li>
            🇵🇹 Portugal: 3-7 business days
          </li>

          <li>
            🇪🇺 Europe: 5-12 business days
          </li>

          <li>
            🌎 International: 10-20 business days
          </li>

        </ul>


        <p>
          Delivery times may vary depending on the
          destination and shipping provider.
        </p>


      </div>


    </main>
  );
}