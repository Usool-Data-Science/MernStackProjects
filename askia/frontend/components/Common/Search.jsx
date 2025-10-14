import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search term: ", searchItem);
    setSearchItem("");
    setIsOpen(false);
  };
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute bg-white top-0 left-0 w-full h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          {/* Input and search button */}
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              className="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800"
            >
              <FiSearch className="h-6 w-6" />
            </button>
          </div>
          {/* Close button */}
          <button className="absolute right-4 transform" onClick={toggleSearch}>
            <MdOutlineClose className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button onClick={toggleSearch}>
          <FiSearch className="h-6 w-6 text-white" />
        </button>
      )}
    </div>
  );
};

export default Search;
