"use client"
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button"; // Ensure the Button component is correctly imported

const Hero = () => {
    const heroRef = useRef(null);
    const backgroundImages = [
        '/phone.jpg',
        '/laptop.jpg',
        '/home.jpg', // Updated image paths
    ];

    const [backgroundIndex, setBackgroundIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [backgroundImages.length]);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div 
                    key={backgroundIndex}
                    animate={{
                        scale: [1, 1.1],
                        backgroundPosition: ['center center', 'center center', 'left top', 'right bottom']
                    }}
                    transition={{
                        duration: 5,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImages[backgroundIndex]})`,
                        backgroundSize: 'contain',
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <div className="absolute inset-0 bg-grid-white/[0.02]" />
                </motion.div>
            </AnimatePresence>
            <div className="container relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center space-y-8"
                >
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                        Rent What You Need
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl lg:text-2xl">
                        Premium laptop rentals with comprehensive IT support for students pursuing their tech dreams.
                    </p>
                    <div className="space-x-4">
                        <Button size="lg" className="h-12 px-8 text-lg">
                            Get Started
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-lg text-black bg-white border-white/50 border-2 hover:bg-white/90 hover:text-black transition-colors duration-300 font-bold tracking-wider shadow-lg hover:shadow-xl">
                            Learn More
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;