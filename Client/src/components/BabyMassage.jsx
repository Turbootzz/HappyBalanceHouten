import React from "react";
import babyimg from "../assets/img/img1.jpeg";

export default function BabyMassage() {
  return (
    <article className="bg-mainbg">
      <div className="px-2 md:px-10 lg:px-56">
        <h1 className="text-3xl md:text-4xl font-bold pt-16">Babymassage</h1>
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
                Prikkelgevoelige(sensitieve) baby’s/ huilbaby ’s ontspannen en
                kalmeren door massage en zullen ook hierdoor beter tot rust
                komen en <b>makkelijker in slaap vallen</b>.
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
          <div className="md:h-96 md:mt-6 md:mx-12 md:bg-main md:w-px mt-6"></div>
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
  );
}
