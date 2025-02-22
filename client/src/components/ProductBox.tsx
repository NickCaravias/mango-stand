import React from 'react';

interface ProductBoxProps {
  name: string;
  price: number;
  imageUrl: string;  // Changed to string since Vite handles image imports differently
  description?: string;
}

const ProductBox: React.FC<ProductBoxProps> = ({ name, price, imageUrl, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-64">
      <div className="aspect-w-1 aspect-h-1">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        {description && <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>}
        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-bold">${price.toFixed(2)}</span>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;