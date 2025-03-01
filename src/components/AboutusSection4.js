"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const AboutusSection4 = () => {
  const volunteers = [
    { id: 1, name: "Volunteer" },
    { id: 2, name: "Volunteer" },
    { id: 3, name: "Volunteer" },
    { id: 4, name: "Volunteer" },
    { id: 5, name: "Volunteer" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // Large screens
      { breakpoint: 768, settings: { slidesToShow: 2 } }, // Tablets
      { breakpoint: 640, settings: { slidesToShow: 2 } }, // Mobile
    ],
  };

  return (
    <section className="bg-[#FCEECB] py-12 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Volunteers</h2>
        <Slider {...settings}>
          {volunteers.map((volunteer) => (
            <div key={volunteer.id} className="p-3 flex justify-center">
              <div className="bg-white rounded-xl p-4 shadow-lg w-[90%] max-w-[300px]">
                <div className="w-full aspect-[4/5] bg-gray-300 rounded-lg mb-3"></div>
                <h3 className="text-lg font-semibold">{volunteer.name}</h3>
                <p className="text-orange-500 text-sm">Volunteer</p>
                <div className="flex justify-center gap-3 mt-2 text-lg">
                  <FaFacebookF className="cursor-pointer hover:text-blue-600" />
                  <FaXTwitter className="cursor-pointer hover:text-black" />
                  <FaInstagram className="cursor-pointer hover:text-pink-500" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AboutusSection4;
