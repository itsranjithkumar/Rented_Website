"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Enhanced product type with multiple images
interface Product {
  id: string
  name: string
  price: number
  images: string[] // Array of image URLs
  description: string
  status: string
  uses?: string // Additional information about product uses
}

// Updated products data with multiple images per product
const products: Record<string, Product[]> = {
  electronics: [
    {
      id: "e1",
      name: "Hand Microphone",
      price: 129.99,
      images: ["/Hand Microphone.jpg", "/Hand Microphone1.jpg", "/Hand Microphone2.jpg"],
      description: "Professional speech microphone for presentations and recordings",
      status: "In Stock",
      uses: "Perfect for conferences, presentations, podcasts, and professional audio recording. Features noise cancellation and crystal clear sound quality.",
    },
    {
      id: "e2",
      name: "Smart Watch",
      price: 299.99,
      images: ["/smart watch.jpg", "/Smart Watch1.jpg", "/Smart Watch2.jpg"],
      description: "Feature-rich smartwatch with health tracking",
      status: "Limited Stock",
      uses: "Track your fitness goals, monitor heart rate, receive notifications, and control music playback. Water-resistant and includes GPS tracking.",
    },
    {
      id: "e3",
      name: "Wireless Microphone",
      price: 149.99,
      images: ["/wireless.jpg", "/Wireless Microphone1.jpg", "/Wireless Microphone2.jpg"],
      description: "Professional wireless microphone system with noise reduction",
      status: "In Stock",
      uses: "Ideal for stage performances, public speaking, and video production. Provides freedom of movement with reliable wireless connectivity.",
    },
    {
      id: "e4",
      name: "Laptop",
      price: 1299.99,
      images: ["/laptop.jpg", "/laptop1.jpg", "/laptop2.jpg"],
      description: "High-performance gaming laptop with powerful graphics",
      status: "In Stock",
      uses: "Perfect for gaming, video editing, 3D rendering, and professional work. Features high refresh rate display and advanced cooling system.",
    },
    {
      id: "e5",
      name: "4K Projector",
      price: 399.99,
      images: ["/projector.jpg", "/projector-side.jpg", "/projector-back.jpg"],
      description: "Ultra-high definition projector with smart features",
      status: "In Stock",
      uses: "Create a home theater experience, deliver professional presentations, or enjoy outdoor movie nights. Supports wireless streaming from multiple devices.",
    },
    {
      id: "e6",
      name: "Bluetooth Sound Speaker",
      price: 199.99,
      images: ["/speaker-top0.jpg", "/speaker-top.jpg", "/speaker-top1.jpg"],
      description: "Portable Bluetooth speaker with premium sound quality",
      status: "In Stock",
      uses: "Enjoy music anywhere with rich bass and clear treble. Waterproof design makes it perfect for pool parties, beach trips, and outdoor adventures.",
    },
  ],
  clothing: [
    {
      id: "d4",
      name: "Drone with Operator Phantom 4 Pro with Live",
      price: 10000,
      images: ["/drone1.jpg", "/Drone.jpg", "/drone1.jpg"],
      description: "High-performance drone with operator",
      status: "In Stock",
      uses: "Professional aerial photography, videography, surveying, and event coverage. Comes with an experienced operator for optimal results.",
    },
    {
      id: "d5",
      name: "Drone DJI Air 2S on Rent",
      price: 9858,
      images: ["/drone2.jpg", "/Dronee.jpg", "/Dronee1.jpg"],
      description: "DJI Air 2S drone available for rent",
      status: "In Stock",
      uses: "Professional aerial photography, videography, surveying, and event coverage. Comes with an experienced operator for optimal results.",
    },
    {
      id: "d6",
      name: "Drone DJI Air 2S with Smart Controller Remote on Rent",
      price: 5570,
      images: ["/drone3.jpg", "/Remote.jpg", "/Remote1.jpg"],
      description: "DJI Air 2S with Smart Controller Remote",
      status: "In Stock",
      uses: "Professional aerial photography, videography, surveying, and event coverage. Comes with an experienced operator for optimal results.",
    },
    {
      id: "d7",
      name: "Drone Phantom 4 Pro on Rent",
      price: 2785,
      images: ["/drone4.jpg", "/Droneee.jpg", "/Droneee1.jpg"],
      description: "Phantom 4 Pro available for rent",
      status: "In Stock",
      uses: "Professional aerial photography, videography, surveying, and event coverage. Comes with an experienced operator for optimal results.",
    },
    {
      id: "d8",
      name: "Thermal Drone on Rent",
      price: 25000,
      images: ["/drone5.jpg", "/Thermal.jpg", "/Thermal1.jpg"],
      description: "Thermal drone available for rent",
      status: "In Stock",
      uses: "Professional thermal imaging, surveillance, and environmental monitoring. Comes with an experienced operator for optimal results.",
    },
    {
      id: "d9",
      name: "Mini 3 Drone on Rent",
      price: 0,
      images: ["/drone6.jpg", "/Mini.jpg", "/Mini 2.jpg"],
      description: "Mini 3 Drone available for rent",
      status: "In Stock",
      uses: "Lightweight and compact, perfect for on-the-go photography and videography. Comes with an experienced operator for optimal results.",
    },
  ],
    home: [
      {
        id: "h1",
        name: "Room Oil Heater",
        price: 1250,
        images: ["/airheater.jpg", "/Room1.jpg", "/Room2.jpg"],
        description: "Portable room oil heater for efficient heating",
        status: "In Stock",
        uses: "Ideal for heating rooms, bathrooms, and kitchens. Comes with a built-in thermostat for precise temperature control.",
      },
      {
        id: "h2",
        name: "Air Purifier",
        price: 1150,
        images: ["/airpurifier.jpg", "/Air1.jpg", "/Air2.jpg"],
        description: "Advanced air purification system for clean indoor air",
        status: "In Stock",
        uses: "Efficient and safe for all types of air, ideal for residential and commercial use.",
      },
      {
        id: "h3",
        name: "Water Dispenser",
        price: 899,
        images: ["/Water-Dispenser.jpg", "/Water1.jpg", "/Water2.jpg"],
        description: "Hot and cold water dispenser with filtration system",
        status: "In Stock",
        uses: "Hot and cold water, filtration, and smart control features.",
      },
      {
        id: "h4",
        name: "Induction Cooktop",
        price: 599,
        images: ["/Induction-Cooktop.jpg", "/Induction1.jpg", "/Induction2.jpg"],
        description: "Energy-efficient portable induction cooktop",
        status: "In Stock",
        uses: "Ideal for cooking, cleaning, and home improvement projects. Features automatic temperature control and smart home connectivity.",
      },
      {
        id: "h5",
        name: "Dishwasher",
        price: 1499,
        images: ["/Dishwasher.jpg", "/Dishwasher1.jpg", "/Dishwasher2.jpg"],
        description: "Compact dishwasher with multiple wash cycles",
        status: "In Stock",
        uses: "Ideal for household use, with programmable settings and smart app integration.",
      },
    ],

    sports: [
      {
        id: "s1",
        name: "Yoga Mat",
        price: 39.99,
        images: ["/Yoga Mat.jpg", "/Yoga1.jpg", "/Yoga2.jpg"],
        description: "Non-slip yoga mat",
        status: "In Stock",
        uses: "Ideal for yoga, fitness, and home improvement projects.",
      },
      // {
      //   id: "s2",
      //   name: "Dumbbells Set",
      //   price: 89.99,
      //   image: "/placeholder.svg?height=300&width=300",
      //   description: "Adjustable dumbbells set",
      //   status: "In Stock",
      // },
      {
        id: "s3",
        name: "Resistance Bands",
        price: 29.99,
        images: ["/Resistance Bands.jpg", "/Resistance1.jpg", "/Resistance2.jpg"],
        description: "Set of resistance bands for strength training",
        status: "In Stock",
        uses: "Ideal for strength training, fitness, and home improvement projects.",
      },
      {
        id: "s4",
        name: "Kettlebell",
        price: 49.99,
        images: ["/Kettlebell.jpg", "/Kettlebell1.jpg", "/Kettlebell2.jpg"],
        description: "Adjustable kettlebell for full-body workouts",
        status: "In Stock",
        uses: "Ideal for strength training, fitness, and home improvement projects.",
      },
      {
        id: "s5",
        name: "Jump Rope",
        price: 19.99,
        images: ["/Jump Rope.jpg", "/Jump1.jpg", "/Jump2.jpg"],
        description: "Durable jump rope for cardio workouts",
        status: "In Stock",
        uses: "Ideal for strength training, fitness, and home improvement projects.",
      },
      {
        id: "s6",
        name: "Exercise Ball",
        price: 34.99,
        images: ["/Exercise Ball.jpg", "/Ball1.jpg", "/Ball2.jpg"],
        description: "Stability ball for core workouts",
        status: "In Stock",
        uses: "Ideal for strength training, fitness, and home improvement projects.",
      },
      {
        id: "s7",
        name: "Foam Roller",
        price: 24.99,
        images: ["/Foam Roller.jpg", "/Foam1.jpg", "/Foam2.jpg"],
        description: "Foam roller for muscle recovery",
        status: "In Stock",
        uses: "Ideal for strength training, fitness, and home improvement projects.",
      },
      // {
      //   id: "s8",
      //   name: "Exercise Resistance Bands Set",
      //   price: 34.99,
      //   images: ["/Foam Roller.jpg", "/Foam Roller-controller.jpg", "/Foam Roller-camera.jpg"],
      //   description: "Foam roller for muscle recovery",
      //   status: "In Stock",
      //   uses: "Ideal for strength training, fitness, and home improvement projects.",
      // },
      // {
      //   id: "s8",
      //   name: "Exercise Resistance Bands Set",
      //   price: 34.99,
      //   image: "/placeholder.svg?height=300&width=300",
      //   description: "Set of resistance bands for strength training",
      //   status: "In Stock",
      // },
      {
        id: "s9",
        name: "Cricket Bat",
        price: 59.99,
        images: ["/Cricket Bat.jpg", "/bat1.jpg", "/bat2.jpg"],
        description: "Professional-grade wooden cricket bat for match play",
        status: "In Stock",
        uses: "Ideal for strength training, fitness, and home improvement projects.",
      },
    ],

    "gym-equipment": [
    {
      id: "g1",
      name: "Treadmill",
      price: 199.99,
      images: ["/Treadmill.jpg", "/Treadmill1.jpg", "/Treadmill2.jpg"],
      description: "Professional-grade electric treadmill with incline",
      status: "In Stock",
      uses: "Ideal for strength training, fitness, and home improvement projects.",
    },
    {
      id: "g2",
      name: "Stationary Bike",
      price: 149.99,
      images: ["/Stationary Bike.jpg", "/bike1.jpg", "/bike2.jpg"],
      description: "Magnetic resistance exercise bike with digital display",
      status: "In Stock",
      uses: "Ideal for strength training, fitness, and home improvement projects.",
    },
    // {
    //   id: "g3",
    //   name: "Power Rack",
    //   price: 299.99,
    //   image: "/placeholder.svg?height=300&width=300",
    //   description: "Full-size power rack for strength training",
    //   status: "In Stock",
    // },
    // {
    //   id: "g4",
    //   name: "Elliptical Machine",
    //   price: 179.99,
    //   images: ["/Elliptical Machine.jpg", "/Elliptical Machine-controller.jpg", "/Elliptical Machine-camera.jpg"],
    //   description: "Low-impact full-body elliptical trainer",
    //   status: "In Stock",
    //   uses: "Ideal for strength training, fitness, and home improvement projects.",
    // },
    // {
    //   id: "g5",
    //   name: "Weight Bench",
    //   price: 129.99,
    //   images: ["/Weight Bench.jpg", "/Weight Bench-controller.jpg", "/Weight Bench-camera.jpg"],
    //   description: "Adjustable weight bench for multiple exercises",
    //   status: "In Stock",
    //   uses: "Ideal for strength training, fitness, and home improvement projects.",
    // },
    {
      id: "g6",
      name: "Smith Machine",
      price: 399.99,
      images: ["/Smith Machine.jpg", "/Smith Machine-controller.jpg", "/Smith Machine-camera.jpg"],
      description: "Commercial-grade Smith machine for guided weightlifting",
      status: "In Stock",
      uses: "Ideal for strength training, fitness, and home improvement projects.",
    },
    
 
    // {
    //   id: "g7",
    //   name: "Rowing Machine",
    //   price: 249.99,
    //   image: "/placeholder.svg?height=300&width=300",
    //   description: "Air resistance rowing machine for full-body workout",
    //   status: "In Stock",
    // },
    {
      id: "g8",
      name: "Dumbbell Sets",
      price: 89.99,
      images: ["/dumbell.jpg", "/Dumbbell1.jpg", "/Dumbbell2.jpg"],
      description: "Adjustable dumbbell set for comprehensive strength training",
      status: "In Stock",
      uses: "Ideal for strength training, fitness, and home improvement projects.",
    }
  ],
}

  





    // Other clothing products with similar structure...
  // Other categories with similar structure...




// For brevity, I'm only showing the electronics category with full details
// The other categories would follow the same pattern

interface ProductListProps {
  categoryId: string
}

export function ProductList({ categoryId }: ProductListProps) {
  const categoryProducts = products[categoryId as keyof typeof products] || []
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const openProductModal = (product: Product) => {
    setSelectedProduct(product)
    setSelectedImageIndex(0)
    setIsModalOpen(true)
  }

  const changeImage = (index: number) => {
    setSelectedImageIndex(index)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible">
        {categoryProducts.map((product) => (
          <Card
            key={product.id}
            className="group cursor-pointer hover:shadow-lg hover:bg-gray-50 transition-all duration-300 rounded-lg"
            onClick={() => openProductModal(product)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden rounded-t-lg h-64">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold group-hover:text-primary">{product.name}</h3>
                  <p className="text-xs text-muted-foreground">{product.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold">${product.price.toFixed(2)}</span>
                  <Badge variant={product.status === "In Stock" ? "default" : "secondary"}>{product.status}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Product Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProduct.name}</DialogTitle>
                <DialogDescription className="text-base">{selectedProduct.description}</DialogDescription>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                {/* Main image and thumbnails */}
                <div className="space-y-4">
                  <div className="relative aspect-square overflow-hidden rounded-lg h-80 border">
                    <Image
                      src={selectedProduct.images[selectedImageIndex] || "/placeholder.svg"}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Image thumbnails */}
                  <div className="flex gap-2 justify-center">
                    {selectedProduct.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation()
                          changeImage(index)
                        }}
                        className={`relative w-16 h-16 border-2 rounded-md overflow-hidden ${
                          selectedImageIndex === index ? "border-primary" : "border-gray-200"
                        }`}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${selectedProduct.name} view ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product details and uses */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Product Details</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Price:</span>
                        <span className="font-bold">${selectedProduct.price.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <Badge variant={selectedProduct.status === "In Stock" ? "default" : "secondary"}>
                          {selectedProduct.status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Uses</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedProduct.uses || "Information not available"}
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full">Add to Cart</Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProductList
