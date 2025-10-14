import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "About", link: "/about" },
    { name: "Blogs", link: "/blogs" },
  ];

  const toggleCartDrawer = () => {};

  return (
    <div className="bg-ask-primary">
      <div className="container mx-auto flex justify-between items-center py-2 px-12">
        {/* Logo */}
        <div>
          <img src="/askiaLogo.svg" className="w-12 h-8" alt="Askia" />
        </div>
        {/* Navs on large screen sizes */}
        <nav className="hidden sm:flex gap-4 items-center justify-center">
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
          <button className="relative" onClick={toggleCartDrawer}>
            <FaShoppingCart className="h-6 w-6 text-white" />
            <span className="absolute -top-1 bg-red-500 rounded-full text-xs px-1 py-0.5 text-white">
              4
            </span>
          </button>

          <button className="rounded-lg flex space-x-1 px-2 py-1  backdrop-blur-xl border border-white/20">
            <img src="/nijaIcon.svg" alt="9ja" />
            <span className="text-white">English</span>
          </button>
          {/* Search Bar */}
          <div>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
