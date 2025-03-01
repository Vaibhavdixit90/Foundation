"use client";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const HomeSection1 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = document.getElementById("about-video");
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="bg-white text-black py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h4 className="text-gray-600 uppercase tracking-wide">
            Know About Us
          </h4>
          <h2 className="text-4xl font-bold leading-tight">
            We provide a place for children with special needs
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p className="text-gray-600">
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
            id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
            posuere.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600">
            Learn more
          </button>
        </div>

        {/* Right Video Section */}
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <video
              id="about-video"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              className="w-full h-full object-cover"
              controls
            />
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl rounded-full w-16 h-16 m-auto"
              >
                <FaPlay size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Supporters Section */}
      <div className="mt-16 text-center">
        <h4 className="uppercase tracking-wide mb-6 text-2xl font-bold">
          Our Supporters
        </h4>
        <div className="border-t border-gray-300 w-full max-w-4xl mx-auto mb-6"></div>
        <div className="flex justify-center gap-6 flex-wrap">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="text-gray-600">
              logolpsum
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;
