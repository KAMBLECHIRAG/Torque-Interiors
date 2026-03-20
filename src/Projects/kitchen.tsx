import React from "react";

// Import all your bedroom images from the assets folder
import kitchenImage1 from "../assets/kitchen/k1.jpg";
import kitchenImage2 from "../assets/kitchen/k2.jpg";
import kitchenImage3 from "../assets/kitchen/k3.jpg";
import kitchenImage4 from "../assets/kitchen/k4.png";
import kitchenImage5 from "../assets/kitchen/k5.png";
import kitchenImage6 from "../assets/kitchen/k6.jpg";
import kitchenImage7 from "../assets/kitchen/k7.jpg";
import kitchenImage8 from "../assets/kitchen/k8.jpg";
import kitchenImage9 from "../assets/kitchen/k9.png";
import kitchenImage10 from "../assets/kitchen/k10.jpg";
// Add more imports if you have more images

// Array of imported images
const bedroomImages = [
  kitchenImage1,
  kitchenImage2,
  kitchenImage3,
  kitchenImage4,
  kitchenImage5,
  kitchenImage6,
  kitchenImage7,
  kitchenImage8,
  kitchenImage9,
  kitchenImage10,
  // Add more image variables here
];

const Kitchen: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-16 md:py-24 px-6 lg:px-12 font-sans">
      <div className="container mx-auto">
        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 text-center">
          Our <span className="text-lime-500">Modular Kitchen</span> Designs
        </h2>

        {/* Optional Description */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-16 max-w-3xl mx-auto text-center">
          Explore our curated collection of bespoke kitchen designs, blending
          comfort, style, and innovative solutions.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {bedroomImages.map((imageSrc, index) => (
            <div
              key={index}
              className="relative w-full aspect-square overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={imageSrc}
                alt={`Bedroom Design ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Optional overlay for title/details on hover, if desired */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-bold">Bedroom Project {index + 1}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
