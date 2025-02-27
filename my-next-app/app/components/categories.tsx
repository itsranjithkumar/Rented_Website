"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProductList } from "./productlist"

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    image: "/electornics.jpg",
    description: "Latest gadgets and electronic devices",
  },
  {
    id: "clothing",
    name: "Drones",
    image: "/drone.jpg",
    description: "Fashion and apparel",
  },
  {
    id: "home",
    name: "Home Appliances",
    image: "/electronics.jpg",
    description: "Home decor and furniture",
  },
  {
    id: "sports",
    name: "Sports",
    image: "/sports.jpeg",
    description: "Sports equipment and accessories",
  },
  {
    id: "gym-equipment",
    name: "Gym Equipment",
    image: "/gym.jpg",
    description: "High-quality gym equipment for home and professional use",
  },
]

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        {/* <span>Home</span> */}
        {selectedCategory && (
          <>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">
              {categories.find((cat) => cat.id === selectedCategory)?.name}
            </span>
          </>
        )}
      </div>

      {!selectedCategory ? (
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Browse Categories</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="group cursor-pointer transition-all duration-300 
                           hover:shadow-xl hover:scale-105 
                           rounded-2xl border-2 border-transparent 
                           hover:border-blue-100 
                           bg-white"
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 space-y-3 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 space-y-8">
          <div className="flex items-center justify-center relative">
            <Button 
              variant="outline"
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="absolute left-0 flex items-center gap-2 
                         text-gray-700 hover:text-blue-600 
                         border-gray-300 hover:border-blue-300
                         bg-white hover:bg-gray-50
                         rounded-full
                         px-4 py-2
                         text-sm
                         transition-all duration-300
                         hover:shadow-sm"
            >
              <ChevronRight className="h-4 w-4 transform rotate-180" />
              Back to Categories
            </Button>
            <h1 className="text-4xl font-bold text-center text-gray-800 flex-grow">
              {categories.find((cat) => cat.id === selectedCategory)?.name}
            </h1>
          </div>
          <div className="overflow-visible">
            <ProductList categoryId={selectedCategory} />
          </div>
        </div>
      )}
    </div>
  )
}