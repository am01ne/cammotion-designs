import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { id: 1, name: 'Pro DSLR Camera', price: '$1299', image: '/camera1.jpg' },
  { id: 2, name: 'Mirrorless Wonder', price: '$999', image: '/camera2.jpg' },
  { id: 3, name: 'Compact Powerhouse', price: '$699', image: '/camera3.jpg' },
  { id: 4, name: 'Action Cam Pro', price: '$399', image: '/camera4.jpg' },
  { id: 5, name: 'Vintage Film Camera', price: '$599', image: '/camera5.jpg' },
  { id: 6, name: 'Smartphone Gimbal', price: '$199', image: '/camera6.jpg' },
  { id: 7, name: 'Telephoto Lens', price: '$799', image: '/camera7.jpg' },
  { id: 8, name: 'Underwater Camera', price: '$549', image: '/camera8.jpg' },
];

const FeaturedProducts = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextProduct = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const displayedProducts = Array(5).fill().map((_, index) => {
    const productIndex = (startIndex + index) % products.length;
    return products[productIndex];
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Featured Products</h2>
        <div className="relative">
          <div className="flex justify-center space-x-4">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Button
            className="absolute left-0 top-1/2 transform -translate-y-1/2"
            onClick={prevProduct}
            variant="outline"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
            onClick={nextProduct}
            variant="outline"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => (
  <Card className="w-48 overflow-hidden border-none shadow-lg bg-white hover:bg-gray-50 transition-colors duration-300">
    <CardContent className="p-4">
      <div className="flex flex-col items-center space-y-4">
        <motion.div 
          className="w-full h-32 overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="text-center">
          <h3 className="text-sm font-semibold text-black">{product.name}</h3>
          <p className="text-xs text-gray-500">{product.price}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <motion.button
          className="px-3 py-1 text-xs font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add to Cart
        </motion.button>
      </div>
    </CardContent>
  </Card>
);

export default FeaturedProducts;
