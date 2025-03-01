const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center text-white"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-7xl">
          {/* Hero Text */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-left">
            Unlock Advanced Resources And AI-Driven Opportunities To Transform
            Futures.
          </h1>
          <p className="mt-4 text-lg text-left">
            Libero mauris sed sed proin. Blandit aliquet ipsum faucibus dictum
            natoque arcu.
          </p>

          {/* Donation Stats */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-6 text-xl font-semibold">
            <div className="flex items-center gap-3">
              <span className="text-orange-500 text-3xl md:text-4xl font-bold">
                $1 284 528
              </span>
              <span className="text-white text-lg">Donation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-orange-500 text-3xl md:text-4xl font-bold">
                12 460
              </span>
              <span className="text-white text-lg">
                Women Placed In STEM Careers
              </span>
            </div>
          </div>

          {/* Sponsors */}
          <div className="flex flex-wrap md:flex-nowrap gap-6 mt-10">
            <span className="bg-gray-700 px-6 py-3 rounded-md text-center">
              🌟 Logo 1
            </span>
            <span className="bg-gray-700 px-6 py-3 rounded-md text-center">
              🌟 Logo 2
            </span>
            <span className="bg-gray-700 px-6 py-3 rounded-md text-center">
              🌟 Logo 3
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
