import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const ContactUsHero = () => {
  return (
    <section className="bg-[#FCEEC3] py-16 px-6 md:px-20 lg:px-32 mt-14 md:mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h4 className="uppercase font-semibold tracking-wide mb-4 inline-block">
            Contact Us
          </h4>
          <h2 className="text-4xl font-bold text-black mb-4">
            We'd love to hear from you
          </h2>
          <p className="text-gray-700 max-w-md mx-auto md:mx-0">
            Have any question in mind or want to enquire? Please feel free to
            contact us through the form or the following details.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-10">
          <div className="text-center md:text-left">
            <h5 className="font-bold text-lg">Let's talk!</h5>
            <p className="text-gray-800">9999999999</p>
            <p className="text-gray-800">empowernext@email.com</p>
          </div>

          <div className="text-center md:text-left">
            <h5 className="font-bold text-lg">Headoffice</h5>
            <p className="text-gray-800">123 Address St,</p>
            <p className="text-gray-800">Address City, India</p>
          </div>

          <div className="flex space-x-5">
            <FaFacebookF className="text-white bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:bg-gray-700" />
            <FaXTwitter className="text-white bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:bg-gray-700" />
            <FaInstagram className="text-white bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:bg-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHero;
