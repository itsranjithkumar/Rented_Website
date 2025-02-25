import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This would normally come from your API or database
const products = {
  electronics: [
    {
      id: "e1",
      name: "Wireless Headphones",
      price: 199.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "High-quality wireless headphones with noise cancellation",
      status: "In Stock",
    },
    {
      id: "e2",
      name: "Smart Watch",
      price: 299.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Feature-rich smartwatch with health tracking",
      status: "Limited Stock",
    },
    {
      id: "e3",
      name: "Bluetooth Speakers",
      price: 149.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Portable Bluetooth speakers with great sound quality",
      status: "In Stock",
    },
    {
      id: "e4",
      name: "Gaming Laptop",
      price: 1299.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "High-performance gaming laptop with powerful graphics",
      status: "In Stock",
    },
    {
      id: "e5",
      name: "USB Microphone",
      price: 99.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "High-quality USB microphone for streaming and recording",
      status: "In Stock",
    },
    {
      id: "e6",
      name: "ViewSonic M1 Mini Plus",
      price: 349.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Portable mini projector with built-in Wi-Fi",
      status: "In Stock",
    },
    // Add more products...
  ],
  clothing: [
    {
      id: "d4",
      name: "Drone with Operator Phantom 4 Pro with Live",
      price: 10000,
      image: "/placeholder.svg?height=300&width=300",
      description: "High-performance drone with operator",
      status: "In Stock",
    },
    {
      id: "d5",
      name: "Drone DJI Air 2S on Rent",
      price: 9858,
      image: "/placeholder.svg?height=300&width=300",
      description: "DJI Air 2S drone available for rent",
      status: "In Stock",
    },
    {
      id: "d6",
      name: "Drone DJI Air 2S with Smart Controller Remote on Rent",
      price: 5570,
      image: "/placeholder.svg?height=300&width=300",
      description: "DJI Air 2S with Smart Controller Remote",
      status: "In Stock",
    },
    {
      id: "d7",
      name: "Drone Phantom 4 Pro on Rent",
      price: 2785,
      image: "/placeholder.svg?height=300&width=300",
      description: "Phantom 4 Pro available for rent",
      status: "In Stock",
    },
    {
      id: "d8",
      name: "Thermal Drone on Rent",
      price: 25000,
      image: "/placeholder.svg?height=300&width=300",
      description: "Thermal drone available for rent",
      status: "In Stock",
    },
    {
      id: "d9",
      name: "Mini 3 Drone on Rent",
      price: 0,
      image: "/placeholder.svg?height=300&width=300",
      description: "Mini 3 Drone available for rent",
      status: "In Stock",
    },
    // Add more products...
  ],
  home: [
    {
      id: "h1",
      name: "Table Lamp",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Modern design table lamp",
      status: "In Stock",
    },
    {
      id: "h2",
      name: "Throw Pillow",
      price: 29.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Decorative throw pillow",
      status: "Limited Stock",
    },
    // Add more products...
  ],
  appliances: [
    {
      id: "a1",
      name: "Room Oil Heater",
      price: 1250,
      image: "/placeholder.svg?height=300&width=300",
      description: "Room Oil Heater",
      status: "In Stock",
    },
    {
      id: "a2",
      name: "Air Purifier & Geyser Combo on Rent",
      price: 1150,
      image: "/placeholder.svg?height=300&width=300",
      description: "Air Purifier & Geyser Combo",
      status: "In Stock",
    },
    {
      id: "a3",
      name: "Air Purifier Small on Rent",
      price: 700,
      image: "/placeholder.svg?height=300&width=300",
      description: "Air Purifier Small",
      status: "In Stock",
    },
    {
      id: "a4",
      name: "OTG on Rent",
      price: 750,
      image: "/placeholder.svg?height=300&width=300",
      description: "OTG",
      status: "In Stock",
    },
    {
      id: "a5",
      name: "Kitchen Combo Deal of 4 on Rent",
      price: 2800,
      image: "/placeholder.svg?height=300&width=300",
      description: "Kitchen Combo Deal of 4",
      status: "In Stock",
    },
    // Add more products...
  ],
  sports: [
    {
      id: "s1",
      name: "Yoga Mat",
      price: 39.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Non-slip yoga mat",
      status: "In Stock",
    },
    {
      id: "s2",
      name: "Dumbbells Set",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Adjustable dumbbells set",
      status: "In Stock",
    },
    {
      id: "s3",
      name: "Resistance Bands",
      price: 29.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Set of resistance bands for strength training",
      status: "In Stock",
    },
    {
      id: "s4",
      name: "Kettlebell",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Adjustable kettlebell for full-body workouts",
      status: "In Stock",
    },
    {
      id: "s5",
      name: "Jump Rope",
      price: 19.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Durable jump rope for cardio workouts",
      status: "In Stock",
    },
    {
      id: "s6",
      name: "Exercise Ball",
      price: 34.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Stability ball for core workouts",
      status: "In Stock",
    },
    {
      id: "s7",
      name: "Foam Roller",
      price: 24.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Foam roller for muscle recovery",
      status: "In Stock",
    },
    {
      id: "s8",
      name: "Exercise Resistance Bands Set",
      price: 34.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Set of resistance bands for strength training",
      status: "In Stock",
    },
  ],
}

interface ProductListProps {
  categoryId: string
}

export function ProductList({ categoryId }: ProductListProps) {
  const categoryProducts = products[categoryId as keyof typeof products] || []

  return (
    <div className="space-y-4">
      <div className="flex justify-center items-center mb-4">
        {/* <h2 className="text-2xl font-bold text-gray-800">Explore Our Product Range</h2> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible">
        {categoryProducts.map((product) => (
          <Card key={product.id} className="group cursor-pointer hover:shadow-lg hover:bg-gray-100 transition-all duration-300 rounded-lg">
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  <Badge variant={product.status === "In Stock" ? "default" : "secondary"}>{product.status}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ProductList;