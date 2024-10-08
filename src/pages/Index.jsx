import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

const Index = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <FeaturedProducts />
        </motion.div>
        <Services />
        <ExploreResources />
      </main>
      <Footer />
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } }
};

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section ref={ref} className="py-16" initial="hidden" animate={controls} variants={containerVariants}>
      <div className="container mx-auto px-4 text-center">
        <motion.div className="mb-16" variants={itemVariants}>
          <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">Our Services</div>
          <h2 className="text-4xl font-bold mb-4">Professional Equipment at Your Fingertips</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            CameraHub offers top-of-the-line camera rentals and a fully equipped studio for all your photography needs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard 
            title="Camera Rentals" 
            description="Choose from our wide selection of professional cameras and lenses for your next shoot." 
            image="/camera-rental.jpg" 
          />
          <ServiceCard 
            title="Studio Reservations" 
            description="Book our state-of-the-art studio space for your photography or videography projects." 
            image="/studio-reservation.jpg" 
          />
        </div>
      </div>
    </motion.section>
  );
};

const ServiceCard = ({ title, description, image }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gray-900 rounded-lg overflow-hidden h-full"
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
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section ref={ref} className="py-16 bg-gray-900" initial="hidden" animate={controls} variants={containerVariants}>
      <div className="container mx-auto px-4">
        <motion.h2 className="text-3xl font-bold mb-8" variants={itemVariants}>Explore resources</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ResourceCard title="CameraHub University" description="Learn photography and editing techniques for free" link="#" />
          <ResourceCard title="Blog" description="Tips, tricks, and insights for photographers" link="#" />
          <ResourceCard title="Community" description="Connect with fellow photographers and share your work" link="#" />
        </div>
      </div>
    </motion.section>
  );
};

const ResourceCard = ({ title, description, link }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-black rounded-lg p-6"
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
