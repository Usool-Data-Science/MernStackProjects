import { IoMdClose } from "react-icons/io";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";
import CartItem from "./CartItem";

const CartDrawer = ({ isCartDrawerOpen, toggleIsCartDrawerOpen }) => {
  return (
    <div
      className={`fixed z-50 top-0 right-0 w-3/4 sm:w-1/2 md:w-[22rem] h-full bg-white/95 backdrop-blur-md shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
        isCartDrawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <FaShoppingCart className="text-ask-primary h-5 w-5" />
          <h2 className="text-lg font-semibold text-gray-800">Your Cart</h2>
        </div>
        <button
          onClick={toggleIsCartDrawerOpen}
          className="text-gray-600 hover:text-red-500 transition-colors"
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>

      {/* Cart Content */}
      <div className="flex-grow px-4 py-3 overflow-y-auto">
        <CartItem />
      </div>

      {/* Checkout button */}
      <div className="p-4 border-t border-gray-200 bg-white sticky bottom-0">
        <button className="bg-ask-primary flex items-center justify-center gap-2 w-full py-3 text-white rounded-lg font-semibold hover:bg-ask-secondary transition">
          Proceed to Checkout
          <FaArrowRight className="h-4 w-4" />
        </button>
        <p className="text-xs tracking-tight text-gray-500 mt-2 text-center">
          Shipping, taxes, and discounts calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
