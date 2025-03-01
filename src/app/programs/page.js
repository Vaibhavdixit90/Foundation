"use client";
import React, { useState } from "react";
import Cta from "@/components/Cta";
import HomeSection2 from "@/components/HomeSection2";
import ProgramsHero from "@/components/ProgramsHero";
import ProgramsSection1 from "@/components/ProgramsSection1";
import VolunteerPopup from "@/components/VolunteerPopup";

const page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <VolunteerPopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />

      <ProgramsHero />
      <ProgramsSection1 />
      <HomeSection2 />
      <Cta />
    </>
  );
};

export default page;
