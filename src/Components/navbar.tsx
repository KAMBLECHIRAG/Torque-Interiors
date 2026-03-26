import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing FontAwesome icons for menu and close

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-12 py-5 bg-stone-50 font-sans relative">
      {/* Logo Section */}
      <Link to="/" className="flex items-center cursor-pointer no-underline">
        <div className="flex items-center justify-center w-10 h-10 mr-2 bg-lime-500">
          <span className="text-white text-xl font-bold">&#923;</span>
        </div>
        <span className="text-2xl font-bold text-gray-800">TORQUE</span>
      </Link>

      {/* Menu Icon for Small Screens */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 text-3xl focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}{" "}
          {/* Using FaTimes for close, FaBars for menu */}
        </button>
      </div>

      {/* Navigation Links and Button (Hidden on small screens by default) */}
      <div className="hidden md:flex md:items-center">
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
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-stone-50 shadow-lg py-4 z-20 flex flex-col items-center">
          <ul className="flex flex-col list-none p-0 m-0 w-full text-center">
            <li className="py-2 border-b border-gray-200">
              <Link
                to="/portfolioHeader"
                className="text-gray-800 text-lg no-underline hover:text-lime-600 transition-colors block"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li className="py-2 border-b border-gray-200">
              <Link
                to="/services"
                className="text-gray-800 text-lg no-underline hover:text-lime-600 transition-colors block"
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li className="py-2 border-b border-gray-200">
              <Link
                to="/aboutUs"
                className="text-gray-800 text-lg no-underline hover:text-lime-600 transition-colors block"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/contactUsPage"
                className="text-gray-800 text-lg no-underline hover:text-lime-600 transition-colors block"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            className="bg-lime-500 text-white px-5 py-2 rounded-md text-base font-bold uppercase cursor-pointer hover:bg-lime-600 transition-colors mt-4 w-fit"
            onClick={toggleMenu}
          >
            Consultation
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
