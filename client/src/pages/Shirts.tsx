import React from 'react';
import ProductBox from '../components/ProductBox';

const Shirts = () => {

  const Shirts = [
    {
      name: 'I like what I like',
      imageUrl: '/dried-mango.webp',
      price: 5.99
    },
    {
        name: 'No bag please',
        imageUrl: '/dried-mango.webp',
        price: 5.99
    }
  ];
  
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Shirts</h1>
      <div className="flex flex-wrap justify-center gap-6">
        <ProductBox
          name="Dehydrated Mangoes"
          imageUrl="/dried-mango.webp"
          price={5.99}
        />
      </div>
    </div>
  );
};

export default Shirts;