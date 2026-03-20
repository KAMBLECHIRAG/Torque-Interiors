import React from "react";
import heroBackgroundImage from "../assets/serviceBg.jpeg";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header Section */}
      <header className="relative  from-gray-700 to-gray-900 text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <span className="bg-lime-500 text-gray-900 text-xs font-semibold px-2 py-1 rounded">
            OUR EXPERTISE
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Elevating Every <br />
            <span className="text-lime-400">Square Foot.</span>
          </h1>
        </div>
      </header>

      {/* Crafting Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold leading-tight">
              Crafting Exceptional <br />
              Spaces Through Innovative <br />
              Design
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We believe that your environment profoundly impacts your quality
              of life. Our mission is to blend functionality with aesthetics,
              creating bespoke spaces that reflect your unique story.
            </p>
            <div className="mt-8 flex space-x-8">
              <div>
                <p className="text-3xl font-bold text-lime-500">150+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  PROJECTS COMPLETED
                </p>
              </div>
              <div className="border-l border-gray-300 pl-8">
                <p className="text-3xl font-bold text-lime-500">12</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  DESIGN AWARDS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="bg-lime-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Core Offerings</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From conceptualization to final realization, we provide
            comprehensive design solutions tailored to your lifestyle.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {/* Offering Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-lime-200">
              <div className="flex items-center justify-center w-12 h-12 bg-lime-100 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-9v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold">
                Full-Service Interior Design
              </h4>
              <p className="mt-3 text-gray-600 text-sm">
                End-to-end transformation of your residential or commercial
                space. We handle everything from concept to installation.
              </p>
            </div>

            {/* Offering Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-lime-200">
              <div className="flex items-center justify-center w-12 h-12 bg-lime-100 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 12v-1m-4-6H9m6 0h1m-4-6h.01M7 16h.01L7 16zm-4 0h.01L3 16zm18 0h.01L21 16z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold">Space Planning</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Optimizing flow and functionality through expert architectural
                layouts and ergonomic design principles.
              </p>
            </div>

            {/* Offering Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-lime-200">
              <div className="flex items-center justify-center w-12 h-12 bg-lime-100 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2-2m0 0l2 2m-2-2v4m-2 2h4m-4-4v4m0-4h4m0-4v4"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold">Bespoke Furniture</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Custom-crafted pieces designed specifically for your unique
                aesthetic and physical space requirements.
              </p>
            </div>

            {/* Offering Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-lime-200">
              <div className="flex items-center justify-center w-12 h-12 bg-lime-100 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold">Color Consultation</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Scientific approach to palette selection, psychological impact
                of tones, and the perfect ambiance for your mood.
              </p>
            </div>

            {/* Offering Card 5 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-lime-200">
              <div className="flex items-center justify-center w-12 h-12 bg-lime-100 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold">Project Management</h4>
              <p className="mt-3 text-gray-600 text-sm">
                Seamless coordination of contractors, timelines, and budgets. We
                handle the stress so you can enjoy the result.
              </p>
            </div>

            {/* Ready to Start Card */}
            <div className="bg-lime-500 p-8 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Ready to start?
                </h4>
                <p className="mt-3 text-gray-800 text-sm">
                  Let's discuss your vision and create something extraordinary
                  together.
                </p>
              </div>
              <Link to="/contactUsPage">
                <button className="cursor-pointer mt-6 bg-gray-900 text-white font-bold py-3 px-6 rounded-md hover:bg-gray-700 transition duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Creative Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold">Our Creative Process</h3>
          <p className="mt-4 text-gray-600 max-w-2xl">
            A structured approach to ensure excellence at every stage of the
            design journey.
          </p>

          <div className="mt-12 grid md:grid-cols-4 gap-8">
            {/* Process Step 1 */}
            <div>
              <p className="text-2xl font-bold text-lime-500 mb-2">01</p>
              <h4 className="text-xl font-semibold">Discovery</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Deep dive into your preferences, lifestyle, and initial
                requirements.
              </p>
            </div>

            {/* Process Step 2 */}
            <div>
              <p className="text-2xl font-bold text-lime-500 mb-2">02</p>
              <h4 className="text-xl font-semibold">Conceptualization</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Visualizing themes, moodboards, and preliminary layout sketches.
              </p>
            </div>

            {/* Process Step 3 */}
            <div>
              <p className="text-2xl font-bold text-lime-500 mb-2">03</p>
              <h4 className="text-xl font-semibold">Refinement</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Finalizing materials, custom furniture designs, and detailed 3D
                renders.
              </p>
            </div>

            {/* Process Step 4 */}
            <div>
              <p className="text-2xl font-bold text-lime-500 mb-2">04</p>
              <h4 className="text-xl font-semibold">Realization</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Procurement, project management and final white-glove
                installation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
