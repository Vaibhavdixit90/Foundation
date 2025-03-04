import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span>🚀</span> EMPOWERNEXT
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Tincidunt luctus porta amet lectus at ultricies nec sed non. Sed
              sit egestas enim consectetur donec faucibus...
            </p>
            <p className="mt-3 text-sm font-bold">
              Phone:{" "}
              <span className="font-normal text-gray-300">9999999999</span>
            </p>
            <p className="text-sm font-bold">
              Address:{" "}
              <span className="font-normal text-gray-300">
                123 Address st, Address city, India
              </span>
            </p>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <ul className="text-gray-400 text-sm mt-2 space-y-1">
              {[
                { name: "About Us", href: "/about-us" },
                { name: "Programs", href: "/programs" },
                { name: "Gallery", href: "/gallery" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact Us", href: "/contact-us" },
              ].map((item) => (
                <li key={item.name} className="text-left">
                  <Link href={item.href} className="hover:text-gray-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold">Useful Links</h3>
            <ul className="text-gray-400 text-sm mt-2 space-y-1">
              {[
                { name: "F.A.Q", href: "/faq" },
                { name: "News", href: "/news" },
                { name: "Reports", href: "/reports" },
                { name: "Terms of Use", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy-policy" },
              ].map((link) => (
                <li key={link.name} className="text-left">
                  <Link href={link.href} className="hover:text-gray-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-5 mt-10">
          <Link href="https://supramentalawakening.com/" target="_blank">
            <FaFacebookF className="text-white bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:bg-gray-700" />
          </Link>
          <Link href="https://supramentalawakening.com/" target="_blank">
            <FaXTwitter className="text-white bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:bg-gray-700" />
          </Link>
          <Link href="https://supramentalawakening.com/" target="_blank">
            <FaInstagram className="text-white bg-gray-800 p-2 rounded-full text-3xl cursor-pointer hover:bg-gray-700" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
