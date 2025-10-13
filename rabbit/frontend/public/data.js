export const cartProducts = Array.from({ length: 4 }, (_, i) => ({
	productId: i + 1,
	name: `T-Shirt ${i + 1}`,
	size: ['S', 'M', 'L', 'XL', 'XXL'][i % 5],
	color: ['Red', 'Blue', 'Green', 'Black', 'White'][i % 5],
	quantity: Math.floor(Math.random() * 3) + 1,
	price: 15 + i * 2,
	image: `https://picsum.photos/200?random=${i + 1}`,
}));

export const newArrivals = Array.from({ length: 14 }, (_, i) => ({
	_id: i + 1,
	name: `New Arrival ${i + 1}`,
	price: Math.floor(Math.random() * Math.random() * (i + 1) * 50),
	images: [
		{
			url: `https://picsum.photos/500/500?random=${i + 1}`,
			altText: `New Arrival ${i + 1}`,
		},
	],
}));

export const similarProducts = Array.from({ length: 4 }, (_, i) => ({
	_id: i + 1,
	name: `Similar product ${i + 1}`,
	price: Math.floor(Math.random() * Math.random() * (i + 1) * 50),
	images: [
		{
			url: `https://picsum.photos/500/500?random=${i + 1}`,
			altText: `Similar product ${i + 1}`,
		},
	],
}));

export const selectedProduct = {
	name: 'Best Khimar',
	price: 120,
	originalPrice: 150,
	description:
		'This best khimar for any muslimah, good for any occassion, or academic or religious gathering',
	brand: 'MuslimahBrand',
	material: 'Lacral',
	sizes: ['S', 'M', 'L', 'XL'],
	colors: ['Red', 'Black'],
	images: [
		{ url: 'https://picsum.photos/500/500?random=1', altText: 'Best Khimar 1' },
		{ url: 'https://picsum.photos/500/500?random=2', altText: 'Best Khimar 2' },
	],
};
