"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentItem, setCurrentItem] = useState('Furniture')
  
  const items = ['Furniture', 'Cameras', 'Electronics', 'Drones']

  useEffect(() => {
    const handleScroll = () => {
      // Removed unused scrolled state
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = items.indexOf(currentItem)
      const nextIndex = (currentIndex + 1) % items.length
      setCurrentItem(items[nextIndex])
    }, 2000)

    return () => clearInterval(interval)
  }, [currentItem, items])

  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background video with improved overlay */}
      <video
        ref={videoRef}
        src="/video4.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />

      <div className="container relative z-20 flex flex-col items-center justify-center h-screen text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-6 mt-[-80px]"
        >
          {/* Apple-style typography */}
          <motion.h1
            className="text-5xl font-medium tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Rent <span className="font-light">
              <motion.span
                key={currentItem}
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                {currentItem}
              </motion.span>
            </span> Premium.
          </motion.h1>

          <motion.p
            className="mx-auto max-w-[600px] text-gray-200 md:text-xl lg:text-2xl font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the latest technology without the commitment.
          </motion.p>

          <motion.div
            className="space-x-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="h-12 px-8 text-lg bg-white text-black hover:bg-white/90 rounded-full transition-all duration-300"
            >
              Browse Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-lg text-white bg-transparent border-white border hover:bg-white/10 rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="text-white h-8 w-8 opacity-70" />
      </motion.div>
    </section>
  )
}

export default Hero
