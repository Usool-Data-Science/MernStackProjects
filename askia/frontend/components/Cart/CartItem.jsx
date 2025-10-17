import React from "react";
import { cartProducts } from "../../helpers/data";
import { RiDeleteBin3Fill } from "react-icons/ri";

const CartItem = () => {
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 px-2 my-2 shadow "
        >
          <div className="flex items-start">
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            {/* Description */}
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">Size: {product.size}</p>
              <div className="flex items-center mt-2">
                <button className="border border-gray-200 rounded px-1 font-medium">
                  -
                </button>
                <span className="mx-2">{product.quantity}</span>
                <button className="border border-gray-200 rounded px-1 font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>$ {product.price.toLocaleString()}</p>
            <RiDeleteBin3Fill className="h-6 w-6 mt-2 text-red-600" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
