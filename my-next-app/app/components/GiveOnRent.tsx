"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { X, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react'

export function GiveOnRent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    productName: '',
    productDescription: '',
    rentalPrice: ''
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Simulated submission logic
      console.log('Submitted:', formData)
      setSubmissionStatus('success')
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setSubmissionStatus('idle')
        setIsModalOpen(false)
        setFormData({
          name: '',
          email: '',
          productName: '',
          productDescription: '',
          rentalPrice: ''
        })
      }, 2000)
    } catch {
      setSubmissionStatus('error')
    }
  }

  const benefits = [
    {
      icon: <span className="text-green-500">💰</span>,
      title: "Maximize Income",
      description: "Turn unused items into a steady revenue stream"
    },
    {
      icon: <span className="text-blue-500">🔒</span>,
      title: "Secure Platform",
      description: "Comprehensive protection for renters and owners"
    },
    {
      icon: <span className="text-purple-500">🌍</span>,
      title: "Sustainable Sharing",
      description: "Reduce waste, promote circular economy"
    }
  ]

  return (
    <>
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Transform Idle Items into Income
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                RentPro connects you with potential renters, helping you earn from items you&apos;re not using.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-3 text-base 
                  bg-black text-white 
                  hover:bg-gray-800 
                  transition-colors 
                  rounded-full 
                  shadow-lg 
                  hover:shadow-xl 
                  group 
                  relative 
                  overflow-hidden"
              >
                <span className="relative z-10">List Your Product</span>
                <span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                    transform -translate-x-full group-hover:translate-x-0"
                ></span>
              </Button>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-8 flex flex-col items-center justify-center"
              >
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="flex flex-col items-center"
                >
                  <ChevronDown 
                    className="h-8 w-8 text-gray-500 animate-bounce" 
                    strokeWidth={2} 
                  />
                  <span className="text-sm text-gray-500 mt-2">
                    Scroll Down
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-md mx-4 rounded-2xl shadow-2xl p-8 relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {submissionStatus === 'idle' ? (
                <>
                  <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
                    List Your Product
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input 
                      placeholder="Your Name" 
                      className="py-3 px-4 text-base border-gray-300 focus:border-blue-500"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="py-3 px-4 text-base border-gray-300 focus:border-blue-500"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                    <Input 
                      placeholder="Product Name" 
                      className="py-3 px-4 text-base border-gray-300 focus:border-blue-500"
                      value={formData.productName}
                      onChange={(e) => setFormData({...formData, productName: e.target.value})}
                      required
                    />
                    <Textarea 
                      placeholder="Product Description" 
                      className="py-3 px-4 text-base min-h-[120px] border-gray-300 focus:border-blue-500"
                      value={formData.productDescription}
                      onChange={(e) => setFormData({...formData, productDescription: e.target.value})}
                      required
                    />
                    <Input 
                      type="number" 
                      placeholder="Rental Price per Day" 
                      className="py-3 px-4 text-base border-gray-300 focus:border-blue-500"
                      value={formData.rentalPrice}
                      onChange={(e) => setFormData({...formData, rentalPrice: e.target.value})}
                      required
                    />
                    <Button 
                      type="submit" 
                      className="w-full py-4 text-base 
                        bg-black text-white 
                        hover:bg-gray-800 
                        transition-colors 
                        rounded-full 
                        shadow-lg 
                        hover:shadow-xl 
                        group 
                        relative 
                        overflow-hidden"
                    >
                      <span className="relative z-10">Submit Product Listing</span>
                      <span 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                          transform -translate-x-full group-hover:translate-x-0"
                      ></span>
                    </Button>
                  </form>
                </>
              ) : submissionStatus === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Listing Submitted!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ll review your product and get back to you soon.
                  </p>
                </div>
              ) : (
                <div className="text-center py-12">
                  <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Submission Failed
                  </h3>
                  <p className="text-gray-600">
                    Please try again or contact support.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default GiveOnRent