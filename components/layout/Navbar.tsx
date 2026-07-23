import Link from "next/link";

export function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        z-50
        w-full
      "
    >
      {/* TOP BAR */}

      <div
        className="
          border-b
          border-white/10
          bg-zinc-950
          py-2
          text-center
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.35em]
          text-white/80
          sm:text-xs
        "
      >
        FREE SHIPPING
      </div>

      {/* NAVBAR */}

      <nav
        className="
          border-b
          border-white/10
          bg-black/70
          backdrop-blur
        "
      >
        <div
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
              transition
              hover:opacity-80
              sm:text-xl
            "
          >
            NOEXCUSIV
          </Link>

          {/* LINKS */}

          <div
            className="
              flex
              items-center
              gap-5
              text-xs
              uppercase
              tracking-[0.2em]
              sm:gap-8
              sm:text-sm
            "
          >
            <Link
              href="/"
              className="
                transition
                hover:text-white/70
              "
            >
              Home
            </Link>

            <Link
              href="/shop"
              className="
                transition
                hover:text-white/70
              "
            >
              Shop
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
