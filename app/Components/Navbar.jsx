import React, { useState } from "react";
import { Link } from "@remix-run/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-100 border-b border-gray-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link className="text-xl font-bold text-gray-800" href="#">
          Navbar
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-gray-700">
            <li>
              <Link className="hover:text-gray-900" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-900" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-900" to="/blog">
                Blog
              </Link>
            </li>
            <li className="relative">
              <button
                className="flex items-center hover:text-gray-900"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Dropdown
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md">
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-200"
                      href="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-200"
                      href="#"
                    >
                      Another Action
                    </Link>
                  </li>
                  <li>
                    <hr className="my-2 border-gray-200" />
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-200"
                      href="#"
                    >
                      Something else here
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <form className="mt-4 md:mt-0 md:flex md:items-center">
            <input
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:ring focus:ring-green-300"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
