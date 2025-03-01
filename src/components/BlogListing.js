import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogListing = () => {
  const blogPosts = [
    {
      title: "Mastering the Art of Photography",
      description:
        "Learn how to capture stunning images and tell compelling visual stories through your lens.",
      category: "Book",
      image:
        "https://images.pexels.com/photos/12451890/pexels-photo-12451890.jpeg",
      link: "/blogs/1",
    },
    {
      title: "The Power of Visual Storytelling",
      description:
        "Discover how great photography can convey emotions, ideas, and narratives without words.",
      category: "Book",
      image:
        "https://images.pexels.com/photos/12451890/pexels-photo-12451890.jpeg",
      link: "/blogs/2",
    },
    {
      title: "Photography Tips for Beginners",
      description:
        "A beginner's guide to essential techniques, camera settings, and composition rules.",
      category: "Clothes",
      image:
        "https://images.pexels.com/photos/12451890/pexels-photo-12451890.jpeg",
      link: "/blogs/3",
    },
    {
      title: "Editing Like a Pro With Soft skills",
      description:
        "Enhance your photos with expert editing techniques and take your images to the next level.",
      category: "Food",
      image:
        "https://images.pexels.com/photos/12451890/pexels-photo-12451890.jpeg",
      link: "/blogs/4",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center sm:flex sm:items-end sm:space-x-16 sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
            Latest articles See What We are doing?
          </h2>
          <p className="mt-5 text-sm font-normal leading-6 text-gray-500">
            Create custom landing pages with Rareblocks that converts more
            visitors than any website.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-8 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0">
          {blogPosts.map((item, index) => (
            <Link key={index} href={item.link} className="group">
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
                <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-gray-900">
                        {item.category}
                      </p>
                      <span className="text-sm font-medium text-gray-900">
                        •
                      </span>
                      <p className="text-sm font-medium text-gray-900">
                        Author
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </div>
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
