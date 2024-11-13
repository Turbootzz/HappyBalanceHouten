import React from "react";

import Header from "../ui/Header";
import Footer from "../ui/Footer";

import Lead from "../components/Lead";
import BabyMassage from "../components/BabyMassage";
import OverMij from "../components/OverMij";
import CursusVolgen from "../components/CursusVolgen";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto">
        <Lead />
        <BabyMassage />
        <OverMij />
        <CursusVolgen />
      </main>
      <Footer />
    </>
  );
}
