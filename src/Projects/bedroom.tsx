import React from "react";

// Import all your bedroom images from the assets folder
import bedroomImage1 from "../assets/bedroom/b1.jpg";
import bedroomImage2 from "../assets/bedroom/b2.jpg";
import bedroomImage3 from "../assets/bedroom/b3.jpg";
import bedroomImage4 from "../assets/bedroom/b4.png";
import bedroomImage5 from "../assets/bedroom/b5.jpg";
import bedroomImage6 from "../assets/bedroom/b6.jpg";
import bedroomImage7 from "../assets/bedroom/b7.png";
import bedroomImage8 from "../assets/bedroom/b8.jpg";
import bedroomImage9 from "../assets/bedroom/b9.jpg";
// Add more imports if you have more images

// Array of imported images
const bedroomImages = [
  bedroomImage1,
  bedroomImage2,
  bedroomImage3,
  bedroomImage4,
  bedroomImage5,
  bedroomImage6,
  bedroomImage7,
  bedroomImage8,
  bedroomImage9,
  // Add more image variables here
];

const BedroomProjectsPage: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-16 md:py-24 px-6 lg:px-12 font-sans">
      <div className="container mx-auto">
        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 text-center">
          Our <span className="text-lime-500">Bedroom</span> Designs
        </h2>

        {/* Optional Description */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-16 max-w-3xl mx-auto text-center">
          Explore our curated collection of bespoke bedroom designs, blending
          comfort, style, and innovative solutions for restful retreats.
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

export default BedroomProjectsPage;
