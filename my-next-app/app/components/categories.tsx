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
    image: "/placeholder.svg?height=200&width=200",
    description: "Latest gadgets and electronic devices",
  },
  {
    id: "clothing",
    name: "Drones",
    image: "/placeholder.svg?height=200&width=200",
    description: "Fashion and apparel",
  },
  {
    id: "home",
    name: "Home Appliances",
    image: "/placeholder.svg?height=200&width=200",
    description: "Home decor and furniture",
  },
  {
    id: "sports",
    name: "Sports",
    image: "/placeholder.svg?height=200&width=200",
    description: "Sports equipment and accessories",
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
        <div>
          <h1 className="text-3xl font-bold mb-8">Browse Categories</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="group cursor-pointer transition-all hover:shadow-lg hover:bg-gray-100 rounded-lg"
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h2 className="text-xl font-semibold group-hover:text-primary">{category.name}</h2>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">{categories.find((cat) => cat.id === selectedCategory)?.name}</h1>
            <Button variant="ghost" onClick={() => setSelectedCategory(null)}>
              ← Back to Categories
            </Button>
          </div>
          <div className="overflow-visible">
            <ProductList categoryId={selectedCategory} />
          </div>
        </div>
      )}
    </div>
  )
}