import { RiTwitterLine } from 'react-icons/ri';
import { RiTwitterFill } from 'react-icons/ri';
import { ImTwitter } from 'react-icons/im';
import { IoLogoInstagram } from 'react-icons/io';
import { TbBrandMeta } from 'react-icons/tb';
import React from 'react';

const TopBar = () => {
	return (
		<div className="bg-primary text-white">
			<div className="container mx-auto flex justify-between items-center py-3 px-4">
				{/* Media icons */}
				<div className="hidden md:flex item-center space-x-4">
					<a href="#" className="hover:text-gray-500">
						<TbBrandMeta className="h-5 w-5" />
					</a>
					<a href="#" className="hover:text-gray-500">
						<IoLogoInstagram className="h-5 w-5" />
					</a>
					<a href="#" className="hover:text-gray-500">
						<RiTwitterFill className="h-4 w-4" />
					</a>
				</div>
				<div className="text-sm text-center flex-grow">
					<span>We ship worldwide - Fast and reliable shipping!</span>
				</div>
				<div className="hidden md:block text-sm">
					<a href="tel:+2348068072124" className="text-sm">
						+(234) 806 8072 124
					</a>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
