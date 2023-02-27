import React from "react";

const Navbar = ({ activeSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white py-3">
      <div className="container mx-auto flex justify-between">
        <a href="#home" className="text-lg font-bold">
          Home
        </a>
        <div className="flex sm:hidden">
          <button className="text-gray-500 focus:outline-none">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="menu w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2.5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5h-15c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm0 5h15c.28 0 .5.22.5.5s-.22.5-.5.5h-15c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zm15-3h-15c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h15c.28 0 .5.22.5.5s-.22.5-.5.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex sm:items-center">
          <a href="#about" className={`mx-3 ${activeSection === 'about' ? 'text-gray-500' : 'text-gray-400'}`}>
            About
          </a>
          <a href="#services" className={`mx-3 ${activeSection === 'services' ? 'text-gray-500' : 'text-gray-400'}`}>
            Services
          </a>
          <a href="#contact" className={`mx-3 ${activeSection === 'contact' ? 'text-gray-500' : 'text-gray-400'}`}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;