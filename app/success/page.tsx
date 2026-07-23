import Link from "next/link";


export default function SuccessPage() {
  return (
    <main
      className="
        mx-auto
        flex
        min-h-screen
        max-w-4xl
        flex-col
        items-center
        justify-center
        px-6
        text-center
      "
    >

      <p
        className="
          text-sm
          uppercase
          tracking-[0.5em]
          text-white/50
        "
      >
        Order Confirmed
      </p>



      <h1
        className="
          mt-6
          text-5xl
          font-bold
        "
      >
        Thank you for joining NOEXCUSIV.
      </h1>



      <p
        className="
          mt-6
          max-w-xl
          text-lg
          text-white/60
        "
      >
        Your order has been received and is now being processed.
        You will receive updates by email once your order ships.
      </p>




      <div
        className="
          mt-10
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          text-left
        "
      >

        <h2
          className="
            text-xl
            font-bold
          "
        >
          What happens next?
        </h2>


        <ul
          className="
            mt-4
            space-y-3
            text-white/60
          "
        >

          <li>
            ✓ Your payment has been confirmed
          </li>


          <li>
            ✓ Your product will be prepared
          </li>


          <li>
            ✓ You will receive tracking information by email
          </li>


        </ul>

      </div>




      <Link
        href="/shop"
        className="
          mt-10
          rounded-full
          bg-white
          px-10
          py-4
          font-bold
          text-black
          transition
          hover:scale-105
        "
      >
        Continue Shopping
      </Link>



    </main>
  );
}