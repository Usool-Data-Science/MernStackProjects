import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const NavDrawer = ({ navDrawerOpen, toggleNavDrawerOpen }) => {
	return (
		<div
			className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full z-50 shadow-lg bg-white transform transition-transform duration-300 ${
				navDrawerOpen ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			{/* Close button */}
			<div className="flex justify-end p-2">
				<button onClick={toggleNavDrawerOpen}>
					<IoMdClose className="h-6 w-6 text-gray-600" />
				</button>
			</div>

			{/* Nav contents */}
			<div className="p-4">
				<h2 className="text-xl font-semibold mb-4">Menu</h2>
				<nav className="space-y-4">
					<Link
						to="#"
						onClick={toggleNavDrawerOpen}
						className="block text-primary hover:text-red-400"
					>
						Men
					</Link>
					<Link
						to="#"
						onClick={toggleNavDrawerOpen}
						className="block text-primary hover:text-red-400"
					>
						Women
					</Link>
					<Link
						to="#"
						onClick={toggleNavDrawerOpen}
						className="block text-primary hover:text-red-400"
					>
						Top Wears
					</Link>
					<Link
						to="#"
						onClick={toggleNavDrawerOpen}
						className="block text-primary hover:text-red-400"
					>
						Bottom Wears
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default NavDrawer;
