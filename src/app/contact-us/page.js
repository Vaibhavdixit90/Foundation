import ContactForm from "@/components/ContactForm";
import ContactSection1 from "@/components/ContactSection1";
import ContactUsHero from "@/components/ContactUsHero";
import Cta from "@/components/Cta";
import FAQ from "@/components/FAQ";
import VolunteerPopup from "@/components/VolunteerPopup";
import React from "react";

const page = () => {
  return (
    <>
      <VolunteerPopup />
      <ContactUsHero />
      <ContactForm />
      <ContactSection1 />
      <FAQ />
      <Cta />
    </>
  );
};

export default page;
