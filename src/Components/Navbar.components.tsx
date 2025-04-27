"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaFileAlt,
  FaClipboard,
  FaTools,
  FaProjectDiagram,
  FaBlog,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#Home", icon: <FaHome /> },
  { name: "Resume", href: "#Resume", icon: <FaFileAlt /> },
  { name: "Specialty", href: "#Specialty", icon: <FaClipboard /> },
  { name: "Skills", href: "#Skills", icon: <FaTools /> },
  { name: "Projects", href: "#Projects", icon: <FaProjectDiagram /> },
  { name: "Blog", href: "#Blog", icon: <FaBlog /> },
  { name: "Contact", href: "#Contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-fit mx-auto fixed left-1/2 transform -translate-x-1/2 top-0 z-50 py-4 hidden lg:flex ">
        <div className="mx-auto px-6 shadow-2xl bg-gray-700 p-4 rounded-full ">
          <div className="flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center text-white text-lg font-medium hover:text-orange-500 transition"
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.name}
                </Link>
                {index < navLinks.length - 1 && (
                  <div className="h-6 border-l border-gray-300 mx-4"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="w-full bg-transparent fixed top-0 left-0 z-50 py-4 lg:hidden">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Hamburger Menu for Mobile */}
          <button
            onClick={toggleSidebar}
            className="text-white bg-gray-400 shadow-2xl p-3 rounded-full text-2xl"
          >
            <FaBars />
          </button>
        </div>

        {/* Backdrop for mobile view */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Sidebar for Mobile */}
        <div
          className={`fixed top-0 left-0 w-64 bg-white h-full shadow-lg p-6 transition-transform duration-300 transform z-[100] ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-2xl font-semibold">Menu</div>
            <button onClick={toggleSidebar} className="text-black text-2xl">
              <FaTimes />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center text-black text-lg font-medium hover:text-orange-500 transition"
                onClick={toggleSidebar} // Close sidebar on link click
              >
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
