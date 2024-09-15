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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <img src={product.image} alt={product.name} className="object-cover" />
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.price}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">In Stock</span>
                    <button className="px-3 py-1 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
