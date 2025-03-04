"use client";
import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch(
          "https://ehubzone.com/wp-json/wp/v2/gallery_post?_fields=acf"
        );
        const data = await response.json();

        let fetchedImages = [];

        for (const item of data) {
          if (!item.acf.gallery || item.acf.gallery.length === 0) continue;

          for (const mediaId of item.acf.gallery) {
            const mediaResponse = await fetch(
              `https://ehubzone.com/wp-json/wp/v2/media/${mediaId}`
            );
            const mediaData = await mediaResponse.json();

            if (mediaData.source_url) {
              fetchedImages.push({
                title: item.acf.title || "Unknown",
                imageUrl: mediaData.source_url,
              });
            }
          }
        }

        // Ensure all categories are included
        const uniqueCategories = [
          "all",
          ...new Set(fetchedImages.map((img) => img.title)),
        ];

        setImages(fetchedImages);
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.title === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-6 mt-10 px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-0 gap-4">
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
      <p className="hidden md:block text-left max-w-3xl">
        Explore our gallery showcasing the impact of our projects, events, and
        stories. Discover how we have made a difference in the lives of
        individuals and communities. Join us in our mission to make a positive
        impact in the world.
      </p>
      {loading ? (
        <p className="text-center text-xl">Loading...</p>
      ) : filteredImages.length === 0 ? (
        <p className="text-center text-xl">No images available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          {filteredImages.map((image, key) => (
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-[250px] object-cover rounded"
              key={key}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
