import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const clients = [
  { name: 'National Geographic', logo: '/nat-geo-logo.png' },
  { name: 'Sony Pictures', logo: '/sony-logo.png' },
  { name: 'Canon', logo: '/canon-logo.png' },
  { name: 'Nikon', logo: '/nikon-logo.png' },
  { name: 'Adobe', logo: '/adobe-logo.png' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Professional Photographer',
    content: "The cameras from CameraHub have revolutionized my photography. The image quality is unparalleled!",
    avatar: '/avatar1.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Videographer',
    content: "As a videographer, I need reliable equipment. CameraHub delivers every time with their top-notch products.",
    avatar: '/avatar2.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Travel Blogger',
    content: "I've been using CameraHub gear for all my travels. Durable, lightweight, and produces stunning footage.",
    avatar: '/avatar3.jpg',
  },
];

const ClientsAndTestimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Clients & Testimonials</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Trusted by Industry Leaders</h3>
          <div className="flex justify-center items-center flex-wrap gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={client.logo} alt={client.name} className="h-12 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 flex-grow">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsAndTestimonials;
