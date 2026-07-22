export function ProductDetails() {
  return (
    <section
      className="
        mt-24
        border-t
        border-white/10
        pt-24
      "
    >

      <div
        className="
          grid
          gap-12
          md:grid-cols-3
        "
      >


        <div>

          <p
            className="
              text-sm
              uppercase
              tracking-[0.4em]
              text-white/50
            "
          >
            First Drop
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
            "
          >
            Built Without Excuses.
          </h2>

          <p
            className="
              mt-4
              text-white/60
            "
          >
            The first NOEXCUSIV piece represents discipline,
            consistency and the decision to keep moving forward.
          </p>

        </div>



        <div>

          <h3
            className="
              text-xl
              font-bold
            "
          >
            Product Details
          </h3>


          <ul
            className="
              mt-6
              space-y-3
              text-white/60
            "
          >

            <li>✓ Premium dad hat</li>

            <li>✓ Adjustable strap</li>

            <li>✓ Embroidered NOEXCUSIV logo</li>

            <li>✓ Designed in Europe</li>

          </ul>

        </div>



        <div>

          <h3
            className="
              text-xl
              font-bold
            "
          >
            Shipping
          </h3>


          <ul
            className="
              mt-6
              space-y-3
              text-white/60
            "
          >

            <li>✓ Worldwide delivery</li>

            <li>✓ Production after order</li>

            <li>✓ Tracking included</li>

            <li>✓ Made for the long run</li>

          </ul>


        </div>


      </div>


    </section>
  );
}