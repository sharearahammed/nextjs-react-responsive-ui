import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:fixed md:flex-no-wrap md:px-16 md:top-0 md:right-0 md:left-0 md:z-10 bg-gray-950 shadow dark:bg-gray-800">
        <nav className="relative max-w-4xl mx-auto">
      <div className="container py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#">
            <img
              className="w-auto h-6 sm:h-7"
              src="./nav_Logo.svg"
              alt="Logo"
            />
          </a>

          {/* Mobile menu button */} 
          <div className="flex gap-[24px] md:hidden">
          <img src="./Profile Pic.svg" alt="" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <IoMdMenu className="text-white border border-[#2b2b2b] text-4xl rounded-full p-[3px] bg-[#2b2b2b]" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-2">
            <a
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              <img src="./Search.svg" alt="" />
            </a>
            <a
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              <img src="./Create.svg" alt="" />
            </a>
            <a
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              <img src="./Message.svg" alt="" />
            </a>
            <a
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              <img src="./Notification.svg" alt="" />
            </a>
            <a
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              <img src="./Options.svg" alt="" />
            </a>
          </div>
          <img className="md:block hidden" src="./Profile Pic.svg" alt="" />
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
