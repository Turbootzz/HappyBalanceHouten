import React from "react";

export default function Lead() {
  return (
    <section className="bg-main">
      <div className="px-5 md:px-10 lg:px-56">
        <h1 className="font-pacifico text-5xl md:text-7xl pt-24">
          Happy Balance!
        </h1>
        <p className="text-lg pt-12 pb-8">&#10003; Ontspannen en in balans</p>
        <a href="#overmij">
          <button className="hover:bg-maindarker text-black font-semibold py-2 px-4 border border-black rounded-3xl shadow">
            Lees meer
          </button>
        </a>
        <div className="pb-36"></div>
      </div>
      <hr className="h-px my-8 bg-maindark border-0" />
    </section>
  );
}
