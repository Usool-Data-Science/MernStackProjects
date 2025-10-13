import { FaBars } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
import { CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import SearchBar from '../Common/SearchBar';
import CartDrawer from './CartDrawer';
import { useState } from 'react';
import NavDrawer from '../Common/NavDrawer';

const NavBar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [navDrawerOpen, setNavDrawerOpen] = useState(false);

	const toggleNavDrawerOpen = () => {
		setNavDrawerOpen(!navDrawerOpen);
	};

	const toggleDrawerOpen = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};
	return (
		<>
			<nav className="container mx-auto flex justify-between items-center py-3 px-4">
				{/* Left logo */}
				<div>
					<Link to="/" className="text-2xl font-medium">
						Usool Wears
					</Link>
				</div>
				{/* Filter links */}
				<div className="hidden md:flex space-x-6">
					<Link
						to="#"
						className="text-gray-700 hover:text-black text-sm font-medium uppercase"
					>
						men
					</Link>
					<Link
						to="#"
						className="text-gray-700 hover:text-black text-sm font-medium uppercase"
					>
						women
					</Link>
					<Link
						to="#"
						className="text-gray-700 hover:text-black text-sm font-medium uppercase"
					>
						Top wear
					</Link>
					<Link
						to="#"
						className="text-gray-700 hover:text-black text-sm font-medium uppercase"
					>
						Bottom wear
					</Link>
				</div>
				{/* Profile, cart, and search */}
				<div className="flex items-center space-x-4">
					<Link to="/profile" className="hover:black">
						<CiUser className="h-6 w-6 text-gray-700" />
					</Link>
					<button
						onClick={toggleDrawerOpen}
						className="relative hover:text-black"
					>
						<BiShoppingBag className="h-6 w-6" />
						<span className="absolute -top-1 bg-primary text-white rounded-full text-xs px-2 py-0.5">
							4
						</span>
					</button>
					{/* Search */}
					<div className="overflow-hidden">
						<SearchBar />
					</div>
					{/* Hamburger Menu for small screens only */}
					<button onClick={toggleNavDrawerOpen} className="md:hidden">
						<FaBars className="h-6 w-6" />
					</button>
				</div>
			</nav>
			<CartDrawer
				isDrawerOpen={isDrawerOpen}
				toggleDrawerOpen={toggleDrawerOpen}
			/>
			<NavDrawer
				navDrawerOpen={navDrawerOpen}
				toggleNavDrawerOpen={toggleNavDrawerOpen}
			/>
		</>
	);
};

export default NavBar;
