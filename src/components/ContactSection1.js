import React from "react";

const ContactSection1 = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold sm:text-3xl">Make them Happy</h2>
          <p className="text-lg my-5">
            Your small Donation will provide them A beeter life
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg group cursor-pointer">
            <div className="overflow-hidden aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                src="https://images.unsplash.com/photo-1560579183-ae8b8f1bef8c"
                alt=""
              />
            </div>
            <div className="px-5 py-5">
              <h1 className="text-base font-bold text-gray-900">
                Winter Boys Jacket
              </h1>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg group cursor-pointer">
            <div className="overflow-hidden aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                src="https://images.unsplash.com/photo-1560579183-ae8b8f1bef8c"
                alt=""
              />
            </div>
            <div className="px-5 py-5">
              <h1 className="text-base font-bold text-gray-900">
                Winter Boys Jacket
              </h1>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg group cursor-pointer">
            <div className="overflow-hidden aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                src="https://images.unsplash.com/photo-1560579183-ae8b8f1bef8c"
                alt=""
              />
            </div>
            <div className="px-5 py-5">
              <h1 className="text-base font-bold text-gray-900">
                Winter Boys Jacket
              </h1>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg group cursor-pointer">
            <div className="overflow-hidden aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                src="https://images.unsplash.com/photo-1560579183-ae8b8f1bef8c"
                alt=""
              />
            </div>
            <div className="px-5 py-5">
              <h1 className="text-base font-bold text-gray-900">
                Winter Boys Jacket
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection1;
