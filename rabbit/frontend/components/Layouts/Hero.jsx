import React from 'react';
// import hero1 from '/hijabs/hero1.jpg';
import threeGirls from '/hijabs/threeGirls.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<section className="relative">
			<img
				src={threeGirls}
				className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
			/>
			<div className="absolute inset-0 bg-black/10 flex items-center justify-center">
				<div className="text-center text-white p-6">
					<h1 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase mb-4">
						MODESTY <br /> WEARS
					</h1>
					<p className="text-sm md:text-lg tracking-tighter font-light mb-6">
						Explore our islamic wears that are design for your convenience and
						modesty.
					</p>
					<Link
						to="#"
						className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
					>
						Shop Now
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
