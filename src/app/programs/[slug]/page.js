import Donationform from "@/components/DonationForm";
import ProgramSingleHero from "@/components/ProgramSingleHero";
import ProgramSingleSection1 from "@/components/ProgramSingleSection1";
import ProgramSingleSection2 from "@/components/ProgramSingleSection2";
import ProgramSingleSection3 from "@/components/ProgramSingleSection3";
import React from "react";

const page = () => {
  return (
    <>
      <ProgramSingleHero />
      <ProgramSingleSection1 />
      <ProgramSingleSection2 />
      <Donationform />
      <ProgramSingleSection3 />
    </>
  );
};

export default page;
