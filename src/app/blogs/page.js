import BlogHero from "@/components/BlogHero";
import BlogListing from "@/components/BlogListing";
import VolunteerPopup from "@/components/VolunteerPopup";
import React from "react";

const page = () => {
  return (
    <>
      <VolunteerPopup />
      <BlogHero />
      <BlogListing />
    </>
  );
};

export default page;
