import React from "react";
import heroBackgroundImage from "../assets/frontImage.png";

const HeroSection: React.FC = () => {
  return (
    <>
      <section
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white p-6"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
        }}
      >
        {/* Overlay to darken the background image */}
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* "ESTABLISHED 2012" badge */}
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider uppercase bg-lime-600 rounded-full">
            Established 2012
          </span>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
            Elevated Living
            <br />
            Through <span className="text-lime-500">Precision</span>
            <br />
            Design
          </h1>

          {/* Subtitle/Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 mx-auto max-w-2xl">
            Torque creates bespoke high-end interiors that seamlessly blend
            architectural luxury with functional artistry.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="flex cursor-pointer items-center justify-center px-8 py-4 bg-lime-500 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-lime-600 transition-colors duration-300">
              View Portfolio
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button className="px-8 py-4 border border-green-300 text-gray-200 text-lg font-semibold rounded-md shadow-lg hover:bg-gray-600 cursor-pointer transition-colors duration-300">
              Request Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
