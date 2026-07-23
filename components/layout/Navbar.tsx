import Link from "next/link";


export function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-black/70
        backdrop-blur
      "
    >

      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          gap-4
          px-6
          py-5
        "
      >


        {/* LOGO */}

        <Link
          href="/"
          className="
            shrink-0
            text-lg
            font-bold
            tracking-[0.25em]
            sm:text-xl
          "
        >
          NOEXCUSIV.
        </Link>



        {/* LINKS */}

        <div
          className="
            flex
            items-center
            gap-4
            text-xs
            uppercase
            tracking-widest
            sm:gap-8
            sm:text-sm
          "
        >

          <Link
            href="/"
            className="
              transition
              hover:opacity-70
            "
          >
            Home
          </Link>


          <Link
            href="/shop"
            className="
              transition
              hover:opacity-70
            "
          >
            Shop
          </Link>


        </div>


      </nav>

    </header>
  );
}