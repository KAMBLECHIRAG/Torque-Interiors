import React from "react";

// Import all your bedroom images from the assets folder
import kidsRoomImage1 from "../assets/kidsRoom/k1.jpg";
import kidsRoomImage2 from "../assets/kidsRoom/k2.jpg";
import kidsRoomImage3 from "../assets/kidsRoom/k3.jpg";
import kidsRoomImage4 from "../assets/kidsRoom/k4.jpg";
import kidsRoomImage5 from "../assets/kidsRoom/k5.jpg";
import kidsRoomImage6 from "../assets/kidsRoom/k6.jpg";
import kidsRoomImage7 from "../assets/kidsRoom/k7.jpg";
// Add more imports if you have more images

// Array of imported images
const kidsRoomImages = [
  kidsRoomImage1,
  kidsRoomImage2,
  kidsRoomImage3,
  kidsRoomImage4,
  kidsRoomImage5,
  kidsRoomImage6,
  kidsRoomImage7,
  // Add more image variables here
];

const KidsRoom: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-16 md:py-24 px-6 lg:px-12 font-sans">
      <div className="container mx-auto">
        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 text-center">
          Our <span className="text-lime-500">Kids Room</span> Designs
        </h2>

        {/* Optional Description */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-16 max-w-3xl mx-auto text-center">
          Explore our curated collection of designs for kids room, blending
          comfort, style, and innovative solutions for restful retreats.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {kidsRoomImages.map((imageSrc, index) => (
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

export default KidsRoom;
