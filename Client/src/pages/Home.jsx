import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import babyimg from "../assets/img/img1.jpeg";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <article className="bg-mainbg">
          <div className="px-2 md:px-10">
            <h1 className="text-3xl md:text-4xl font-bold pt-16">
              Babymassage
            </h1>
            <br />
            <div className="md:flex">
              <p className="text-sm md:text-base md:flex-1">
                Deze massage biedt vele voordelen:
                <menu className="list-disc">
                  <li>
                    Door de <b>massage/aanraking</b> geeft het je kindje een
                    geborgen en vertrouwd gevoel.
                  </li>
                  <li>
                    Heeft een positief effect op de lichamelijke en emotionele
                    ontwikkeling van je baby en <b>versterkt je band</b>.
                  </li>
                  <li>
                    Prikkelgevoelige(sensitieve) baby’s/ huilbaby ’s ontspannen
                    en kalmeren door massage en zullen ook hierdoor beter tot
                    rust komen en <b>makkelijker in slaap vallen</b>.
                  </li>
                  <li>
                    Betere spijsvertering/ geeft verlichting bij buikkrampjes en
                    obstipatie en overstrekking.
                  </li>
                  <li>
                    Versterkt de band tussen jou en je baby, een 1 op 1 momentje
                    samen.
                  </li>
                  <li>Bevordert de doorbloeding.</li>
                  <li>Beter inmuunsysteem.</li>
                </menu>
              </p>
              <div class="md:h-52 md:mt-6 md:mx-3 md:bg-main md:w-px mt-6"></div>
              <div className="flex content-center items-center justify-center">
                <img
                  src={babyimg}
                  className="md:mx-12 md:flex-none md:max-h-80 rounded-2xl divide-x"
                  alt="Baby Massage"
                />
              </div>
            </div>
          </div>
        </article>
        <article className="bg-main">
          <div className="px-2 md:px-10 pb-10">
            <hr className="h-px my-8 bg-main border-0" />
            <h2 id="overmij" className="text-xl md:text-2xl font-bold">
              Over mij
            </h2>
            <p className="text-sm md:text-base">
              Ik ben Ingrid en vond het altijd al leuk om op baby’s te passen en
              te verzorgen. Daarom zo in de kinderopvang terecht gekomen waar
              mijn passie ligt. Zo ben ik nu al zo’n 32 jaar gespecialiseerd
              babyleidster en werk nog steeds met veel plezier binnen de
              kinderopvang. Door nog meer te kunnen betekenen voor de baby’s en
              ze beter te kunnen laten ontspannen en aan te voelen, ben ik de
              opleiding gaan volgen tot shantala babymassage docente. Zo mooi om
              ouders te kunnen leren hoe ze hun baby kunnen masseren, waardoor
              hun kindje kunnen laten ontspannen en helpen.
            </p>
            <br />
            <p className="text-sm md:text-base">
              Binnen mijn werk heb ik dan ook vele baby’s kunnen laten
              ontspannen en les gegeven aan ouders. Vaak heb ik dan ook gemerkt
              en gezien wat een massage al wel niet kan doen! Vooral bij
              prikkelgevoelige baby’s gaf het zoveel rust en ontspanning zodat
              het veel beter kon slapen en ontspannen. Bij krampjes of
              obstipatie geeft het verlichting en ontspanning en zo betekent een
              massage nog zoveel meer. Verder kan ik door mijn vele ervaring ook
              praktische tips of handvaten geven over slapen en voeding of
              draagtechnieken.
            </p>
          </div>
        </article>
        <article className="bg-mainbg">
          <div className="px-2 md:px-10">
            <hr className="h-px mb-8 md:my-8 bg-main border-0" />
            <h2 className="text-xl md:text-2xl font-bold">Cursus volgen</h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Nesciunt, velit. Ipsum pariatur enim cum. Fuga sapiente aliquid
              nisi vel consequuntur minima, distinctio expedita dolor tempore a
              officiis adipisci provident tempora.
            </p>
            <br />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
