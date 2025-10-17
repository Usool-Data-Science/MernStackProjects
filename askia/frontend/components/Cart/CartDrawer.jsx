import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";

const CartDrawer = ({ isCartDrawerOpen, toggleIsCartDrawerOpen }) => {
  return (
    <>
      {/* Overlay background */}
      {isCartDrawerOpen && (
        <div
          onClick={toggleIsCartDrawerOpen}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full 
        w-full sm:w-3/4 md:w-[22rem] lg:w-[25rem] 
        bg-white/70 backdrop-blur-xl shadow-2xl border-l border-white/20 
        flex flex-col z-[9999] transform transition-transform duration-300 ease-in-out
        ${isCartDrawerOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200/60">
          <h2 className="text-xl md:text-2xl font-bold text-ask-primary tracking-tight">
            Your Cart
          </h2>
          <button
            onClick={toggleIsCartDrawerOpen}
            className="p-1 rounded-full hover:bg-gray-100 transition"
          >
            <IoMdClose className="h-6 w-6 text-gray-600 hover:text-red-500" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-grow overflow-y-auto px-4 py-3 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
          <CartItem />
          {/* You can map more CartItem components dynamically */}
        </div>

        {/* Footer / Checkout Section */}
        <div className="p-4 border-t border-gray-200/60 bg-white/80 backdrop-blur-lg sticky bottom-0">
          <button className="bg-ask-primary w-full py-3 rounded-xl font-semibold text-white shadow-md hover:bg-ask-secondary transition-all duration-200">
            Proceed to Checkout
          </button>
          <p className="text-xs text-center text-gray-500 mt-3">
            Shipping, taxes, and discounts are calculated at checkout.
          </p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
