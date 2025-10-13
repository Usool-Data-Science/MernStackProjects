import { Link } from 'react-router-dom';
import h1 from '/hijabs/h1.jpg';
import a1 from '/hijabs/a1.jpg';

const Collections = () => {
	return (
		<section className="py-16 px-4 lg:px-0 ">
			<div className="container mx-auto flex flex-col md:flex-row gap-8">
				{/* Half Khimar */}
				<div className="relative flex-1">
					<img
						src={a1}
						alt="Full Khimar collections"
						className="w-full h-[600px] object-cover"
					/>
					<div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 text-center">
						<h2 className="text-2xl font-bold text-gray-900 mb-3">
							Half Khimar Collection
						</h2>
						<Link
							to="/collections/all?type=halfKhimar"
							className="text-gray-900 underline"
						>
							Shop Now
						</Link>
					</div>
				</div>
				{/* Full Khimar */}
				<div className="relative flex-1">
					<img
						src={h1}
						alt="Full Khimar collections"
						className="w-full h-[600px] object-cover"
					/>
					<div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 text-center">
						<h2 className="text-2xl font-bold text-gray-900 mb-3">
							Full Khimar Collection
						</h2>
						<Link
							to="/collections/all?type=fullKhimar"
							className="text-gray-900 underline"
						>
							Shop Now
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Collections;
