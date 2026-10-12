import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-[#1E1E1F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-13 nav:h-12 text-xs space-x-8">
          <div className="cursor-pointer">
            <FaApple className="w-6 h-6 nav:w-5 nav:h-5" />
          </div>
          <ul className="hidden nav:flex items-center space-x-8 mid:space-x-8">
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Store
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Mac
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              ipad
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              iphone
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Watch
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Vision
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              AirPads
            </a>
            <a className="hover:text-blue-400 transition-colors whitespace-nowrap">
              TV & Home
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Entertaintment
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Accessories
            </a>
            <a className="hover:text-blue-400 transition-colors cursor-pointer">
              Support
            </a>
          </ul>
          <div className="ml-auto nav:ml-2 flex items-center space-x-8">
            <div className="flex items-center space-x-4 cursor-pointer mid:space-x-8">
              <IoMdSearch className="w-6 h-6 nav:w-5 nav:h-5" />
              <CiLock className="w-6 h-6 nav:w-5 nav:h-5" />
            </div>

            <div className="nav:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <FiMenu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="nav:hidden bg-gray-800 px-2 pt-2 pb-4 space-y-1 sm:px-3 text-left">
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            Store
          </a>
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            Mac
          </a>
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            ipad
          </a>
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            iphone
          </a>
        </div>
      )}
    </nav>
  );
};

export default MyNavbar;
