export function DropBanner() {
  return (
    <div
      className="
        mt-10
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-6
      "
    >

      <p
        className="
          text-xs
          uppercase
          tracking-[0.4em]
          text-white/50
        "
      >
        First Drop
      </p>


      <h3
        className="
          mt-3
          text-2xl
          font-bold
        "
      >
        Limited Release
      </h3>


      <p
        className="
          mt-3
          text-sm
          text-white/60
        "
      >
        The first NOEXCUSIV piece.
        Created for those who choose discipline over excuses.
      </p>


      <div
        className="
          mt-6
          flex
          items-center
          gap-3
          text-sm
          text-white/70
        "
      >

        <span
          className="
            h-2
            w-2
            rounded-full
            bg-green-500
          "
        />

        Available now

      </div>


    </div>
  );
}