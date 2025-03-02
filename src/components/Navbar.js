"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="w-full fixed top-0 left-0 bg-black text-white py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="text-lg font-bold flex items-center space-x-2 cursor-pointer">
            <span>EMPOWERNEXT</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/programs" className="hover:text-gray-400">
              Programs
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-gray-400">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-gray-400">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:text-gray-400">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-gray-400">
              Blogs
            </Link>
          </li>
        </ul>

        {/* Donate Button */}
        <Link href="/donate" className="hidden md:block">
          <button className="px-10 py-1 h-10 w-[147px] bg-[#FC8D19] text-white text-sm font-semibold rounded-[16px] hover:bg-orange-600 transition duration-300">
            DONATE
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] bg-black text-white py-6 px-6 border border-white rounded-lg shadow-lg md:hidden z-50"
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/programs"
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/gallery"
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/about-us"
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/blogs"
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link href="/donate">
              <button className="w-auto px-6 py-2 bg-[#FD7E14] text-white text-sm font-semibold rounded-[16px] hover:bg-orange-600 transition duration-300">
                DONATE
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
