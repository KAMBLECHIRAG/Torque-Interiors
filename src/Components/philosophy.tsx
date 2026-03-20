// src/components/PhilosophySection.tsx
import React from "react";
import philosophyRoomImage from "../assets/bed.png"; // Adjust path as needed

const PhilosophySection: React.FC = () => {
  return (
    <section className="bg-stone-50 py-20 lg:py-28 font-sans">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left Section: Text Content */}
        <div className="lg:pr-10">
          <p className="text-lime-600 text-sm font-semibold uppercase tracking-wider mb-4">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-8">
            Spaces that breathe,
            <br />
            designs that endure.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10">
            At Torque, we believe that interior design is more than just
            aesthetics; it's about the harmony between space, light, and the
            people who inhabit them. Our mission is to transform environments
            into bespoke sanctuaries of luxury that reflect your unique
            narrative.
          </p>

          {/* Stats Section */}
          <div className="flex space-x-12">
            <div>
              <p className="text-2xl font-bold text-lime-500 mb-1">150+</p>
              <p className="text-sm uppercase text-gray-500 tracking-wide">
                Projects Completed
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-lime-500 mb-1">12</p>
              <p className="text-sm uppercase text-gray-500 tracking-wide">
                Design Awards
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Image with Quote Overlay */}
        <div className="relative justify-self-center lg:justify-self-end">
          {/* Main Image */}
          <div
            className="w-150 h-150 bg-gray-300 relative overflow-hidden" // Increased size slightly to match
            style={{
              backgroundImage: `url(${philosophyRoomImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              outline: "2px solid #84cc16", // lime-500 equivalent for the outline
              outlineOffset: "16px", // Creates the border effect
            }}
          ></div>

          {/* Quote Overlay */}
          <div
            className="absolute -bottom-16 -left-16 w-60 p-6 bg-lime-200 bg-opacity-70 backdrop-blur-sm rounded-md shadow-lg"
            style={{
              // Using style prop for specific overlay positioning
              transform: "translateY(-20%)", // Adjust vertical position for better visual
            }}
          >
            <p className="text-4xl font-extrabold text-lime-700 mb-2">99</p>
            <p className="text-sm italic text-gray-800">
              "Design is not just what it looks like, but how it works."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
