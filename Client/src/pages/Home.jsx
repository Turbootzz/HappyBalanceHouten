import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import babyimg from "../assets/img/img1.jpeg"

export default function Home() {
  return (
    <>
      <Header />
      <main className="container md:container mx-auto px-10">
        <h1 className="text-4xl font-bold pt-16">Babymassage</h1>
        <br />
        <div className="flex">
        <p className="flex-1">
          Deze massage biedt vele voordelen:
          <menu className="list-disc">
            <li>
              Door de massage/aanraking geeft het je kindje een geborgen en
              vertrouwd gevoel.
            </li>
            <li>
              Heeft een positief effect op de lichamelijke en emotionele
              ontwikkeling van je baby en versterkt je band.
            </li>
            <li>
              Prikkelgevoelige(sensitieve) baby’s/ huilbaby ’s ontspannen en
              kalmeren door massage en zullen ook hierdoor beter tot rust komen
              en makkelijker in slaap vallen.
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
        <img src={babyimg} className="mx-12 flex-none max-h-80 rounded-2xl" alt="Baby Massage"/>
        </div>
        <hr className="h-px my-8 bg-main border-0" />
        <h2 className="text-2xl font-bold">Over mij</h2>
        <p>
          Ik ben Ingrid en vond het altijd al leuk om op baby’s te passen en te
          verzorgen. Daarom zo in de kinderopvang terecht gekomen waar mijn
          passie ligt. Zo ben ik nu al zo’n 32 jaar gespecialiseerd babyleidster
          en werk nog steeds met veel plezier binnen de kinderopvang. Door nog
          meer te kunnen betekenen voor de baby’s en ze beter te kunnen laten
          ontspannen en aan te voelen, ben ik de opleiding gaan volgen tot
          shantala babymassage docente. Zo mooi om ouders te kunnen leren hoe ze
          hun baby kunnen masseren, waardoor hun kindje kunnen laten ontspannen
          en helpen.
        </p>
        <p>
          Binnen mijn werk heb ik dan ook vele baby’s kunnen laten ontspannen en
          les gegeven aan ouders. Vaak heb ik dan ook gemerkt en gezien wat een
          massage al wel niet kan doen! Vooral bij prikkelgevoelige baby’s gaf
          het zoveel rust en ontspanning zodat het veel beter kon slapen en
          ontspannen. Bij krampjes of obstipatie geeft het verlichting en
          ontspanning en zo betekent een massage nog zoveel meer. Verder kan ik
          door mijn vele ervaring ook praktische tips of handvaten geven over
          slapen en voeding of draagtechnieken.
        </p>
        <hr className="h-px my-8 bg-main border-0" />
        <h2 className="text-2xl font-bold">Cursus volgen</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
          velit. Ipsum pariatur enim cum. Fuga sapiente aliquid nisi vel
          consequuntur minima, distinctio expedita dolor tempore a officiis
          adipisci provident tempora.
        </p>
        <br />
      </main>
      <Footer />
    </>
  );
}
