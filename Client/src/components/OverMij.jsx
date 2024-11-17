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
        <div className="md:h-96 md:my-6 md:mr-12 md:bg-maindarker md:w-px"></div>
        <div className="flex-1">
          <h2 id="overmij" className="text-xl md:text-2xl font-bold mb-1">
            Over mij
          </h2>
          <p className="text-sm md:text-base">
            Mijn naam is Ingrid en al van jongs af aan vond ik het heerlijk om
            voor baby’s te zorgen. Deze liefde heeft mij uiteindelijk naar de
            kinderopvang geleid, waar ik al ruim 32 jaar met veel passie en
            plezier werk als gespecialiseerde babyleidster.
          </p>
          <br />
          <p className="text-sm md:text-base">
            Om baby’s nog beter te kunnen laten ontspannen en beter aan te
            voelen wat ze nodig hebben, ben ik een opleiding gaan volgen tot
            Shantala-babymassage docente. Het is mooi om ouders te leren hoe zij
            hun baby kunnen masseren, zodat hun kindje zich kan ontspannen en
            zich prettiger voelt.
          </p>
          <br />
          <p className="text-sm md:text-base">
            In mijn werk heb ik al vele baby’s geholpen om tot rust te komen en
            heb ik ouders mogen begeleiden met babymassagelessen. Het is telkens
            weer bijzonder om te zien wat een massage kan betekenen. Bij
            prikkelgevoelige baby’s zorgt het voor meer rust, waardoor ze beter
            slapen en ontspannen. Ook bij krampjes of obstipatie biedt een
            massage vaak verlichting en ontspanning.
          </p>
          <br />
          <p className="text-sm md:text-base">
            Met mijn jarenlange ervaring geef ik daarnaast praktische tips en
            adviezen over slapen, voeding en draagtechnieken. Mijn grootste
            voldoening haal ik uit het ondersteunen van baby’s én hun ouders,
            zodat zij samen een ontspannen en fijne start kunnen maken.
          </p>
        </div>
      </div>
      <hr className="h-px mb-8 md:my-8 bg-maindark border-0" />
    </article>
  );
}
