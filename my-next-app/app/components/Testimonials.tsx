"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Renting equipment from this website has been a game-changer! I saved thousands by renting a high-end laptop for my project instead of buying.",
    author: "Sarah M.",
    rental: "Laptop Rental",
    duration: "1 Month"
  },
  {
    id: 2,
    text: "The gym equipment rental service is fantastic. I could try professional-grade equipment without a massive upfront investment. Highly recommended!",
    author: "John D.",
    rental: "Gym Equipment",
    duration: "2 Weeks"
  },
  {
    id: 3,
    text: "As a content creator, renting professional cameras and microphones has helped me scale my business without breaking the bank. Amazing service!",
    author: "Alex R.",
    rental: "Electronics",
    duration: "1 Week"
  },
  {
    id: 4,
    text: "The flexibility of renting home appliances is incredible. I could test different models before making a long-term commitment.",
    author: "Emily T.",
    rental: "Home Appliances",
    duration: "3 Weeks"
  }
];

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers who have experienced the convenience and value of our rental services.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
          <div className="max-w-3xl mx-auto py-16 px-6 md:px-12 relative">
            <Quote className="absolute top-0 left-0 text-blue-200 w-20 h-20 -ml-10 -mt-6" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center relative z-10"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl font-medium text-gray-800 italic mb-8">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.rental} - {testimonial.duration} Rental
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-500' 
                      : 'bg-gray-300 hover:bg-blue-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}