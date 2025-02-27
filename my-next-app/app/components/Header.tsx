"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Rentals", href: "/rentals" },
  { name: "Categories", href: "/categories" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Support", href: "/support" },
]

const products = {
  electronics: [
    { id: 1, name: "Laptop", description: "A laptop for work and play", price: 999.99, status: "In Stock", images: ["/laptop.jpg"] },
    { id: 2, name: "Smartphone", description: "A smartphone for staying connected", price: 599.99, status: "In Stock", images: ["/smartphone.jpg"] },
  ],
  clothing: [
    { id: 3, name: "T-Shirt", description: "A comfortable t-shirt for everyday wear", price: 19.99, status: "In Stock", images: ["/t-shirt.jpg"] },
    { id: 4, name: "Jeans", description: "A pair of jeans for casual wear", price: 49.99, status: "In Stock", images: ["/jeans.jpg"] },
  ],
  home: [
    { id: 5, name: "Coffee Table", description: "A coffee table for your living room", price: 99.99, status: "In Stock", images: ["/coffee-table.jpg"] },
    { id: 6, name: "Lamp", description: "A lamp for brightening up your space", price: 29.99, status: "In Stock", images: ["/lamp.jpg"] },
  ],
  sports: [
    { id: 7, name: "Basketball", description: "A basketball for playing hoops", price: 29.99, status: "In Stock", images: ["/basketball.jpg"] },
    { id: 8, name: "Soccer Ball", description: "A soccer ball for playing the beautiful game", price: 19.99, status: "In Stock", images: ["/soccer-ball.jpg"] },
  ],
  "gym-equipment": [
    { id: 9, name: "Dumbbells", description: "A pair of dumbbells for working out", price: 49.99, status: "In Stock", images: ["/dumbbells.jpg"] },
    { id: 10, name: "Yoga Mat", description: "A yoga mat for stretching and flexibility", price: 19.99, status: "In Stock", images: ["/yoga-mat.jpg"] },
  ],
}

export function Header() {
  const pathname = usePathname()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])

  const handleSearch = () => {
    // Implement basic search logic
    const allProducts = [
      ...products.electronics,
      ...products.clothing,
      ...products.home,
      ...products.sports,
      ...products["gym-equipment"]
    ]

    const results = allProducts.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setSearchResults(results)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-300/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-semibold text-gray-900">RentPro</span>
          </Link>
          <nav className="hidden md:flex md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors duration-200 ease-in-out hover:text-gray-900 ${
                  pathname === item.href ? "text-gray-900" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsLocationModalOpen(true)}
            >
              <MapPin className="h-5 w-5" />
              <span className="sr-only">Set Location</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsSearchModalOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </div>
      {isCartOpen && (
        <div className="absolute right-4 mt-2 w-64 rounded-lg bg-white p-4 shadow-lg">
          <h3 className="mb-2 text-lg font-semibold">Your Cart</h3>
          <p className="text-gray-600">Your cart is empty</p>
        </div>
      )}
      {isLocationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-11/12 rounded-lg bg-white p-6 shadow-lg md:w-1/3">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
              onClick={() => setIsLocationModalOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
            <h2 className="mb-4 text-xl font-bold">Welcome to RentalPro</h2>
            <p className="mb-2 text-sm text-gray-600">Search for pincode or city name.</p>
            <div className="mb-4 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Enter pincode or city name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
              />
              <Button onClick={handleSearch}>Search</Button>
            </div>
            <p className="text-sm text-gray-600">Please provide your location to find products near you.</p>
          </div>
        </div>
      )}
      {isSearchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pt-32">
          <div className="relative w-11/12 rounded-lg bg-white p-6 shadow-lg md:w-2/3 max-h-[80vh] overflow-y-auto">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
              onClick={() => {
                setIsSearchModalOpen(false)
                setSearchResults([])
              }}
            >
              <span className="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
            <h2 className="mb-4 text-xl font-bold">Search Products</h2>
            <div className="mb-4 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search RentPro"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button onClick={handleSearch}>Search</Button>
            </div>

            {/* Popular Searches */}
            <div className="mt-4">
              <h3 className="text-base font-semibold mb-2">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {["Electronics", "Drones", "Home Appliances", "Sports Equipment", "Gym Equipment"].map((tag) => (
                  <Button
                    key={tag}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchTerm(tag)
                      handleSearch()
                    }}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Search Results ({searchResults.length})</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {searchResults.map((product) => (
                    <div 
                      key={product.id} 
                      className="border rounded-lg p-2 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => {
                        // TODO: Implement product detail navigation or modal
                        console.log("Selected product:", product)
                      }}
                    >
                      <div className="relative aspect-square mb-2">
                        <Image
                          src={product.images[0] || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="p-2">
                        <h4 className="text-sm font-medium truncate">{product.name}</h4>
                        <p className="text-xs text-gray-500 truncate">{product.description}</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm font-bold">${product.price.toFixed(2)}</span>
                          <Badge variant={product.status === "In Stock" ? "default" : "secondary"}>
                            {product.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {searchTerm && searchResults.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <p>No products found matching your search.</p>
                <p className="text-sm mt-2">Try different keywords or browse our categories.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
