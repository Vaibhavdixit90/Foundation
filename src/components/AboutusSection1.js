import Image from "next/image";
import Link from "next/link";

const AboutusSection1 = () => {
  return (
    <div className="px-4 mx-auto lg:px-0 max-w-7xl">
      <div className="overflow-hidden bg-gray-100 rounded-3xl">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2 px-8 py-12 text-center xl:px-12 lg:text-left lg:order-1">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Meet the brain
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
              We are a passionate team dedicated to driving positive change in
              India. As an NGO, we strive to empower communities through
              education, innovation, and sustainable development. With a shared
              vision and relentless commitment, we work towards building a
              brighter, more inclusive future for all.
            </p>
          </div>

          <div className="relative overflow-hidden lg:order-1 group">
            <Link
              href="https://www.linkedin.com/in/mrdevmukherjee/"
              target="_blank"
            >
              <img
                className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
                src="/Dev.jpeg"
                alt=""
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
                <div className="scale-90 sm:scale-100">
                  <p className="text-base font-semibold text-white">
                    Dev Mukherjee
                  </p>
                  <p className="mt-1 text-sm font-normal text-gray-300">
                    Founder
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative overflow-hidden lg:order-2 group">
            <Link
              href="https://www.linkedin.com/in/vaibhav-dixit913/"
              target="_blank"
            >
              <img
                className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
                src="/Vaibhav.jpeg"
                alt=""
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
                <div className="scale-90 sm:scale-100">
                  <p className="text-base font-semibold text-white">
                    Vaibhav Dixit
                  </p>
                  <p className="mt-1 text-sm font-normal text-gray-300">
                    Co-founder
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusSection1;
