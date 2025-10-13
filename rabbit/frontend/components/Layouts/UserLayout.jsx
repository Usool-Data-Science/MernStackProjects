import React from 'react';
import Header from '../Common/Header';
import CartDrawer from './CartDrawer';
import Footer from '../Common/Footer';
import Main from '../Common/Main';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Header */}
			<Header />
			{/* Main */}
			<Main />
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default UserLayout;
