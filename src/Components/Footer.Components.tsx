import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Signature */}
        <div className="text-center md:text-left">
          <p className="text-2xl font-semibold text-gray-200">
            Crafted with ❤️ by Suhrad Trabadiya
          </p>
          <p className="text-sm text-gray-400 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-8 justify-center md:justify-end">
          <Link
            href="https://github.com/SuhradTrambadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-all duration-300 ease-in-out transform hover:scale-125"
          >
            <FaGithub className="text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/suhrad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-all duration-300 ease-in-out transform hover:scale-125"
          >
            <FaLinkedin className="text-blue-700" />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-all duration-300 ease-in-out transform hover:scale-125"
          >
            <FaTwitter className="text-blue-400" />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-all duration-300 ease-in-out transform hover:scale-125"
          >
            <FaInstagram className="text-pink-500" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
