"use client"

import { motion } from 'framer-motion'
import { ChevronRight, ArrowUpRight } from 'lucide-react'

export default function HowItWorksPage() {
  const steps = [
    {
      title: "List Your Item",
      description: "Transform your unused items into a revenue stream with our seamless listing process.",
      details: [
        "Capture professional-quality images",
        "Craft compelling product narratives",
        "Set competitive rental pricing"
      ],
      color: "text-blue-500"
    },
    {
      title: "Secure Verification",
      description: "Experience peace of mind with our comprehensive safety and verification protocols.",
      details: [
        "Advanced identity verification",
        "Comprehensive insurance coverage",
        "Rigorous background screening"
      ],
      color: "text-green-500"
    },
    {
      title: "Earnings Management",
      description: "Effortlessly track, manage, and maximize your rental income through our intuitive platform.",
      details: [
        "Real-time financial dashboard",
        "Instant secure payments",
        "Detailed performance analytics"
      ],
      color: "text-purple-500"
    }
  ]

  const features = [
    {
      title: "Flexible Monetization",
      description: "Convert idle assets into consistent revenue streams"
    },
    {
      title: "Zero Initial Investment",
      description: "Start earning without upfront costs"
    },
    {
      title: "Community-Driven",
      description: "Join a sustainable, collaborative ecosystem"
    },
    {
      title: "Eco-Conscious",
      description: "Promote circular economy and reduce waste"
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
            RentPro: Your Rental Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamlessly transform your unused items into valuable assets with our innovative, user-centric platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all group"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-2xl font-semibold ${step.color}`}>
                  {step.title}
                </h3>
                <ChevronRight className={`h-8 w-8 ${step.color} opacity-0 group-hover:opacity-100 transition-all`} />
              </div>
              <p className="text-gray-600 mb-6">{step.description}</p>
              <ul className="space-y-3 text-gray-700">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 text-white rounded-3xl p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 opacity-20">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="400" 
              height="400" 
              viewBox="0 0 400 400"
              className="text-white"
            >
              <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Why Choose RentPro
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors group"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <ArrowUpRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}