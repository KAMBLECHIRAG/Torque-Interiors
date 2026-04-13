import React from "react";

const Footer: React.FC = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="bg-black text-gray-300 font-sans py-16 px-6 lg:px-12">
      {/* Top section of the footer with columns */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gray-700">
        {/* Column 1: Logo and Description */}
        <div>
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-8 h-8 mr-2 bg-lime-500">
              {/* Icon placeholder */}
              <span className="text-white text-lg font-bold">&#923;</span>
            </div>
            <span className="text-xl font-bold text-white">TORQUE</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Crafting extraordinary environments for extraordinary people since
            2012. Bespoke interior architectural services.
          </p>
        </div>

        {/* Column 2: Explore Links */}
        <div></div>

        {/* Column 3: Legal Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="#privacy-policy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#terms-of-service"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#cookies"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Office Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Office</h3>
          <p className="text-sm text-gray-400 mb-4">
            Mumbai
            <br />
            Maharashtra, India
          </p>
          <p className="text-sm text-gray-400 mb-2">hello@torque-design.com</p>
          <p className="text-sm text-gray-400">+91 - 9167973889</p>
        </div>
      </div>

      {/* Bottom section of the footer: Copyright and Social Links */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between pt-8">
        <p className="text-xs text-gray-500 mb-4 md:mb-0">
          © {getCurrentYear()} TORQUE INTERIOR DESIGN. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
