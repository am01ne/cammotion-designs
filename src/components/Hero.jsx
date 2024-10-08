import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-black text-white min-h-[80vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="/hero-background.jpg"
          alt="Camera background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl font-bold mb-8 leading-tight">Capture Life's Moments with Precision</h1>
          <p className="text-2xl mb-12 leading-relaxed">Discover our range of high-quality cameras and accessories for professionals and enthusiasts alike.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-xl px-8 py-4">
              Shop Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
