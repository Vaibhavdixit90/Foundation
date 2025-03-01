"use client";
import React, { useState } from "react";

const Donationform = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleSelectAmount = (amount) => {
    setSelectedAmount(amount);
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center">
      <div className="w-full  shadow-md overflow-hidden rounded-md grid lg:grid-cols-2">
        <div
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/7290279/pexels-photo-7290279.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="lg:flex hidden flex-col gap-6 p-8 min-h-screen justify-center items-center text-center"
        >
          <h1 className="text-2xl text-white font-bold">
            Transform Lives Today
          </h1>
          <p className="text-white w-[80%]">
            Your contribution makes a real difference in creating positive
            change for those in need.
          </p>
          <div className="w-full grid grid-cols-2 justify-center gap-4">
            <span className="py-6 w-[90%] text-center rounded-md flex text-white font-bold text-xl flex-col hover:bg-black/70 bg-black">
              5,000+
              <span className="font-normal text-sm">Lives Changed</span>
            </span>
            <span className="py-6 w-[90%] text-center rounded-md flex text-white font-bold text-xl flex-col hover:bg-black/70 bg-black">
              95%
              <span className="font-normal text-sm">Success Rate</span>
            </span>
          </div>
          <div className="hover:bg-black/70 bg-black flex flex-col gap-4 p-4 w-[80%] rounded-md">
            <p className="text-white">
              "The support we received helped transform our entire community.
              We're forever grateful."
            </p>
          </div>
        </div>

        <form className="flex flex-col p-8 space-y-4 h-full">
          <h1 className="text-3xl font-bold text-center">Make Your Donation</h1>
          <p className="text-sm text-center">
            Every donation, no matter the size, helps us create lasting change.
          </p>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="p-3 text-sm shadow-sm rounded-md border text-[#6B7280] focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-bold">
              Email Id
            </label>
            <input
              type="email"
              required
              id="email"
              className="p-3 text-sm shadow-sm rounded-md border text-[#6B7280] focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="number" className="text-sm font-bold">
              Phone Number
            </label>
            <input
              type="text"
              id="number"
              pattern="[0-9]*"
              inputMode="numeric"
              className="p-3 text-sm shadow-sm rounded-md border text-[#6B7280] focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-bold">Select Amount</h3>
            <div className="grid grid-cols-2 gap-3">
              {[10, 20, 50, 100].map((amount) => (
                <span
                  key={amount}
                  className={`p-3 text-sm shadow-sm rounded-md text-center border cursor-pointer
            ${
              selectedAmount === amount
                ? "border-orange-500 border-2 bg-[#fde8d4]"
                : "border-gray-300"
            }`}
                  onClick={() => handleSelectAmount(amount)}
                >
                  ₹ {amount}
                </span>
              ))}
            </div>
            <input
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="Enter custom amount"
              className="p-3 text-sm shadow-sm rounded-md border text-[#6B7280] focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-sm font-bold">
              Message (Optional)
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Share your thoughts..."
              className="p-3 text-sm resize-none w-full h-[120px] shadow-sm rounded-md border text-[#6B7280] focus:ring-2 focus:ring-orange-500 focus:outline-none"
            ></textarea>
          </div>
          <div className="mt-auto">
            <button
              type="submit"
              className="w-full bg-[#FD7F11] p-3 rounded-md text-sm text-white"
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donationform;
