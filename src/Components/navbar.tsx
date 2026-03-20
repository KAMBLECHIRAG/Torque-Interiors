// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-5 bg-stone-50 font-sans">
      {/* Logo Section */}
      <Link to="/" className="flex items-center cursor-pointer no-underline">
        <div className="flex items-center justify-center w-10 h-10 mr-2 bg-lime-500">
          {/* This is a placeholder for the icon. You'd typically use an SVG icon here. */}
          <span className="text-white text-xl font-bold">&#923;</span>
        </div>
        <span className="text-2xl font-bold text-gray-800">TORQUE</span>
      </Link>

      {/* Navigation Links */}
      <ul className="flex list-none p-0 m-0">
        <li className="mr-7">
          <Link
            to="/portfolioHeader"
            className="text-gray-600 text-base no-underline hover:text-lime-600 transition-colors"
          >
            Projects
          </Link>
        </li>
        
        <li className="mr-7">
          <Link
            to="/services"
            className="text-gray-600 text-base no-underline hover:text-lime-600 transition-colors"
          >
            Services
          </Link>
        </li>
        <li className="mr-7">
          <Link
            to="/aboutUs"
            className="text-gray-600 text-base no-underline hover:text-lime-600 transition-colors"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contactUsPage"
            className="text-gray-600 text-base no-underline hover:text-lime-600 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Consultation Button */}
      <button className="bg-lime-500 text-white px-5 py-2 rounded-md text-base font-bold uppercase cursor-pointer hover:bg-lime-600 transition-colors">
        Consultation
      </button>
    </nav>
  );
};

export default Navbar;
