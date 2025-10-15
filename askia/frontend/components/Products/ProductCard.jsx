import React from "react";

const ProductCard = ({ image, reviewCount, name, description, price }) => {
  return (
    <div className=" flex flex-col flex-nowrap   gap-4">
      {/* Image */}
      <div className="relative bg-gray-100 rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-[300px] rounded-lg object-contain"
        />
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 backdrop-blur-xl rounded-md px-4 py-1">
          <span className="text-white whitespace-nowrap font-semibold ">
            Askia {name}
          </span>
        </div>
        {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
      </div>
      {/* Rate */}
      <div className="flex items-end">
        <div className="rating rating-sm">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-yellow-400"
            disabled
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-yellow-400"
            disabled
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-yellow-400"
            disabled
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-yellow-400"
            disabled
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-yellow-400"
            disabled
          />
        </div>
        <span className="text-sm block">({reviewCount} reviews)</span>
      </div>
      {/* Title and description */}
      <span className="text-2x font-semibold">{name}</span>
      <p className="text-sm tracking-tighter ">{description}</p>
      <span className="text-2x font-semibold">${price}</span>

      <button className="bg-ask-primary w-full text-xl py-2 rounded-2xl text-white">
        Add to Bag
      </button>
    </div>
  );
};

export default ProductCard;
