import React, { useState } from 'react';

interface ProductBoxProps {
  name: string;
  imageUrl: string;
  price: number;
}

const ProductBox: React.FC<ProductBoxProps> = ({ name, imageUrl, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) setQuantity(value);
  };

  return (
    <div className="w-64 p-4 m-4 rounded-lg shadow-lg bg-gradient-to-br from-orange-100 to-orange-200 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{name}</h3>
      
      <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold text-orange-600 text-center">
          ${price.toFixed(2)}
        </p>
        
        <div className="flex items-center justify-between gap-2">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-20 px-2 py-1 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          
          <button className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;