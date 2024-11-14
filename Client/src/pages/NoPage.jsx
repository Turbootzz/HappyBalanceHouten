import React from "react";

import Header from "../ui/Header";
import Footer from "../ui/Footer";

export default function NoPage() {
  return (
    <>
      <Header />
      <main className="mx-auto">
        <div>
          <h1 className="text-center text-lg md:text-3xl font-bold mt-52 mb-80">
            Oeps... deze pagina bestaat niet :(
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
