import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button for toggling sidebar in the top corner */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 lg:hidden text-red-800 p-4 focus:outline-none z-50"
      >
        {isOpen ? (
          // Close Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`lg:w-64 bg-gray-800 text-white h-screen fixed lg:static z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <nav className="flex flex-col items-center p-6">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="https://gcoeara.ac.in/images/govt-college-logo.png" // Update with your logo path
              alt="Logo"
              className="h-16 w-auto" // Adjust the height as needed
            />
          </div>
          <ul className="flex flex-col w-full">
            <li className="mb-4 w-full">
              <Link
                to="/"
                className="block text-center bg-green-500 text-white py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-green-400 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Add Participant
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/participants"
                className="block text-center bg-green-500 text-white py-3 rounded-lg shadow-lg hover:from-pink-500 hover:to-purple-400 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Participants List
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Optional button to toggle sidebar on larger screens */}
      <button
        onClick={toggleSidebar}
        className="hidden lg:flex items-center justify-center bg-gray-700 text-white px-4 py-2 rounded-lg absolute top-4 left-4"
      >
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
    </>
  );
};

export default Sidebar;
