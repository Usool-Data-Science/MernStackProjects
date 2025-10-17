import { IoMdClose, IoMdHome } from "react-icons/io";
import { FaLeaf, FaInfoCircle, FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavDrawer = ({ isNavDrawerOpen, toggleIsNavDrawerOpen }) => {
  const navLinks = [
    { name: "Home", icon: <IoMdHome />, link: "/" },
    { name: "Products", icon: <FaLeaf />, link: "/products" },
    { name: "About", icon: <FaInfoCircle />, link: "/about" },
    { name: "Blogs", icon: <FaBlog />, link: "/blogs" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 md:w-[260px] bg-white/80 backdrop-blur-xl shadow-2xl z-[9999] transform transition-transform duration-300 ease-in-out ${
        isNavDrawerOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
        <h2 className="text-lg font-extrabold text-ask-primary tracking-wide">
          Menu
        </h2>
        <button
          onClick={toggleIsNavDrawerOpen}
          className="text-gray-500 hover:text-red-500 transition-colors"
          aria-label="Close Menu"
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="p-5 flex flex-col gap-5 font-medium text-gray-700">
        {navLinks.map((item, idx) => (
          <Link
            key={idx}
            to={item.link}
            onClick={toggleIsNavDrawerOpen}
            className="flex items-center gap-3 hover:bg-ask-primary/10 rounded-md px-3 py-2 transition-all duration-200 group"
          >
            <span className="text-ask-primary group-hover:text-ask-secondary transition-colors">
              {item.icon}
            </span>
            <span className="group-hover:underline">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto px-5 pb-6 border-t border-gray-200 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Askia. All rights reserved.</p>
      </div>
    </div>
  );
};

export default NavDrawer;
