import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const products = [
  { id: 1, name: 'Pro DSLR Camera', price: '$1299', image: '/camera1.jpg' },
  { id: 2, name: 'Mirrorless Wonder', price: '$999', image: '/camera2.jpg' },
  { id: 3, name: 'Compact Powerhouse', price: '$699', image: '/camera3.jpg' },
  { id: 4, name: 'Action Cam Pro', price: '$399', image: '/camera4.jpg' },
  { id: 5, name: 'Vintage Film Camera', price: '$599', image: '/camera5.jpg' },
  { id: 6, name: 'Smartphone Gimbal', price: '$199', image: '/camera6.jpg' },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Featured Products</h2>
        <motion.div
          className="flex space-x-6"
          animate={{
            x: [0, -1920],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            },
          }}
        >
          {[...products, ...products].map((product, index) => (
            <motion.div
              key={`${product.id}-${index}`}
              className="flex-shrink-0"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
