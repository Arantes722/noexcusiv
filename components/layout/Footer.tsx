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
          max-w-7xl
          flex
          flex-col
          gap-10
          md:flex-row
          md:justify-between
        "
      >


        {/* BRAND */}

        <div>

          <h2
            className="
              text-2xl
              font-bold
              tracking-widest
            "
          >
            NOEXCUSIV
          </h2>


          <p
            className="
              mt-4
              max-w-xs
              text-sm
              text-white/50
            "
          >
            Discipline over excuses.
            Built for those who keep moving forward.
          </p>

        </div>



        {/* LINKS */}

        <div
          className="
            flex
            gap-12
          "
        >

          <div>

            <h3
              className="
                text-sm
                uppercase
                tracking-widest
                text-white/40
              "
            >
              Shop
            </h3>


            <div
              className="
                mt-4
                flex
                flex-col
                gap-3
              "
            >

              <Link href="/shop">
                Shop
              </Link>

              <Link href="/shop/no-excuses-hat">
                First Drop
              </Link>

            </div>

          </div>



          <div>

            <h3
              className="
                text-sm
                uppercase
                tracking-widest
                text-white/40
              "
            >
              Social
            </h3>


            <div
              className="
                mt-4
                flex
                flex-col
                gap-3
              "
            >

              <a
                href="#"
                target="_blank"
              >
                TikTok
              </a>


              <a
                href="#"
                target="_blank"
              >
                Instagram
              </a>

            </div>

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
          text-sm
          text-white/40
        "
      >

        © 2026 NOEXCUSIV. All rights reserved.

      </div>


    </footer>
  );
}