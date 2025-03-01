import AboutusHero from "@/components/AboutusHero";
import AboutusSection1 from "@/components/AboutusSection1";
import AboutusSection2 from "@/components/AboutusSection2";
import AboutusSection3 from "@/components/AboutusSection3";
import AboutusSection4 from "@/components/AboutusSection4";
import Cta from "@/components/Cta";
import FAQ from "@/components/FAQ";
import VolunteerPopup from "@/components/VolunteerPopup";
import React from "react";

const page = () => {
  return (
    <>
      <VolunteerPopup />
      <AboutusHero />
      <AboutusSection1 />
      <AboutusSection2 />
      <AboutusSection3 />
      {/* <AboutusSection4 /> */}
      <FAQ />
      <Cta />
    </>
  );
};

export default page;
