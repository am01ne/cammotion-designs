import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import ClientsAndTestimonials from '../components/ClientsAndTestimonials';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <CameraCategories />
        <ClientsAndTestimonials />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
};

const CameraCategories = () => {
  const categories = [
    { name: 'DSLR', image: '/dslr.jpg' },
    { name: 'Mirrorless', image: '/mirrorless.jpg' },
    { name: 'Point & Shoot', image: '/point-and-shoot.jpg' },
    { name: 'Action Cameras', image: '/action-camera.jpg' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Camera Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <motion.img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <Button variant="outline">Explore</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogPreview = () => {
  const blogPosts = [
    { title: 'Top 10 Camera Accessories for 2024', image: '/blog-accessories.jpg' },
    { title: 'Mastering Night Photography: Tips and Tricks', image: '/blog-night-photography.jpg' },
    { title: 'The Rise of Mirrorless Cameras: What You Need to Know', image: '/blog-mirrorless.jpg' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <Button variant="link">Read More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
