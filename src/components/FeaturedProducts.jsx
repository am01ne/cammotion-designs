import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
];

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Featured Products</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={products[currentIndex]} />
            </motion.div>
          </AnimatePresence>
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
  <Card className="w-64 overflow-hidden border-none shadow-lg bg-white hover:bg-gray-50 transition-colors duration-300">
    <CardContent className="p-4">
      <div className="flex flex-col items-center space-y-4">
        <motion.div 
          className="w-full h-48 overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-black">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.price}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <motion.button
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
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
