import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import babyimg from "../assets/img/img1.jpeg";
import ingridimg from "../assets/img/selfsmall.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto">
        <article className="bg-main">
          <div className="px-5 md:px-10">
            <h1 className="font-pacifico text-5xl md:text-7xl pt-24">
              Happy Balance!
            </h1>
            <p className="text-lg pt-12 pb-8">
              &#10003; Ontspannen en in balans
            </p>
            <a href="#overmij">
              <button class="hover:bg-maindarker text-black font-semibold py-2 px-4 border border-black rounded-3xl shadow">
                Lees meer
              </button>
            </a>
            <div class="pb-36"></div>
          </div>
        </article>
        <article className="bg-mainbg">
          <div className="px-2 md:px-10">
            <h1 className="text-3xl md:text-4xl font-bold pt-16">
              Babymassage
            </h1>
            <br />
            <div className="md:flex">
              <div className="flex-1">
                <p className="text-base md:text-base md:flex-1">
                  Deze massage biedt vele voordelen:
                </p>
                <menu className="list-disc text-sm md:text-base md:flex-1 pb-4">
                  <br />
                  <li>
                    Door de <b>massage/aanraking</b> geeft het je kindje een
                    geborgen en vertrouwd gevoel.
                  </li>
                  <br className="md:invisible" />
                  <li>
                    Heeft een positief effect op de lichamelijke en emotionele
                    ontwikkeling van je baby en <b>versterkt je band</b>.
                  </li>
                  <br />
                  <li>
                    Prikkelgevoelige(sensitieve) baby’s/ huilbaby ’s ontspannen
                    en kalmeren door massage en zullen ook hierdoor beter tot
                    rust komen en <b>makkelijker in slaap vallen</b>.
                  </li>
                  <br />
                  <li>
                    Betere spijsvertering/ geeft verlichting bij buikkrampjes en
                    obstipatie en overstrekking.
                  </li>
                  <br />
                  <li>
                    Versterkt de band tussen jou en je baby, een 1 op 1 momentje
                    samen.
                  </li>
                  <br />
                  <li>Bevordert de doorbloeding.</li>
                  <br />
                  <li>Beter inmuunsysteem.</li>
                </menu>
              </div>
              <div class="md:h-96 md:mt-6 md:mx-12 md:bg-main md:w-px mt-6"></div>
              <div className="flex content-center items-center justify-center">
                <img
                  src={babyimg}
                  className="md:mx-6 md:flex-none md:max-h-96 rounded-2xl divide-x"
                  alt="Baby Massage"
                />
              </div>
            </div>
          </div>
        </article>
        <article className="bg-main">
          <hr className="h-px my-8 bg-maindark border-0" />
          <div className="px-2 md:px-10 pb-10 md:flex">
            <img
              src={ingridimg}
              className="my-10 md:mt-20 md:mr-10 md:flex-none md:max-h-60 rounded-full"
              alt="Baby Massage"
            />
            <div class="md:h-96 md:mt-6 md:mr-12 md:bg-maindarker md:w-px"></div>
            <div className="flex-1">
              <h2 id="overmij" className="text-xl md:text-2xl font-bold mb-1">
                Over mij
              </h2>
              <p className="text-sm md:text-base">
                Ik ben Ingrid en vond het altijd al leuk om op baby’s te passen
                en te verzorgen. Daarom zo in de kinderopvang terecht gekomen
                waar mijn passie ligt. Zo ben ik nu al zo’n 32 jaar
                gespecialiseerd babyleidster en werk nog steeds met veel plezier
                binnen de kinderopvang. Door nog meer te kunnen betekenen voor
                de baby’s en ze beter te kunnen laten ontspannen en aan te
                voelen, ben ik de opleiding gaan volgen tot shantala babymassage
                docente. Zo mooi om ouders te kunnen leren hoe ze hun baby
                kunnen masseren, waardoor hun kindje kunnen laten ontspannen en
                helpen.
              </p>
              <br />
              <p className="text-sm md:text-base">
                Binnen mijn werk heb ik dan ook vele baby’s kunnen laten
                ontspannen en les gegeven aan ouders. Vaak heb ik dan ook
                gemerkt en gezien wat een massage al wel niet kan doen! Vooral
                bij prikkelgevoelige baby’s gaf het zoveel rust en ontspanning
                zodat het veel beter kon slapen en ontspannen. Bij krampjes of
                obstipatie geeft het verlichting en ontspanning en zo betekent
                een massage nog zoveel meer. Verder kan ik door mijn vele
                ervaring ook praktische tips of handvaten geven over slapen en
                voeding of draagtechnieken.
              </p>
            </div>
          </div>
          <hr className="h-px mb-8 md:my-8 bg-maindark border-0" />
        </article>
        <article className="bg-mainbg">
          <div className="px-2 md:px-10 md:flex">
            <div className="md:flex-1 mb-10">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Cursus volgen
              </h2>
              <h3 className="text-base font-semibold mb-1">Individueel:</h3>
              <p className="text-sm md:text-base">
                De babymassagecursus leer ik je graag en kom bij je thuis en
                deze zal ongeveer 60 tot 90 minuten duren. Ik doe de massage
                voor op een pop en jij masseert je baby tegelijkertijd. Je
                krijgt een handige reader na afloop, waarin alle handelingen in
                staan beschreven. Daarnaast krijg je nog een massageolie cadeau.
                Deze massageolie is gebasseerd op natuurlijke stoffen en
                geschikt voor baby’s. Ben jij enthousiast geworden en wil jij
                graag de shantalababymassage cursus volgen met je kleintje? Laat
                het mij dan weten en vul dan het inschrijfformulier en ik neem
                dan zsm contact met je op!
              </p>
              <h3 className="text-base font-semibold mt-6 mb-1">Duo:</h3>
              <p className="text-sm md:text-base">
                Gezellig samen met een vriendin met een baby samen de
                babymassagecursus volgen kan natuurlijk ook! Beide mama’s
                masseren hun eigen baby en ik doe de massage voor op de pop.
              </p>
            </div>
            <div class="md:h-96 md:mt-6 md:mx-12 md:bg-maindarker md:w-px"></div>
            <div className="md:flex-1 mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Data en kosten
              </h2>
              <h3 className="text-base font-semibold mb-1">Openingstijden:</h3>
              <p className="text-sm md:text-base">
                De cursus is te volgen op de vrijdagochtend en evt
                zaterdagochtend.
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
      </main>
      <Footer />
    </>
  );
}
