import React, { useState } from "react";

// Import all your category-specific grid components

import BedroomProjectsPage from "./bedroom";
import Kitchen from "./kitchen";
import StorageSpace from "./storageSpace";
import Hallways from "./hallways";
import KidsRoom from "./kidsRoom";
import Temple from "./temple";
import Balcony from "./balcony";
import LivingRoom from "./livingRoom";
import AllProjects from "./allProjects";

// Define the type for the filter categories
type FilterCategory =
  | "All Projects"
  | "Living Room"
  | "Bedroom"
  | "Modular Kitchens"
  | "Storage Solutions"
  | "Hallways"
  //   | "Home Office"
  | "Kids Room"
  | "Temple"
  | "Balcony";

const PortfolioSection: React.FC = () => {
  // State to manage the active filter button
  const [activeFilter, setActiveFilter] =
    useState<FilterCategory>("All Projects");

  const filterButtons: FilterCategory[] = [
    "All Projects",
    "Living Room",
    "Bedroom",
    "Modular Kitchens",
    "Storage Solutions",
    "Hallways",
    // "Home Office",
    "Kids Room",
    "Temple",
    "Balcony",
  ];

  // Function to render the correct component based on activeFilter
  const renderProjectGrid = () => {
    switch (activeFilter) {
      case "All Projects":
        return <AllProjects />;
      case "Living Room":
        return <LivingRoom />;
      case "Bedroom":
        return <BedroomProjectsPage />;
      case "Modular Kitchens":
        return <Kitchen />;
      case "Storage Solutions":
        return <StorageSpace />;
      case "Hallways":
        return <Hallways />;
      //   case "Home Office":
      //   return <HomeOfficeGrid />;
      case "Kids Room":
        return <KidsRoom />;
      case "Temple":
        return <Temple />;
      case "Balcony":
        return <Balcony />;

      default:
      // return <AllProjectsGrid />; // This component should show a mix of projects
    }
  };

  return (
    <section className="bg-stone-50 py-16 md:py-24 px-6 lg:px-12 font-sans">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Our <span className="text-lime-500">Portfolio</span>
        </h2>

        {/* Section Description */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl">
          High-end architectural designs across residential and commercial
          sectors. We push the boundaries of modern living and functional
          commercial spaces.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          {" "}
          {/* Added mb-16 for space below buttons */}
          {filterButtons.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-6 py-3 rounded-full text-base font-medium
                transition-colors duration-300 ease-in-out cursor-pointer
                ${
                  activeFilter === category
                    ? "bg-lime-500 text-white shadow-md" // Active button style
                    : "bg-lime-100 text-lime-800 hover:bg-lime-200" // Inactive button style
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Render the selected project grid component */}
        <div>{renderProjectGrid()}</div>
      </div>
    </section>
  );
};

export default PortfolioSection;
