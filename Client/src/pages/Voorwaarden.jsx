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
            Aan de hand van deze kunnen we zonodig nog telefonisch contact
            hebben. Het is belangrijk om op een verantwoordelijke en veilige
            manier de massage gegeven kan worden. Denk hierbij aan bijv.
            heupafwijking, navelbreukje of allergische reacties of eczeem.
          </p>
          <h3 className="text-xl md:text-xl font-bold mt-8">Vertrouwelijk</h3>
          <p>
            Alle informatie zowel tijdens de intake en tijdens de cursus wordt
            vertrouwelijk behandeld.
          </p>
          <h3 className="text-xl md:text-xl font-bold mt-8">Afspraken</h3>
          <p>
            De gemaakte afspraak kan tot 24 uur voorafgaand aan cursus kosteloos
            worden geannuleerd. Bij annulering binnen 24 uur wordt 50% in
            rekening gebracht.
          </p>
          <h3 className="text-xl md:text-xl font-bold mt-8">
            Aansprakelijkheid
          </h3>
          <p>
            Happy Balance kan niet verantwoordelijk worden gesteld voor de wijze
            waarop adviezen in de praktijk worden toegepast, door de ouders of
            andere verzorgers. Als ouder (of verzorger) blijf je ten allen tijde
            verantwoordelijk voor jezelf en je kind.
          </p>
          <h3 className="text-xl md:text-xl font-bold mt-8">Beeld</h3>
          <p>
            Het beeldmateriaal op deze website is eigendom van Happy Balance en
            mag niet zonder voorafgaande toestemming worden gebruikt of
            verspreid.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
