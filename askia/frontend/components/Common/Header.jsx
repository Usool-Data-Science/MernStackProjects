import { FaBars, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";
import CartDrawer from "../Cart/CartDrawer";
import NavDrawer from "../Layouts/NavDrawer";

const Header = () => {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "About", link: "/about" },
    { name: "Blogs", link: "/blogs" },
  ];

  const toggleIsCartDrawerOpen = () => {
    setIsCartDrawerOpen(!isCartDrawerOpen);
  };
  const toggleIsNavDrawerOpen = () => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  };

  return (
    <div className="bg-ask-primary">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <div>
          <img src="/icons/askiaLogo.svg" className="w-12 h-8" alt="Askia" />
        </div>
        {/* Navs on large screen sizes */}
        <nav className="hidden md:flex gap-4 items-center justify-center">
          {navItems.map((navItem, index) => (
            <Link
              key={navItem + index}
              className="text-sm font-semibold text-white hover:underline"
              to={navItem.link}
            >
              {navItem.name}
            </Link>
          ))}
        </nav>
        {/* Cart, i8n and search */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <button className="relative" onClick={toggleIsCartDrawerOpen}>
            <FaShoppingCart className="h-6 w-6 text-white" />
            <span className="absolute -top-1 bg-red-500 rounded-full text-xs px-1 text-white">
              4
            </span>
          </button>
          {/* Language Selector */}
          <button className="rounded-lg flex items-center justify-center space-x-1 p-1  backdrop-blur-xl border border-white/20">
            <img src="/icons/nijaIcon.svg" alt="9ja" />
            <span className="text-white text-sm">English</span>
          </button>
          {/* Search Bar */}
          <div>
            <Search />
          </div>
          {/* NavMenu Icon */}
          <button onClick={toggleIsNavDrawerOpen} className="md:hidden">
            <FaBars className="h-6 w-6 text-white" />
          </button>

          <CartDrawer
            isCartDrawerOpen={isCartDrawerOpen}
            toggleIsCartDrawerOpen={toggleIsCartDrawerOpen}
          />
          <NavDrawer
            isNavDrawerOpen={isNavDrawerOpen}
            toggleIsNavDrawerOpen={toggleIsNavDrawerOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
