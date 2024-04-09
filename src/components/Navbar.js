import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-10 w-full p-7 border-b border-gray-200 md:justify-between">
      <Link className="text-xl font-bold text-pink-500 md:hidden">
        dribbble.
      </Link>
      <ul className="md:flex float-start gap-5 items-center justify-center hidden">
        <li>
          <Link className="text-xl font-bold text-pink-500">dribbble.</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-800">Profile</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-800">Discover</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-800">Jobs</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-800">Hiring</Link>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-800">Post a Job</Link>
        </li>
      </ul>
      <ul className="flex float-start gap-5 items-center justify-center">
        {/* search bar */}
        <li className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="p-[9px] border bg-gray-100 rounded-md w-[9rem] pl-8"
            />
            <svg
              className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
        <li>
          <Link className="text-gray-600 hover:text-gray-800">
            {/* a bag svg */}
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 2a2 2 0 00-2 2v1H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2V4a2 2 0 00-2-2zm-4 4v10h8V6H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </li>

        <li>
          <Link className="text-gray-600 hover:text-gray-800">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link className="bg-pink-500 text-white p-[9px] rounded-md hidden md:block">
            Upload
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
