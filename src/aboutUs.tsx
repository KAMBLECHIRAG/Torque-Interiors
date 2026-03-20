import React from "react";
import heroBackgroundImage from "./assets/aboutUsBg.jpeg";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50  items-center justify-center font-sans">
      <div className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg">
        {/* Background Image / Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBackgroundImage})`, // Replace with your actual image URL
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-16 lg:p-24 text-white flex flex-col justify-center min-h-">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-2xl">
            Designing Your Vision, Redefining Your Space
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-lg">
            At Torque, we believe that great design is a dialogue between form
            and function, tailored to the soul of the inhabitant.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-30">
        {/* Left Content Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Philosophy
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our approach combines aesthetic excellence with practical
            innovation, ensuring every project is a unique reflection of our
            clients' aspirations. We don't just decorate rooms; we curate
            experiences that enhance the way you live and work.
          </p>
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-lime-500 rounded-full"></div>
            <p className="italic text-lg text-gray-600">
              "The best rooms have something to say about the people who live in
              them." — Our Founding Principle.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-lime-50 py-16 px-4 md:px-8 flex flex-col items-center justify-center font-sans text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Our Core Values
          </h2>
          {/* Simple underline-like element */}
          <div className="w-24 h-1 bg-lime-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value Card 1: Sustainability */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mb-6">
              {/* SVG Icon for Sustainability (Leaf) */}
              <svg
                className="w-8 h-8 text-lime-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586L4 12l4.586-4.586A1.994 1.994 0 019 7h5.586l1.414 1.414z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586L4 12l4.586-4.586A1.994 1.994 0 019 7h5.586l1.414 1.414z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 11h10"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Sustainability
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We prioritize eco-friendly materials and energy-efficient
              solutions without compromising on luxury or style.
            </p>
          </div>
          {/* Value Card 2: Client-Centricity */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mb-6">
              {/* SVG Icon for Client-Centricity (Group of people) */}
              <svg
                className="w-8 h-8 text-lime-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Client-Centricity
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your vision is our blueprint. We maintain transparent
              communication and collaborative design at every stage.
            </p>
          </div>
          {/* Value Card 3: Innovation */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mb-6">
              {/* SVG Icon for Innovation (Lightbulb) */}
              <svg
                className="w-8 h-8 text-lime-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 21h.01M9.663 17a2 2 0 11-4.673 0H3v-1h1.003c.691 0 1.23-.5 1.23-1.229V12h.2c.5 0 .6-.4.5-1A7 7 0 009 5a7.002 7.002 0 007 7h1c.5 0 .6.4.5 1h.2v1c0 .729.539 1.229 1.23 1.229H21v1h-1.003a2 2 0 11-4.673 0m-1.242-10a2 2 0 111.414-1.414L11.828 9.172a4 4 0 00-.995 2.15l.655.655A4 4 0 0112 21l.4-.403m.01-.403l.859-.858M12 21v-.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Innovation
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We push boundaries with smart home integration and avant-garde
              spatial concepts that redefine modern living.
            </p>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto bg-gray-800 rounded-lg p-8 md:p-12 text-center shadow-lg my-2">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Ready to transform your space?
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's collaborate to create a space that tells your story and inspires
          your daily life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/contactUsPage">
            <button className="cursor-pointer bg-lime-500 text-gray-900 font-semibold py-3 px-8 rounded-md hover:bg-lime-400 transition-colors duration-300 w-full sm:w-auto">
              Schedule a Consultation
            </button>
          </Link>
          <Link to="/portfolioHeader">
            <button className="border border-gray-600 text-gray-200 font-semibold py-3 px-8 rounded-md hover:bg-gray-700 hover:border-gray-500 transition-colors duration-300 w-full sm:w-auto cursor-pointer">
              View Our Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
