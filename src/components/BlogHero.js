export default function BlogHero() {
  return (
    <section className="bg-[#FCEEC3] py-16 px-6 md:px-20 lg:px-32 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h4 className="text-lg font-semibold uppercase tracking-widest text-gray-900">
            Top News
          </h4>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 leading-snug">
            Our goal is to provide opportunities for Women in India and the
            World
          </h1>
          <p className="text-gray-700 mt-4 text-sm md:text-base">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere.
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600">
            Read more
          </button>
        </div>

        {/* Right Section - News List */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="space-y-6">
            {/* News Item */}
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src="https://images.unsplash.com/photo-1709290749293-c6152a187b14"
                alt="AI-Powered Mentorship Program"
                className="w-full sm:w-24 h-32 sm:h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  EmpowerNext Launches AI-Powered Mentorship Program
                </h3>
                <p className="text-sm text-gray-500">17th Nov 2024</p>
                <p className="text-sm text-gray-600 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim.
                </p>
              </div>
            </div>

            {/* News Item */}
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src="https://images.unsplash.com/photo-1709290749293-c6152a187b14"
                alt="Regional Forum Success"
                className="w-full sm:w-24 h-32 sm:h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  First Regional Forum in South India a Huge Success
                </h3>
                <p className="text-sm text-gray-500">17th Nov 2024</p>
                <p className="text-sm text-gray-600 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim.
                </p>
              </div>
            </div>

            {/* News Item */}
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src="https://images.unsplash.com/photo-1709290749293-c6152a187b14"
                alt="Digital Literacy Advocacy"
                className="w-full sm:w-24 h-32 sm:h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  EmpowerNext Advocates for Digital Literacy in East India
                </h3>
                <p className="text-sm text-gray-500">17th Nov 2024</p>
                <p className="text-sm text-gray-600 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
