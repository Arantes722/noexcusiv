import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";


export function BrandSection() {

  return (

    <Section
      id="brand"
      className="bg-zinc-950"
    >

      <Container>

        <div
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >

          <p
            className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            THE NOEXCUSIV MINDSET
          </p>




          <h2
            className="
              text-4xl
              font-black
              leading-tight
              md:text-6xl
            "
          >
            We don't sell clothes.
            <br />
            We represent discipline.
          </h2>





          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-zinc-400
            "
          >
            NOEXCUSIV was created for people who refuse
            average. Every piece represents consistency,
            ambition and the commitment to become better
            every single day.
          </p>





          <div
            className="
              mt-12
              grid
              gap-6
              md:grid-cols-3
            "
          >


            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-black
                p-6
              "
            >

              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Discipline
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  text-white/50
                "
              >
                Progress starts when motivation ends.
              </p>

            </div>





            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-black
                p-6
              "
            >

              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Consistency
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  text-white/50
                "
              >
                Small actions create big results.
              </p>

            </div>





            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-black
                p-6
              "
            >

              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Growth
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  text-white/50
                "
              >
                Never settle for your current level.
              </p>

            </div>



          </div>



        </div>


      </Container>


    </Section>

  );

}