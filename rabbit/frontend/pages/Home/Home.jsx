import React from 'react';
import Hero from '../../components/Layouts/Hero';
import Collections from '../../components/Products/Collections';
import NewArrivals from '../../components/Products/NewArrivals';
import ProductDetails from '../../components/Products/ProductDetails';
import WomenTopWears from '../../components/Products/WomenTopWears';
import FeaturedCollection from '../../components/Products/FeaturedCollection';
import Freebies from '../../components/Products/Freebies';

const Home = () => {
	return (
		<div>
			<Hero />
			<Collections />
			<NewArrivals />

			{/* Best Sellers */}
			<ProductDetails />

			{/* Women to wears */}
			<WomenTopWears />

			{/* Featured collection */}
			<FeaturedCollection />

			{/* Freebies section */}
			<Freebies />
		</div>
	);
};
1;

export default Home;
