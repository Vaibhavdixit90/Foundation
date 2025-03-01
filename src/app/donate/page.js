import Cta from "@/components/Cta";
import DonateHero from "@/components/DonateHero";
import DonateSection1 from "@/components/DonateSection1";
import DonateSection3 from "@/components/DonateSection3";
import Donationform from "@/components/DonationForm";
import HomeSection2 from "@/components/HomeSection2";
import React from "react";

const page = () => {
  return (
    <>
      <DonateHero />
      <DonateSection1 />
      <Donationform />
      <DonateSection3 />
      <HomeSection2 />
      <Cta />
    </>
  );
};

export default page;
