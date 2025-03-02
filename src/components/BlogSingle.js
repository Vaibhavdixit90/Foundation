"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const BlogSingle = () => {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [category, setCategory] = useState("Uncategorized");
  const [acfImage, setAcfImage] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://ehubzone.com/wp-json/wp/v2/posts?slug=${slug}`
        );
        const data = await response.json();

        if (data.length > 0) {
          const postData = data[0];
          setPost(postData);

          // Fetch featured image
          if (postData.featured_media) {
            const mediaResponse = await fetch(
              `https://ehubzone.com/wp-json/wp/v2/media/${postData.featured_media}`
            );
            const mediaData = await mediaResponse.json();
            setFeaturedImage(mediaData.source_url);
          }

          // Fetch category name
          if (postData.categories.length > 0) {
            const categoryResponse = await fetch(
              `https://ehubzone.com/wp-json/wp/v2/categories/${postData.categories[0]}`
            );
            const categoryData = await categoryResponse.json();
            setCategory(categoryData.name);
          }

          // Set ACF Image
          if (postData.acf?.post_image) {
            setAcfImage(postData.acf.post_image);
          }
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (!post) {
    return <p className="text-center py-10">Post not found</p>;
  }

  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl sm:py-16 lg:py-20 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="mt-20 text-4xl font-bold text-gray-900 sm:text-5xl">
          {post.title.rendered}
        </h1>

        <div className="flex items-center justify-center mt-8 space-x-2">
          <p className="text-base font-medium text-gray-900">{category}</p>
          <span className="text-base font-medium text-gray-500"> • </span>
          <p className="text-base font-medium text-gray-500">
            {new Date(post.date).toDateString()}
          </p>
        </div>
      </div>

      {featuredImage && (
        <div className="mt-8 sm:mt-12 lg:mt-16 aspect-w-16 aspect-h-9 lg:aspect-h-6">
          <Image
            className="object-cover w-full h-full rounded-lg"
            src={featuredImage}
            alt={post.title.rendered}
            width={800}
            height={400}
          />
        </div>
      )}
      <p
        className="mt-10 text-lg text-gray-600 max-w-7xl mx-auto"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />
      <div className="grid grid-cols-1 mt-5 sm:mt-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-16 gap-y-8">
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
        <div className="lg:col-span-10">
          {acfImage && (
            <div className="mt-8 text-center">
              <Image
                className="object-cover w-full max-w-5xl mx-auto rounded-lg"
                src={acfImage}
                alt="ACF Post Image"
                width={800}
                height={200}
              />
            </div>
          )}
          <div className="prose mt-10 max-w-none prose-gray">
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
