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
          px-6
          py-5
        "
      >
        <Link
          href="/"
          className="
            text-xl
            font-bold
            tracking-[0.3em]
          "
        >
          NOEXCUSIV
        </Link>

        <div
          className="
            flex
            items-center
            gap-8
            text-sm
            uppercase
            tracking-widest
          "
        >
          <Link href="/" className="hover:opacity-70 transition">
            Home
          </Link>

          <Link href="/shop" className="hover:opacity-70 transition">
            Shop
          </Link>
        </div>
      </nav>
    </header>
  );
}
