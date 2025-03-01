import Image from "next/image";

const AboutusSection2 = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1557862921-37829c790f19"
              alt="Dev Mukharji"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-black">
          <h2 className="text-4xl font-bold leading-tight mb-6">
            Every Child Deserves a Chance
          </h2>

          {/* Two-Column Text Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-gray-600">
            <p>
              We are dedicated to creating a world where every child has access
              to education, healthcare, and a bright future. We are dedicated to
              creating a world where every child has access to education,
              healthcare, and a bright future.
            </p>
            <p>
              Join us in making a difference by supporting our mission to bring
              hope and opportunities to underprivileged children.
            </p>
          </div>

          {/* Name and Position instead of Signature */}
          <div className="mt-6 italic text-lg text-gray-800">
            Dev Mukharji, CEO
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusSection2;
