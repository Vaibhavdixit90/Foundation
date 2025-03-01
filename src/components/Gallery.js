"use client";
import React, { useState } from "react";

const imageSrc =
  "https://images.pexels.com/photos/12451890/pexels-photo-12451890.jpeg";

const Gallery = () => {
  const categories = ["all", "events", "projects", "stories"];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const images = [
    { category: "events" },
    { category: "projects" },
    { category: "stories" },
    { category: "events" },
    { category: "projects" },
    { category: "stories" },
  ];
  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-6 mt-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        <h1 className="text-3xl font-bold">Our Impact Gallery</h1>

        <p className="text-center md:hidden px-4 max-w-3xl">
          Explore our gallery showcasing the impact of our projects, events, and
          stories. Discover how we have made a difference in the lives of
          individuals and communities. Join us in our mission to make a positive
          impact in the world.
        </p>
        <div className="flex gap-4 overflow-x-auto md:overflow-visible">
          {categories.map((category) => (
            <span
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 rounded px-4 text-sm cursor-pointer ${
                selectedCategory === category ? "bg-[#fd7e13]" : "bg-[#fd7f11]"
              } text-white`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          ))}
        </div>
      </div>
      <p className="hidden md:block text-center md:text-left px-4 max-w-3xl">
        Explore our gallery showcasing the impact of our projects, events, and
        stories. Discover how we have made a difference in the lives of
        individuals and communities. Join us in our mission to make a positive
        impact in the world.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {filteredImages.map((image, key) => (
          <img
            src={imageSrc}
            alt="gallery"
            className="w-full h-[250px] object-cover rounded"
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
