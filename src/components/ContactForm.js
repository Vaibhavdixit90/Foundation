"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Email validation function
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error("Invalid email format!");
      return;
    }

    setLoading(true); // Fix: Use setLoading instead of setIsSubmitting

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

      toast.success("Wo got your data! We will contact you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.message || "Error submitting form. Please try again.");
    } finally {
      setLoading(false); // Fix: Use setLoading instead of setIsSubmitting
    }
  };

  return (
    <div className="max-w-4xl mx-auto overflow-hidden md:flex my-16 p-8 min-h-[600px]">
      {/* Left Section */}
      <div className="bg-black text-white p-10 md:w-1/2 flex flex-col justify-between shadow-md rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
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
      <div className="p-10 md:w-1/2 flex flex-col shadow-lg rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 flex flex-col flex-grow"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none "
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none "
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border-b border-gray-300 rounded-lg focus:outline-none "
              />
            </div>
          </div>
          <div className="flex-grow">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border-b border-gray-300 rounded-lg h-28 focus:outline-none "
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition duration-300 mt-auto"
            disabled={loading}
          >
            {loading ? "Sending..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
