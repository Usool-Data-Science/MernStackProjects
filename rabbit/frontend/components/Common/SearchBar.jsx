import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		console.log('Search term: ', searchTerm);
		setSearchTerm('');
		setIsOpen(false);
	};

	return (
		<div
			className={`flex items-center justify-center w-full transition-all duration-300 ${
				isOpen ? 'absolute bg-white top-0 left-0 w-full h-24 z-50' : 'w-auto'
			}`}
		>
			{isOpen ? (
				<form
					onSubmit={handleSearch}
					className="relative flex items-center justify-center w-full"
				>
					{/* Input and search button */}
					<div className="relative w-1/2">
						<input
							type="text"
							placeholder="Search"
							value={searchTerm}
							onChange={(e) => {
								setSearchTerm(e.target.value);
							}}
							className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
						/>
						{/* search icon */}
						<button
							type="submit"
							className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800"
						>
							<FiSearch className="h6 w-6" />
						</button>
					</div>
					{/* Cancel button */}
					<button
						onClick={handleSearchToggle}
						className="absolute right-4 top-1/2 transform -translate-y-1/2"
						type="button"
					>
						<MdOutlineClose className="h-6 w-6" />
					</button>
				</form>
			) : (
				<button onClick={handleSearchToggle}>
					<FiSearch className="h-6 w-6" />
				</button>
			)}
		</div>
	);
};

export default SearchBar;
