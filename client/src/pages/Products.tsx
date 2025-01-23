import React from 'react';
import ProductBox from '../components/ProductBox';

const Products = () => {
  
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-6">
        <ProductBox
          name="Dehydrated Mangoes"
          imageUrl="/dried-mango.webp"
          price={5.99}
        />
        {/* Add more ProductBox components as needed */}
      </div>
    </div>
  );
};

export default Products;