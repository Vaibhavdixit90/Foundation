const AboutusHero = () => {
  return (
    <section className="py-12 mt-20 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-sm uppercase tracking-widest">Know About Us</h4>
            <h2 className="text-5xl font-bold mt-2 leading-tight">
              We are a non-governmental organization
            </h2>
          </div>
          <div>
            <p className="mt-4 text-lg font-semibold">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>
            <p className="mt-2 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full relative max-w-7xl mx-auto mt-6 z-10 rounded-lg overflow-hidden shadow-lg h-96 ">
        <video
          id="about-video"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className="w-full h-full object-cover"
          controls
          loop
          autoPlay
          muted
        />
      </div>

      {/* Mission and Vision Section */}
      <div className="bg-orange-500 pt-32 pb-20 px-6 -mt-48 relative z-0">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-20 text-white">
          <div className="mt-20">
            <h4 className="text-sm uppercase tracking-widest">Our Mission</h4>
            <h3 className="text-2xl font-bold mt-2">
              We make sure to provide inclusive care for children with special
              needs
            </h3>
            <p className="mt-4 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="mt-20">
            <h4 className="text-sm uppercase tracking-widest">Our Vision</h4>
            <h3 className="text-2xl font-bold mt-2">
              Provide more inclusive care to children around the world
            </h3>
            <p className="mt-4 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusHero;
