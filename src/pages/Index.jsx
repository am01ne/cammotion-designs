import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <AITools />
        <ExploreResources />
      </main>
      <Footer />
    </div>
  );
};

const AITools = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16">
          <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">AI Tools</div>
          <h2 className="text-4xl font-bold mb-4">Go beyond the build</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            CameraHub's AI tools elevate your photography projects through optimization, editing suggestions, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AIToolCard
            title="Smart Editing"
            description="AI-powered editing suggestions to enhance your photos with just a click."
            image="/smart-editing.jpg"
          />
          <AIToolCard
            title="Auto Tagging"
            description="Automatically tag and categorize your photos for easy organization and searching."
            image="/auto-tagging.jpg"
          />
        </div>
      </div>
    </section>
  );
};

const AIToolCard = ({ title, description, image }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a href="#" className="text-blue-500 font-semibold flex items-center">
          Learn more
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const ExploreResources = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Explore resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ResourceCard
            title="CameraHub University"
            description="Learn photography and editing techniques for free"
            link="#"
          />
          <ResourceCard
            title="Blog"
            description="Tips, tricks, and insights for photographers"
            link="#"
          />
          <ResourceCard
            title="Community"
            description="Connect with fellow photographers and share your work"
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

const ResourceCard = ({ title, description, link }) => {
  return (
    <motion.div
      className="bg-black rounded-lg p-6"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a href={link} className="text-blue-500 font-semibold flex items-center">
        Explore
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  );
};

export default Index;
