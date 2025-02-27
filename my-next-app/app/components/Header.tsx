"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Rentals", href: "/rentals" },
  { name: "Categories", href: "/categories" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Support", href: "/support" },
]

export function Header() {
  const pathname = usePathname()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = () => {
    console.log("Search term:", searchTerm)
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
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900" onClick={handleSearch}>
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
    </header>
  )
}

export default Header
