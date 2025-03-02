"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogListing = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://ehubzone.com/wp-json/wp/v2/posts?_embed"
        );
        const data = await response.json();

        const formattedData = await Promise.all(
          data.map(async (post) => {
            let featuredImage = ""; // Declare it inside the map function

            if (post.featured_media) {
              try {
                const mediaRes = await fetch(
                  `https://ehubzone.com/wp-json/wp/v2/media/${post.featured_media}`
                );
                const mediaData = await mediaRes.json();
                featuredImage = mediaData.source_url || "";
              } catch (error) {
                console.error(
                  `Error fetching image for post ${post.id}:`,
                  error
                );
              }
            }

            // Fetch Category Name
            let categoryName = "Uncategorized";
            if (post.categories.length > 0) {
              try {
                const categoryRes = await fetch(
                  `https://ehubzone.com/wp-json/wp/v2/categories/${post.categories[0]}`
                );
                const categoryData = await categoryRes.json();
                categoryName = categoryData.name || categoryName;
              } catch (error) {
                console.error(
                  `Error fetching category for post ${post.id}:`,
                  error
                );
              }
            }

            return {
              id: post.id,
              title: post.title.rendered,
              description: post.excerpt.rendered.replace(/<[^>]*>?/gm, ""), // Removing HTML tags
              category: categoryName,
              image: featuredImage,
              slug: post.slug, // Extracting slug
            };
          })
        );

        setBlogPosts(formattedData);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center sm:flex sm:items-end sm:space-x-16 sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
            Latest Articles - See What We Are Doing
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 px-8 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0">
          {blogPosts.map((item) => (
            <Link key={item.id} href={`/blogs/${item.slug}`} className="group">
              <div className="flex flex-col h-[400px] overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow rounded-xl hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <Image
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                    width={400}
                    height={192}
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="flex-1 px-4 py-5 sm:p-6">
                  <p className="text-lg font-bold text-gray-900">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    {item.description.length > 120
                      ? `${item.description.slice(0, 120)}...`
                      : item.description}
                  </p>
                </div>
                <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 flex justify-between items-center">
                  <p className="text-sm font-medium text-gray-900">
                    {item.category}
                  </p>
                  <p className="text-xs font-medium text-gray-500">Author</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListing;
