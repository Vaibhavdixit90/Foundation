import ContactForm from "@/components/ContactForm";
import ContactSection1 from "@/components/ContactSection1";
import ContactUsHero from "@/components/ContactUsHero";
import Cta from "@/components/Cta";
import FAQ from "@/components/FAQ";
import React from "react";

const page = () => {
  return (
    <>
      <ContactUsHero />
      <ContactForm />
      <ContactSection1 />
      <FAQ />
      <Cta />
    </>
  );
};

export default page;
