export default function AboutPage() {
  return (
    <main
      className="
        mx-auto
        max-w-5xl
        px-6
        pb-24
        pt-32
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
        About NOEXCUSIV
      </p>



      <h1
        className="
          mt-6
          text-5xl
          font-bold
          md:text-6xl
        "
      >
        Built for those who refuse excuses.
      </h1>




      <div
        className="
          mt-12
          space-y-8
          text-lg
          leading-relaxed
          text-white/60
        "
      >

        <p>
          NOEXCUSIV was created around one simple idea:
          excuses are a choice.
        </p>


        <p>
          We believe success is built through discipline,
          consistency and the decision to keep moving forward
          when most people quit.
        </p>


        <p>
          Every product represents a mindset:
          refusing limits, chasing growth and becoming better
          every single day.
        </p>


        <p>
          This is more than clothing.
          It is a reminder of the standards you set for yourself.
        </p>


      </div>




      <div
        className="
          mt-16
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
        "
      >

        <h2
          className="
            text-3xl
            font-bold
          "
        >
          The NOEXCUSIV Mindset
        </h2>


        <ul
          className="
            mt-6
            space-y-4
            text-white/60
          "
        >

          <li>
            ✓ Discipline over motivation
          </li>


          <li>
            ✓ Progress over perfection
          </li>


          <li>
            ✓ No excuses, only action
          </li>


        </ul>


      </div>



    </main>
  );
}