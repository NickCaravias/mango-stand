import React from 'react';
import ProductBox from '../components/ProductBox';

import IKnowWhatILike from '../assets/i-know-what-i-like.png';

const Shirts = () => {

  const shirts = [
    {
      name: 'I like what I like',
      imageUrl: IKnowWhatILike,
      price: 15.99
    },
    {
        name: 'No bag please',
        imageUrl: IKnowWhatILike,
        price: 15.99
    },
    {
        name: 'Other t shirt',
        imageUrl: IKnowWhatILike,
        price: 15.99
    }
  ];
  
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">T-Shirts</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {shirts.map((shirt, index) => (
            <ProductBox
                key={index}
                name={shirt.name}
                imageUrl={shirt.imageUrl}
                price={shirt.price}
            />
            ))}
      </div>
    </div>
  );
};

export default Shirts;