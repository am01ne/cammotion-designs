import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden border border-gray-200">
                <CardContent className="p-0">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                </CardContent>
                <CardFooter className="flex flex-col items-start p-4">
                  <h3 className="text-lg font-semibold mb-2 text-black">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                  <Button variant="outline" className="w-full text-black border-black hover:bg-black hover:text-white">Add to Cart</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
