import Link from "next/link";


export function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        px-6
        py-12
      "
    >

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-10
          md:grid-cols-3
        "
      >


        {/* BRAND */}

        <div>

          <h2
            className="
              text-xl
              font-bold
            "
          >
            NOEXCUSIV
          </h2>


          <p
            className="
              mt-4
              text-sm
              text-white/50
            "
          >
            Premium mindset clothing.
            Built for those who refuse excuses.
          </p>


        </div>





        {/* STORE */}

        <div>

          <h3
            className="
              font-bold
            "
          >
            Store
          </h3>


          <div
            className="
              mt-4
              flex
              flex-col
              gap-3
              text-sm
              text-white/50
            "
          >

            <Link
              href="/shop"
              className="hover:text-white"
            >
              Shop
            </Link>


            <Link
              href="/about"
              className="hover:text-white"
            >
              About
            </Link>


            <Link
              href="/shipping"
              className="hover:text-white"
            >
              Shipping Policy
            </Link>


            <Link
              href="/refund"
              className="hover:text-white"
            >
              Refund Policy
            </Link>


          </div>

        </div>





        {/* LEGAL */}

        <div>

          <h3
            className="
              font-bold
            "
          >
            Legal
          </h3>


          <div
            className="
              mt-4
              flex
              flex-col
              gap-3
              text-sm
              text-white/50
            "
          >

            <Link
              href="/privacy"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>


            <Link
              href="/terms"
              className="hover:text-white"
            >
              Terms & Conditions
            </Link>


            <a
              href="mailto:noexcusivclub@gmail.com"
              className="hover:text-white"
            >
              Contact
            </a>


          </div>

        </div>


      </div>




      <div
        className="
          mx-auto
          mt-12
          max-w-7xl
          border-t
          border-white/10
          pt-6
          text-center
          text-sm
          text-white/40
        "
      >
        © {new Date().getFullYear()} NOEXCUSIV.
        All rights reserved.
      </div>


    </footer>
  );
}