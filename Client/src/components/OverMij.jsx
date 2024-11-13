import React from "react";
import ingridimg from "../assets/img/selfsmall.jpg";

export default function OverMij() {
  return (
    <article className="bg-main">
      <hr className="h-px my-8 bg-maindark border-0" />
      <div className="px-2 md:px-10 pb-10 md:flex lg:px-56">
        <img
          src={ingridimg}
          className="my-10 md:mt-20 md:mr-10 md:flex-none md:max-h-60 rounded-full"
          alt="Baby Massage"
        />
        <div class="md:h-96 md:my-6 md:mr-12 md:bg-maindarker md:w-px"></div>
        <div className="flex-1">
          <h2 id="overmij" className="text-xl md:text-2xl font-bold mb-1">
            Over mij
          </h2>
          <p className="text-sm md:text-base">
            Ik ben Ingrid en vond het altijd al leuk om op baby’s te passen en
            te verzorgen. Daarom zo in de kinderopvang terecht gekomen waar mijn
            passie ligt. Zo ben ik nu al zo’n 32 jaar gespecialiseerd
            babyleidster en werk nog steeds met veel plezier binnen de
            kinderopvang. Door nog meer te kunnen betekenen voor de baby’s en ze
            beter te kunnen laten ontspannen en aan te voelen, ben ik de
            opleiding gaan volgen tot shantala babymassage docente. Zo mooi om
            ouders te kunnen leren hoe ze hun baby kunnen masseren, waardoor hun
            kindje kunnen laten ontspannen en helpen.
          </p>
          <br />
          <p className="text-sm md:text-base">
            Binnen mijn werk heb ik dan ook vele baby’s kunnen laten ontspannen
            en les gegeven aan ouders. Vaak heb ik dan ook gemerkt en gezien wat
            een massage al wel niet kan doen! Vooral bij prikkelgevoelige baby’s
            gaf het zoveel rust en ontspanning zodat het veel beter kon slapen
            en ontspannen. Bij krampjes of obstipatie geeft het verlichting en
            ontspanning en zo betekent een massage nog zoveel meer. Verder kan
            ik door mijn vele ervaring ook praktische tips of handvaten geven
            over slapen en voeding of draagtechnieken.
          </p>
        </div>
      </div>
      <hr className="h-px mb-8 md:my-8 bg-maindark border-0" />
    </article>
  );
}
