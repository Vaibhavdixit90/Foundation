import Image from "next/image";
import React from "react";

const HomeSection4 = () => {
  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24 gap-y-12">
        <div className="">
          <img
            className="w-full"
            src="https://landingfoliocom.imgix.net/store/collection/saasui/images/features/11/feature-11.png"
            alt=""
          />
        </div>
        <div className="max-w-7xl lg:max-w-none">
          <p className="text-base font-semibold text-gray-500">
            Make them happy
          </p>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900 lg:mt-8 sm:text-4xl lg:text-5xl">
            Grover increased their sales revenue by 29% using Clarity.
          </h2>
          <div className="mt-4 lg:mt-6">
            <p className="text-base font-normal leading-7 text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum, facilisi odio
              pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ornare non sed est cursus. Vel hac
              convallis ipsum, facilisi odio pellentesque bibendum viverra
              tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio
              pellentesque bibendum viverra tempus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;
