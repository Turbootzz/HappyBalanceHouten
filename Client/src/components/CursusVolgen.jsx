import React from "react";

export default function CursusVolgen() {
  return (
    <article className="bg-mainbg">
      <div className="px-2 md:px-10 md:flex lg:px-56">
        <div className="md:flex-1 mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Cursus volgen</h2>
          <h3 className="text-base font-semibold mb-1">Individueel:</h3>
          <p className="text-sm md:text-base">
            De babymassagecursus leer ik je graag en kom bij je thuis en deze
            zal ongeveer 60 tot 90 minuten duren. Ik doe de massage voor op een
            pop en jij masseert je baby tegelijkertijd. Je krijgt een handige
            reader na afloop, waarin alle handelingen in staan beschreven.
            Daarnaast krijg je nog een massageolie cadeau. Deze massageolie is
            gebasseerd op natuurlijke stoffen en geschikt voor baby’s. Ben jij
            enthousiast geworden en wil jij graag de shantalababymassage cursus
            volgen met je kleintje? Laat het mij dan weten en vul dan het
            inschrijfformulier en ik neem dan zsm contact met je op!
          </p>
          <h3 className="text-base font-semibold mt-6 mb-1">Duo:</h3>
          <p className="text-sm md:text-base">
            Gezellig samen met een vriendin met een baby samen de
            babymassagecursus volgen kan natuurlijk ook! Beide mama’s masseren
            hun eigen baby en ik doe de massage voor op de pop.
          </p>
        </div>
        <div class="md:max-h-96 md:my-6 md:mx-12 md:bg-maindarker md:w-px"></div>
        <div className="md:flex-1 mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Data en kosten</h2>
          <h3 className="text-base font-semibold mb-1">Openingstijden:</h3>
          <p className="text-sm md:text-base">
            De cursus is te volgen op de vrijdagochtend en evt zaterdagochtend.
          </p>
          <h3 className="text-base font-semibold mt-6 mb-1">Kosten:</h3>
          <p className="text-sm md:text-base">
            <u>Individueel:</u> 75 euro voor 60-90 minuten complete
            shantalababymassagecursus incl reader en massageolie.
            <br />
            <br />
            <u>Duo:</u> 85 euro voor 60-90 minuten complete
            shantalababymassagecursus incl reader en massageolie
          </p>
        </div>
      </div>
    </article>
  );
}
