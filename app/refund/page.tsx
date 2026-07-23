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
          space-y-6
          text-lg
          text-white/60
        "
      >

        <p>
          At NOEXCUSIV, we want every customer to be
          satisfied with their purchase.
        </p>



        <p>
          If you are not completely satisfied with your
          order, you may request a return within 14 days
          after receiving your product.
        </p>



        <p>
          To be eligible for a return, items must be:
        </p>



        <ul
          className="
            list-disc
            space-y-2
            pl-6
          "
        >

          <li>
            Unused and in original condition
          </li>

          <li>
            With original packaging
          </li>

          <li>
            Without signs of wear or damage
          </li>

        </ul>



        <p>
          Customers are responsible for return shipping
          costs unless the product arrives damaged or
          incorrect.
        </p>



        <p>
          Once we receive and inspect your return, we
          will process your refund.
        </p>



        <p>
          For any questions, contact us at:
          {" "}
          <a
            href="mailto:noexcusivclub@gmail.com"
            className="text-white underline"
          >
            noexcusivclub@gmail.com
          </a>
        </p>



      </div>


    </main>
  );
}