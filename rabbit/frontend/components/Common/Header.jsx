import React from 'react';
import TopBar from '../Layouts/TopBar';
import NavBar from '../Layouts/NavBar';

const Header = () => {
	return (
		<header className="border-b border-gray-200 shadow-lg">
			{/* TopBar */}
			<TopBar />
			{/* NavBar */}
			<NavBar />
			{/* Cart Drawer */}
		</header>
	);
};

export default Header;
