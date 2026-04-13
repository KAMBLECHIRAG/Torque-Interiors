// ContactUsPage.tsx
import React from "react";
import "./index.css"; // Make sure your Tailwind CSS is imported here or in your main app.css

const ContactUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 md:p-16 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          We're here to help. Reach out with any questions about our performance
          engineering services or partnership opportunities.
        </p>

        {/* Main Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Send us a Message Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="emailAddress"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                >
                  <option>General Inquiry</option>
                  <option>Partnership Opportunities</option>
                  <option>Support Request</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm resize-y"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 w-full"
              >
                Send Message
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Info and Map */}
          <div className="space-y-6">
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="shrink-0 w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L9.5 13.5a11 11 0 005 5l1.498-1.498a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    Phone
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">+91-9167973889</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="shrink-0 w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    Email
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">hello@torque.com</p>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="shrink-0 w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    Business Hours
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Mon - Fri: 9am - 6pm
                  </p>
                </div>
              </div>

              {/* Office Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="shrink-0 w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    Office
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-lg shadow-sm overflow-hidden flex items-center justify-center relative">
              {/* This could be an actual embedded map, but for UI, it's a placeholder */}
              <svg
                className="w-full h-full text-gray-400 opacity-75"
                viewBox="0 0 200 150"
                fill="currentColor"
              >
                <path d="M100 0C68.96 0 43.1 26.54 43.1 59.38c0 35.8 45.47 90.62 56.9 90.62s56.9-54.82 56.9-90.62C156.9 26.54 131.04 0 100 0z M100 87.5c-15.19 0-27.5-12.31-27.5-27.5S84.81 32.5 100 32.5s27.5 12.31 27.5 27.5S115.19 87.5 100 87.5z" />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-lime-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>
                </div>
                <p className="mt-2 px-3 py-1 bg-white rounded-md shadow-md text-sm font-medium text-gray-700">
                  Torque HQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
