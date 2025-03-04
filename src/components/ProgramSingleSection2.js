import React from "react";
import {
  FiHeadphones,
  FiTrendingUp,
  FiUserCheck,
  FiPackage,
} from "react-icons/fi";

const ProgramSingleSection2 = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-0 py-10 sm:py-16 ">
      <div className="text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl ">
          Make every step user-centric
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 ">
          Lorem ipsum dolor sit amet, consectetur adipis elit
        </p>
      </div>
      <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
        <div className="p-8 lg:p-14 border md:border-none rounded md:rounded-none">
          <FiHeadphones className="mx-auto text-5xl text-gray-900" />
          <h3 className="mt-12 text-xl font-bold text-gray-900 ">Support</h3>
          <p className="mt-5 text-base text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>
        <div className="border md:border-l md:border-gray-200 border-gray-200 md:border-t-0 md:border-r-0 md:border-b-0 rounded md:rounded-none p-8 lg:p-14">
          <FiTrendingUp className="mx-auto text-5xl text-gray-900" />
          <h3 className="mt-12 text-xl font-bold text-gray-900 ">Sales</h3>
          <p className="mt-5 text-base text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>

        <div className="border md:border-l md:border-gray-200 border-gray-200 md:border-t-0 md:border-r-0 md:border-b-0 rounded md:rounded-none p-8 lg:p-14">
          <FiUserCheck className="mx-auto text-5xl text-gray-900" />

          <h3 className="mt-12 text-xl font-bold text-gray-900 ">Onboarding</h3>
          <p className="mt-5 text-base text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>

        <div className="border md:border-t md:border-gray-200 border-gray-200 md:border-l-0 md:border-r-0 md:border-b-0 rounded md:rounded-none p-8 lg:p-14">
          <FiPackage className="mx-auto text-5xl text-gray-900" />

          <h3 className="mt-12 text-xl font-bold text-gray-900 ">Product</h3>
          <p className="mt-5 text-base text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>

        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
          <FiTrendingUp className="mx-auto text-5xl text-gray-900" />

          <h3 className="mt-12 text-xl font-bold text-gray-900 ">Quality</h3>
          <p className="mt-5 text-base text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>

        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
          <FiUserCheck className="mx-auto text-5xl text-gray-900" />

          <h3 className="mt-12 text-xl font-bold text-gray-900 ">Result</h3>
          <p className="mt-5 text-base text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramSingleSection2;
