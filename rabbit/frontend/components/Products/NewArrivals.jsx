import { useEffect, useRef, useState } from 'react';
import { newArrivals } from '../../public/data';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
	const scrollRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(false);
	const [canScrollLeft, setCanScrollLeft] = useState(true);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const handleMouseDown = (e) => {
		setIsDragging(true);
		setStartX(e.pageX - scrollRef.current.offsetLeft);
		setScrollLeft(scrollRef.current.scrollLeft);
	};

	const handleMouseMove = (e) => {
		if (!isDragging) return;
		const x = e.pageX - scrollRef.current.offsetLeft;
		const walk = x - startX;
		scrollRef.current.scrollLeft = scrollLeft - walk;
	};

	const handleMouseUpOrLeave = () => {
		setIsDragging(false);
	};

	const scroll = (direction) => {
		const scrollAmount = direction === 'left' ? -300 : 300;
		scrollRef.current.scrollBy({ left: scrollAmount, behaviour: 'smooth' });
	};

	const updateScrollButtons = () => {
		const container = scrollRef.current;
		if (container) {
			const leftScroll = container.scrollLeft;
			// I can only scroll to the right if the hidden objects in our list is wider than the amount already scrolled and the visible width
			const rightScrollable =
				container.scrollWidth > leftScroll + container.clientWidth;

			// I can scroll back to the left only if i have already scrolled forward.
			setCanScrollLeft(leftScroll > 0);
			setCanScrollRight(rightScrollable);
		}
	};

	useEffect(() => {
		const container = scrollRef.current;
		if (container) {
			container.addEventListener('scroll', updateScrollButtons);
			updateScrollButtons();
			return () => {
				container.removeEventListener('scroll', updateScrollButtons);
			};
		}
	}, []);

	return (
		<section className="px-4 lg:px-0">
			<div className="container mx-auto text-center mb-10 relative">
				<h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
				<p className="text-lg text-gray-600 mb-16">
					Discover the latest hijab for the modest souls, freshly added to keep
					your wardrobe on the cutting edge of modesty.
				</p>
			</div>
			{/* Scroll button */}
			<div className="container mx-auto flex space-x-2 mb-2 justify-end">
				<button
					onClick={() => scroll('left')}
					disabled={!canScrollLeft}
					className={`p-2 border border-gray-400 rounded ${
						canScrollLeft
							? 'bg-white text-black cursor-pointer'
							: 'bg-gray-200 text-gray-400 cursor-not-allowed'
					}`}
				>
					<FiChevronLeft className="text-2xl" />
				</button>
				<button
					onClick={() => scroll('right')}
					disabled={!canScrollRight}
					className={`p-2 border border-gray-400 rounded  ${
						canScrollRight
							? 'bg-white text-black cursor-pointer'
							: 'bg-gray-200 text-gray-400 cursor-not-allowed'
					}`}
				>
					<FiChevronRight className="text-2xl" />
				</button>
			</div>
			{/* Scrollable contents */}
			<div
				ref={scrollRef}
				className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
					isDragging ? 'cursor-grabbing' : 'cursor-grab'
				}`}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUpOrLeave}
				onMouseLeave={handleMouseUpOrLeave}
			>
				{newArrivals.map((product) => (
					<div
						key={product._id}
						className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
					>
						<img
							src={product.images[0].url}
							alt={product.images[0].altText || product.name}
							className="w-full min-w-[300px] h-[500px] object-cover rounded-lg"
							draggable={false} //To avoid the image popping up when dragging.
						/>
						<div className="absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg">
							<Link className="block" to={`/product/${product._id}`}>
								<h4 className="font-medium">{product.name}</h4>
								<p className="mt-1">${product.price}</p>
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default NewArrivals;
