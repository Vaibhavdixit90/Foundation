"use client";

const VolunteerPopup = ({ isOpen = false, setIsOpen = () => {} }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div
      id="popup-overlay"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={(e) => e.target.id === "popup-overlay" && setIsOpen(false)}
    >
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-[90%] md:w-[500px] relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-2 text-gray-900">
          Join as a volunteer
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen varius
          enim in eros elementum tristique.
        </p>

        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-sm text-gray-600">First Name</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none p-2"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-gray-600">Last Name</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none p-2"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Email ID</label>
            <input
              type="email"
              className="w-full border-b border-gray-400 focus:outline-none p-2"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Message</label>
            <textarea
              className="w-full border border-gray-400 focus:outline-none p-2 h-24"
              placeholder="Type your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerPopup;
