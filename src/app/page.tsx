import Footer from "@/components/footer/Footer";
// import Header from "@/components/header/Header";
import { Intro } from "@/components/intro";
import FadeInText from "@/components/AnimatedText/FadeInText";
import HorizontalScroll from "@/components/animations/HorizontalScroll";

const horizontalScrollTexts = [
  {
    text: "Kurppa Hosk",
    secondaryText:
      "Transforming brands and organisations to drive real change.",
  },
  {
    text: "Kurppa Hosk Communications",
    secondaryText:
      "Building unforgettable brands in the new age of communication.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <Intro />
      {/* Main Content */}
      <main className="flex-grow bg-black text-white">
        <FadeInText className="bg-yellow">
          <p>
            Kurppa Hosk, Animal, Keybroker and Curamando come together to build
            a new challenger. 300 pioneering management consultants and digital
            experts – brought together to make our clients winners in a
            transformative landscape.
          </p>
        </FadeInText>
        <HorizontalScroll paragraphs={[horizontalScrollTexts[0]]} />
        <FadeInText className="bg-dark-blue">
          <p>
            ARC Arise Consulting Group launches and Cupole joins the family.
          </p>
        </FadeInText>
        <FadeInText className="bg-red">
          <p>
            At the beginning of the year, Nameless.today (later part of Above)
            is founded. Umain and Above join the journey in the fall. The three
            companies lay the foundation for the Innovation, Tech and Data
            capability.
          </p>
        </FadeInText>
        <FadeInText className="bg-dark-blue">
          <p>
            The group is further established in Norway through acquisition of
            Heydays and Goods, and also expands into Europe with Fabrique and
            Q42 joining, established in the Netherlands.
          </p>
        </FadeInText>
        <FadeInText className="bg-black">
          <p className="mb-10">
            Proof of concept in Europe and expanding into the US
          </p>
          <p>
            Consulting offer in the Netherlands is launched, building a proof of
            concept in Europe. Simultaneously, the group expands into the US
            with value offer expansion primarily within Brand, Marketing and
            Experience, and Innovation, Technology and Data.
          </p>
        </FadeInText>
        <HorizontalScroll paragraphs={[horizontalScrollTexts[1]]} />
        <FadeInText className="bg-dark-blue">
          <p className="mb-10">ARC becomes Eidra</p>
          <p>
            Eidra launches, reflecting the continued journey ahead. Eidra is a
            manifestation of bigger ambitions, more members of the consultancy
            collective, and an ambition to create great change.
          </p>
        </FadeInText>
        <div className="container mx-auto text-center"></div>
      </main>
      <Footer />
    </div>
  );
}
