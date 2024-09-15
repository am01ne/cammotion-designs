import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

const products = [
  { id: 1, name: 'Pro DSLR Camera', price: '$1299', image: '/camera1.jpg' },
  { id: 2, name: 'Mirrorless Wonder', price: '$999', image: '/camera2.jpg' },
  { id: 3, name: 'Compact Powerhouse', price: '$699', image: '/camera3.jpg' },
  { id: 4, name: 'Action Cam Pro', price: '$399', image: '/camera4.jpg' },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Featured Products</h2>
        <div className="max-w-md mx-auto space-y-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card className="overflow-hidden border-none shadow-lg bg-white hover:bg-gray-50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Avatar className="w-16 h-16">
                          <img src={product.image} alt={product.name} className="object-cover" />
                        </Avatar>
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.price}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">In Stock</span>
                      <motion.button
                        className="px-3 py-1 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
