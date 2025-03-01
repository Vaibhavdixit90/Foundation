import Gallery from "@/components/Gallery";
import GalleryHero from "@/components/GalleryHero";
import VolunteerPopup from "@/components/VolunteerPopup";
import React from "react";

const page = () => {
  return (
    <>
      <VolunteerPopup />
      <GalleryHero />
      <Gallery />
    </>
  );
};

export default page;
