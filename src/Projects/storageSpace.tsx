import React from "react";

// Import all your bedroom images from the assets folder
import storageSpaceImage1 from "../assets/storageSpace/s1.jpg";
import storageSpaceImage2 from "../assets/storageSpace/s2.jpg";
import storageSpaceImage3 from "../assets/storageSpace/s3.jpg";
import storageSpaceImage4 from "../assets/storageSpace/s4.jpg";
import storageSpaceImage5 from "../assets/storageSpace/s5.jpg";
import storageSpaceImage6 from "../assets/storageSpace/s6.jpg";

// Add more imports if you have more images

// Array of imported images
const bedroomImages = [
  storageSpaceImage1,
  storageSpaceImage2,
  storageSpaceImage3,
  storageSpaceImage4,
  storageSpaceImage5,
  storageSpaceImage6,

  // Add more image variables here
];

const StorageSpace: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-16 md:py-24 px-6 lg:px-12 font-sans">
      <div className="container mx-auto">
        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 text-center">
          Our <span className="text-lime-500">Storage Space</span> Designs
        </h2>

        {/* Optional Description */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-16 max-w-3xl mx-auto text-center">
          Explore our curated collection of cupboard designs, blending
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

export default StorageSpace;
