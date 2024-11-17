import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

export default function Voorwaarden() {
  return (
    <>
      <Header />
      <main className="mx-auto">
        <div className="px-2 md:px-10 lg:px-72 my-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-16 text-center">
            Algemene Voowaarden
          </h1>

          <h3 className="text-xl md:text-xl font-bold mt-8">Intake</h3>
          <p>
            Voorafgaand aan de babymassagecursus ontvang je een intakeformulier.
            Indien nodig neem ik vooraf telefonisch contact met je op om te
            bespreken of er aandachtspunten zijn, zoals:
          </p>
          <ul className="list-disc pl-4">
            <li>Heupafwijkingen</li>
            <li>Navelbreukjes</li>
            <li>Allergieën of eczeem</li>
          </ul>
          <br />
          <p>
            Dit zorgt ervoor dat de massage op een veilige en verantwoorde
            manier kan worden uitgevoerd.
          </p>
          <h3 className="text-xl md:text-xl font-bold mt-8">Vertrouwelijk</h3>
          <p>
            Alle informatie die tijdens de intake en de cursus wordt gedeeld,
            wordt strikt vertrouwelijk behandeld.
          </p>
          <h3 className="text-xl md:text-xl font-bold mt-8">Afspraken</h3>
          <ul className="list-disc pl-4">
            <li>
              Afspraken kunnen tot 24 uur voorafgaand aan de cursus kosteloos
              worden geannuleerd.
            </li>
            <li>
              Bij annulering binnen 24 uur wordt 50% van het cursusbedrag in
              rekening gebracht.
            </li>
          </ul>
          <h3 className="text-xl md:text-xl font-bold mt-8">
            Aansprakelijkheid
          </h3>
          <p>
            Happy Balance is niet verantwoordelijk voor de manier waarop
            adviezen in de praktijk worden toegepast door ouders of verzorgers.
            Ouders/verzorgers blijven te allen tijde zelf verantwoordelijk voor
            hun eigen handelen en dat van hun kind.
          </p>
          <h3 className="text-xl md:text-xl font-bold mt-8">Beeldmateriaal</h3>
          <p>
            Alle beelden op de website van Happy Balance zijn eigendom van Happy
            Balance en mogen niet zonder voorafgaande toestemming worden
            gebruikt of verspreid.
            <br />
            <br />
            Voor vragen of meer informatie kun je altijd contact met me opnemen!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
