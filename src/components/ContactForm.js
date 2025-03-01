import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div className="max-w-4xl mx-auto overflow-hidden md:flex my-16 p-8 min-h-[600px]">
      {/* Left Section */}
      <div
        className="bg-black text-white p-10 md:w-1/2 flex flex-col justify-between shadow-md 
                      rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
      >
        <div>
          <h2 className="text-4xl font-bold">Volunteer, Donate, Grow.</h2>
          <p className="mt-4 text-gray-400">
            Ut ac mattis senectus ac suspendisse vitae vel nulla eleifend.
          </p>
          <div className="mt-6 space-y-4">
            <p className="flex items-center space-x-2">
              <span className="text-orange-500">📞</span>
              <span>9999999999</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-orange-500">📧</span>
              <span>empowernext@email.net</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-orange-500">⏰</span>
              <span>Mon-Fri: 8:00am - 6:00pm</span>
            </p>
          </div>
        </div>
        <div className="flex space-x-4 mt-6">
          <FaFacebookF className="text-white bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:bg-gray-700 transition" />
          <FaXTwitter className="text-white bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:bg-gray-700 transition" />
          <FaInstagram className="text-white bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:bg-gray-700 transition" />
        </div>
      </div>

      {/* Right Section */}
      <div
        className="p-10 md:w-1/2 flex flex-col shadow-lg 
                      rounded-b-xl md:rounded-r-xl md:rounded-bl-none"
      >
        <form className="space-y-5 flex flex-col flex-grow">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex-grow">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-3 border-b border-gray-300 rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
          </div>
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition duration-300 mt-auto">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
