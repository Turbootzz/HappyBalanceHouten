import React from "react";

export default function CursusVolgen() {
  return (
    <article className="bg-mainbg">
      <div className="px-2 md:px-10 md:flex lg:px-56">
        <div className="md:flex-1 mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Cursus volgen</h2>
          <h3 className="text-base font-semibold mb-1">Individueel:</h3>
          <p className="text-sm md:text-base">
            Wil je één-op-één leren hoe je je baby kunt masseren? Ik kom graag
            bij je thuis om je de Shantala babymassage te leren. De cursus duurt
            ongeveer 60 tot 90 minuten. Tijdens de sessie laat ik de massage
            zien op een pop, terwijl jij je eigen baby masseert. Na afloop
            ontvang je:
          </p>
          <ul className="list-disc pl-4">
            <li>
              Een handige reader met duidelijke beschrijvingen van alle
              technieken.
            </li>
            <li>
              Een massageolie op basis van natuurlijke ingrediënten, speciaal
              geschikt voor baby’s.
            </li>
          </ul>
          <h3 className="text-base font-semibold mt-6 mb-1">Duo:</h3>
          <p className="text-sm md:text-base">
            Wil je samen met een vriendin de cursus volgen? Dat kan! Beide
            mama’s masseren hun eigen baby, terwijl ik de massage voordoe op een
            pop. Zo maken we er een gezellige en leerzame sessie van!
            <br />
            <br />
            Laat me weten welke optie bij jou past, en we plannen samen een
            fijne cursus in!
          </p>
        </div>
        <div className="md:max-h-96 md:my-6 md:mx-12 md:bg-maindarker md:w-px"></div>
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
