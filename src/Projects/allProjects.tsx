import React from "react";

// Import all your bedroom images from the assets folder
import livingRoomImage1 from "../assets/livingRoom/frontImage.png";
import balconyImage1 from "../assets/balcony/b1.jpg";
import balconyImage2 from "../assets/balcony/b2.jpg";
import balconyImage3 from "../assets/balcony/b3.jpg";
import balconyImage4 from "../assets/balcony/b4.jpg";
import balconyImage5 from "../assets/balcony/b5.jpg";
import balconyImage6 from "../assets/balcony/b6.jpg";
import bedroomImage1 from "../assets/bedroom/b1.jpg";
import bedroomImage2 from "../assets/bedroom/b2.jpg";
import bedroomImage3 from "../assets/bedroom/b3.jpg";
import bedroomImage4 from "../assets/bedroom/b4.png";
import bedroomImage5 from "../assets/bedroom/b5.jpg";
import bedroomImage6 from "../assets/bedroom/b6.jpg";
import bedroomImage7 from "../assets/bedroom/b7.png";
import bedroomImage8 from "../assets/bedroom/b8.jpg";
import bedroomImage9 from "../assets/bedroom/b9.jpg";
import hallwaysImage1 from "../assets/hallways/h1.jpg";
import hallwaysImage3 from "../assets/hallways/h2.jpg";
import hallwaysImage2 from "../assets/hallways/h3.jpg";
import hallwaysImage4 from "../assets/hallways/h4.jpg";
import hallwaysImage5 from "../assets/hallways/h5.jpg";
import hallwaysImage6 from "../assets/hallways/h6.jpg";
import kidsRoomImage1 from "../assets/kidsRoom/k1.jpg";
import kidsRoomImage2 from "../assets/kidsRoom/k2.jpg";
import kidsRoomImage3 from "../assets/kidsRoom/k3.jpg";
import kidsRoomImage4 from "../assets/kidsRoom/k4.jpg";
import kidsRoomImage5 from "../assets/kidsRoom/k5.jpg";
import kidsRoomImage6 from "../assets/kidsRoom/k6.jpg";
import kidsRoomImage7 from "../assets/kidsRoom/k7.jpg";
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
import storageSpaceImage1 from "../assets/storageSpace/s1.jpg";
import storageSpaceImage2 from "../assets/storageSpace/s2.jpg";
import storageSpaceImage3 from "../assets/storageSpace/s3.jpg";
import storageSpaceImage4 from "../assets/storageSpace/s4.jpg";
import storageSpaceImage5 from "../assets/storageSpace/s5.jpg";
import storageSpaceImage6 from "../assets/storageSpace/s6.jpg";
import templeImage1 from "../assets/temple/t1.jpg";
import templeImage2 from "../assets/temple/t2.jpg";
import templeImage3 from "../assets/temple/t3.jpg";
import templeImage4 from "../assets/temple/t4.jpg";
import templeImage5 from "../assets/temple/t5.jpg";
import templeImage6 from "../assets/temple/t6.jpg";
import templeImage7 from "../assets/temple/t7.jpg";

// Add more imports if you have more images

// Array of imported images
const livingRoomImages = [
  livingRoomImage1,
  balconyImage1,
  balconyImage2,
  balconyImage3,
  balconyImage4,
  balconyImage5,
  balconyImage6,
  bedroomImage1,
  bedroomImage2,
  bedroomImage3,
  bedroomImage4,
  bedroomImage5,
  bedroomImage6,
  bedroomImage7,
  bedroomImage8,
  bedroomImage9,
  hallwaysImage1,
  hallwaysImage2,
  hallwaysImage3,
  hallwaysImage4,
  hallwaysImage5,
  hallwaysImage6,
  kidsRoomImage1,
  kidsRoomImage2,
  kidsRoomImage3,
  kidsRoomImage4,
  kidsRoomImage5,
  kidsRoomImage6,
  kidsRoomImage7,
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
  storageSpaceImage1,
  storageSpaceImage2,
  storageSpaceImage3,
  storageSpaceImage4,
  storageSpaceImage5,
  storageSpaceImage6,
  templeImage1,
  templeImage2,
  templeImage3,
  templeImage4,
  templeImage5,
  templeImage6,
  templeImage7,
  // Add more image variables here
];

const AllProjects: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-16 md:py-24 px-6 lg:px-12 font-sans">
      <div className="container mx-auto">
        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 text-center">
          Our <span className="text-lime-500">All Projects</span> Designs
        </h2>

        {/* Optional Description */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-16 max-w-3xl mx-auto text-center">
          Explore our curated collection of designs for kids room, blending
          comfort, style, and innovative solutions for restful retreats.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {livingRoomImages.map((imageSrc, index) => (
            <div
              key={index}
              className="relative w-full aspect-square overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={imageSrc}
                alt={`Living Room Design ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Optional overlay for title/details on hover, if desired */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-bold">Living Room Project {index + 1}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
