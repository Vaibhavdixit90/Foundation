import Image from "next/image";

const AboutusSection2 = () => {
  return (
    <section className=" py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">About our Organization</h2>

          <div className="space-y-6">
            {/* Mission */}
            <div className="flex items-start gap-4">
              <div className="text-orange-500 text-3xl">
                🧡 {/* Replace with an actual icon if needed */}
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Our Mission</h3>
                <p>
                  Amet id in tristique bibendum justo netus augue id. Nunc
                  tristique quis leo dui gravida volutpat vitae quam quam.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex items-start gap-4">
              <div className="text-orange-500 text-3xl">
                🏆 {/* Replace with an actual icon if needed */}
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Our Vision</h3>
                <p>
                  Ultrices urna nec massa commodo id sit diam amet et. Libero
                  dictum ut purus ut vel sit egestas.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="flex items-start gap-4">
              <div className="text-orange-500 text-3xl">
                🎯 {/* Replace with an actual icon if needed */}
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Our Values</h3>
                <p>
                  Ut ac mattis senectus ac suspendisse vitae vel nulla eleifend.
                  Est eros facilisi aenean nisl a. Vitae et fusce purus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="w-full md:w-1/2 flex gap-6">
          <div className="w-1/2 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1658135549037-1a526f0dad50"
              alt="Man with children"
              width={400}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-1/2 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/28939325/pexels-photo-28939325/free-photo-of-street-portrait-of-a-child-in-ludhiana-market.jpeg"
              alt="Girl with veil"
              width={400}
              height={600}
              className="w-full h-auto object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusSection2;
