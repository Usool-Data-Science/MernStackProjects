import React from "react";
import { IoMdClose, IoMdHome } from "react-icons/io";
import { FaLeaf, FaInfoCircle, FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavDrawer = ({ isNavDrawerOpen, toggleIsNavDrawerOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 md:w-[240px] z-50 bg-white/90 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isNavDrawerOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close button */}
      <div className="flex justify-end p-3">
        <button
          onClick={toggleIsNavDrawerOpen}
          className="text-gray-600 hover:text-red-500 transition-colors"
        >
          <IoMdClose className="h-7 w-7" />
        </button>
      </div>

      {/* Nav Contents */}
      <div className="p-4 font-nunito">
        <h2 className="text-lg font-extrabold text-ask-primary mb-5 tracking-wide">
          Navigation
        </h2>
        <nav className="flex flex-col gap-4">
          <Link
            to="/"
            onClick={toggleIsNavDrawerOpen}
            className="flex items-center gap-3 text-ask-primary hover:text-ask-secondary transition-all duration-200"
          >
            <IoMdHome className="h-6 w-6" />
            <span class="hover:underline">Home</span>
          </Link>

          <Link
            to="/products"
            onClick={toggleIsNavDrawerOpen}
            className="flex items-center gap-3 text-ask-primary hover:text-ask-secondary transition-all duration-200"
          >
            <FaLeaf className="h-6 w-6" />
            <span class="hover:underline">Products</span>
          </Link>

          <Link
            to="/about"
            onClick={toggleIsNavDrawerOpen}
            className="flex items-center gap-3 text-ask-primary hover:text-ask-secondary transition-all duration-200"
          >
            <FaInfoCircle className="h-6 w-6" />
            <span class="hover:underline">About</span>
          </Link>

          <Link
            to="/blogs"
            onClick={toggleIsNavDrawerOpen}
            className="flex items-center gap-3 text-ask-primary hover:text-ask-secondary transition-all duration-200"
          >
            <FaBlog className="h-6 w-6" />
            <span class="hover:underline">Blogs</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavDrawer;
