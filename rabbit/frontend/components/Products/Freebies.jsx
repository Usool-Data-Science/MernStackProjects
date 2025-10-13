import { RiRefund2Line } from 'react-icons/ri';
import { TbCreditCardRefund } from 'react-icons/tb';
import { HiShoppingBag } from 'react-icons/hi';

const Freebies = () => {
	return (
		<section className="py-16 px-4 bg-white">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
				{/* Freebie 1 */}
				<div className="flex flex-col items-center bg-green-50 rounded-xl shadow-2xl py-8">
					<div className="p-4 rounded-full mb-4 bg-primary">
						<HiShoppingBag className="text-xl text-white" />
					</div>
					<h4 className="tracking-tighter mb-2">FREE INTERNATIONAL SHIPPING</h4>
					<p className="text-gray-600 text-sm tracking-tighter">
						On all orders above $100.00
					</p>
				</div>
				{/* Freebie 2 */}
				<div className="flex flex-col items-center bg-green-50 rounded-xl shadow-2xl py-8">
					<div className="p-4 rounded-full mb-4 bg-primary">
						<RiRefund2Line className="text-xl text-white" />
					</div>
					<h4 className="tracking-tighter mb-2">45 DAYS RETURN</h4>
					<p className="text-gray-600 text-sm tracking-tighter">
						Money back guarantee
					</p>
				</div>
				{/* Freebie 3 */}
				<div className="flex flex-col items-center bg-green-50 rounded-xl shadow-2xl py-8">
					<div className="p-4 rounded-full mb-4 bg-primary">
						<TbCreditCardRefund className="text-xl text-white" />
					</div>
					<h4 className="tracking-tighter mb-2">SECURE CHECKOUT</h4>
					<p className="text-gray-600 text-sm tracking-tighter">
						100% secured checkout process
					</p>
				</div>
			</div>
		</section>
	);
};

export default Freebies;
