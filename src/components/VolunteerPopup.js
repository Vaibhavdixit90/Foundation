"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const VolunteerPopup = ({ isOpen = false, setIsOpen = () => {} }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setIsEmailValid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setIsEmailValid(false);
      toast.error("Invalid email format!");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://ehubzone.com/wp-json/wp/v2/volunteer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2VodWJ6b25lLmNvbSIsImlhdCI6MTc0MDg2NDMzOSwibmJmIjoxNzQwODY0MzM5LCJleHAiOjE3NDE0NjkxMzksImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.jA6G0D0WrSJtd9BvwT56yPpNJVJjKN4oyFjHDEL6bxc`,
          },
          body: JSON.stringify({
            title: `${formData.firstName} ${formData.lastName}`,
            content: formData.message,
            status: "publish",
            acf: {
              first_name: formData.firstName,
              last_name: formData.lastName,
              email: formData.email,
              mobile_number: formData.phone,
              message: formData.message,
            },
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit form");
      }

      toast.success("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setIsOpen(false);
      }, 5000);
    } catch (error) {
      toast.error(error.message || "Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

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

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-sm text-gray-600">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:outline-none p-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-gray-600">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:outline-none p-2"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border-b border-gray-400 focus:outline-none p-2 ${
                !isEmailValid ? "border-red-500" : ""
              }`}
              required
            />
            {!isEmailValid && (
              <p className="text-red-500 text-xs mt-1">Invalid email format</p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-600">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:outline-none p-2"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-400 focus:outline-none p-2 h-24"
              placeholder="Type your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerPopup;
