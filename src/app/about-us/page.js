import AboutusHero from "@/components/AboutusHero";
import AboutusSection1 from "@/components/AboutusSection1";
import AboutusSection2 from "@/components/AboutusSection2";
import Cta from "@/components/Cta";
import FAQ from "@/components/FAQ";
import React from "react";

const page = () => {
  return (
    <>
      <AboutusHero />
      <AboutusSection1 />
      <AboutusSection2 />
      {/* <AboutusSection4 /> */}
      <FAQ />
      <Cta />
    </>
  );
};

export default page;
