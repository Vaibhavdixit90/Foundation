"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import VolunteerPopup from "./VolunteerPopup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cta() {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="px-2 md:px-0">
        <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-7xl mx-auto my-10">
          {/* Background Image */}
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <Image
              src="/CtaMain.jpg"
              alt="Placeholder"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-white text-2xl md:text-4xl font-bold">
              You can contribute to creating opportunities for <br />
              future leaders and innovators
            </h2>
            <div className="mt-6 flex gap-4">
              <button
                className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600"
                onClick={() => setIsPopupOpen(true)}
              >
                Join as a volunteer
              </button>
              <button
                onClick={() => router.push("/donate")}
                className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
        <VolunteerPopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        theme="light"
      />
    </>
  );
}
