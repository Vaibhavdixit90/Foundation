import Image from "next/image";
import React from "react";

const GalleryHero = () => {
  return (
    <div className="bg-[#FCEEC3] py-16 px-6 md:px-20 lg:px-32 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mt-3">
            Our goal is to provide opportunities for Women in India and the
            World
          </h1>
          <p className=" mt-4 text-sm md:text-base">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere.
          </p>
        </div>

        {/* Right Section - News List */}
        <div className="space-y-6">
          <Image
            src="https://images.pexels.com/photos/6646847/pexels-photo-6646847.jpeg"
            alt="Dev Mukharji"
            width={600}
            height={450}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryHero;
