import HeroSection from "@/components/HeroSection";
import HomeSection1 from "@/components/HomeSection1";
import Cta from "@/components/Cta";
import HomeSection2 from "@/components/HomeSection2";
import HomeSection3 from "@/components/HomeSection3";
import HomeSection4 from "@/components/HomeSection4";
import Donationform from "@/components/DonationForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <Donationform />
      <Cta />
    </>
  );
}
