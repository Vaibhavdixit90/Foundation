import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const BlogSingle = () => {
  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl sm:py-16 lg:py-20 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="mt-20 text-4xl font-bold text-gray-900 sm:text-5xl">
          Five pizza tips you need to learn now
        </h1>

        <div className="flex items-center justify-center mt-8 space-x-2">
          <p className="text-base font-medium text-gray-900">Food </p>
          <span className="text-base font-medium text-gray-500"> • </span>
          <p className="text-base font-medium text-gray-500">
            November 22, 2021
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 lg:mt-16 aspect-w-16 aspect-h-9 lg:aspect-h-6">
        <Image
          className="object-cover w-full h-full rounded-lg"
          src="https://images.pexels.com/photos/12451890/pexels-photo-12451890.jpeg"
          alt=""
          width={400}
          height={192}
        />
      </div>

      <div className="grid grid-cols-1 mt-8 sm:mt-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-16 gap-y-8">
        <div className="lg:col-span-2 lg:self-start lg:sticky lg:top-60 lg:order-last lg:flex lg:justify-end">
          <ul className="flex space-x-3 lg:space-x-0 lg:space-y-4 lg:flex-col lg:items-center">
            <li>
              <Link href="/">
                <FaFacebookF className="text-white bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:bg-gray-700" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaInstagram className="text-white bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:bg-gray-700" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaXTwitter className="text-white bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:bg-gray-700" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="prose lg:col-span-10 max-w-none prose-gray">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
            pellentesque ut pellentesque varius amet mauris. Tempor, risus,
            congue gravida nulla tincidunt nec diam. Tincidunt magnis eu, vitae
            dictumst commodo dolor in. Aenean dictumst risus posuere a at id
            fermentum nibh. Luctus nunc bibendum duis egestas scelerisque.
          </p>

          <Image
            className="object-cover w-full my-10 rounded-lg"
            src="https://images.pexels.com/photos/12451890/pexels-photo-12451890.jpeg"
            alt=""
            width={400}
            height={192}
          />

          <h2 className=" text-xl sm:text-2xl font-bold mb-5">
            How to start the process?
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
            pellentesque ut pellentesque varius amet mauris. Tempor, risus,
            congue gravida nulla tincidunt nec diam. Tincidunt magnis eu, vitae
            dictumst commodo dolor in. Aenean dictumst risus posuere a at id
            fermentum nibh. Luctus nunc bibendum duis egestas scelerisque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
