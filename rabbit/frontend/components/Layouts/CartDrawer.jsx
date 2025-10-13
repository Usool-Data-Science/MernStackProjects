import { IoMdClose } from 'react-icons/io';
import CartItem from '../Cart/CartItem';

const CartDrawer = ({ isDrawerOpen, toggleDrawerOpen }) => {
	return (
		<div
			className={`fixed z-50 top-0 right-0 w-3/4 sm:w-1/2 md:w-[20rem] h-full bg-white shadow-lg flex flex-col transform transition-transform duration-300 ${
				isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
			} `}
		>
			{/* Close button */}
			<div className="flex justify-end p-2">
				<button onClick={toggleDrawerOpen}>
					<IoMdClose className="h-6 w-6 text-gray-600" />
				</button>
			</div>

			{/* Cart content */}
			<div className="flex-grow px-4 py-2 overflow-y-auto">
				<h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
				<CartItem />
			</div>

			{/* Checkout button */}
			<div className="p-4 bg-white sticky bottom-0">
				<button className="bg-primary w-full text-white rounded-lg font-semibold hover:bg-red-400 transition">
					Checkout
				</button>
				<p className="text-xs tracking-tight text-gray-500 mt-2 text-center">
					Shipping, taxes, and discount codes calculated at checkout.
				</p>
			</div>
		</div>
	);
};

export default CartDrawer;
