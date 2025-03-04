import React from "react";

const ProgramSingleSection1 = () => {
  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl sm:py-16 lg:py-20 xl:py-24 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Our Program In clothing
        </h2>
        <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
          The blocks & components you need.The blocks & components you need.The
          blocks & components you need.The blocks & components you need.The
          blocks & components you need.The blocks & components you need.The
          blocks & components you need.The blocks & components you need.The
          blocks & components you need.The blocks & components you need.The
          blocks & components you need.The blocks & components you need.The
          blocks & components you need.The blocks & components you need.The
          blocks & components you need.The blocks & components you need.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-auto mt-12 lg:grid-cols-3 sm:mt-16 sm:gap-6 lg:gap-8 lg:max-w-none">
        <div className="bg-gray-100 rounded-2xl">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="px-4 pt-6 text-xl font-semibold text-gray-900">
              Take authentic feedbacks from customers of your app.{" "}
              <span className="bg-orange-500">Build a quick list.</span>
            </h3>
            <img
              className="object-cover mt-12 rounded-xl"
              src="https://landingfoliocom.imgix.net/store/collection/saasui/images/features/6/image-1.png"
              alt=""
            />
          </div>
        </div>

        <div className="bg-gray-100 rounded-2xl">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="px-4 pt-6 text-xl font-semibold text-gray-900">
              <span className="bg-orange-500">Make quick fixes</span> based on
              the feedbacks you've received. With a happy smile.
            </h3>
            <img
              className="object-cover mt-12 rounded-xl"
              src="https://landingfoliocom.imgix.net/store/collection/saasui/images/features/6/image-2.png"
              alt=""
            />
          </div>
        </div>

        <div className="bg-gray-100 rounded-2xl">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="px-4 pt-6 text-xl font-semibold text-gray-900">
              Enjoy more than 10x revenue with{" "}
              <span className="bg-orange-500">real-time conversions.</span> Grow
              your business.
            </h3>
            <img
              className="object-cover mt-12 rounded-xl"
              src="https://landingfoliocom.imgix.net/store/collection/saasui/images/features/6/image-3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSingleSection1;
