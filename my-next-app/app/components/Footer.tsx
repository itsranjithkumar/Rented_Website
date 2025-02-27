import React from "react"
import Link from "next/link"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin 
} from "lucide-react"

const footerNavigation = {
  products: [
    { name: "Electronics", href: "/categories/electronics" },
    { name: "Home Appliances", href: "/categories/home" },
    { name: "Sports Equipment", href: "/categories/sports" },
    { name: "Gym Equipment", href: "/categories/gym-equipment" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" }
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Rental Agreement", href: "/rental-agreement" }
  ]
}

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">RentPro</h2>
          <p className="text-sm text-gray-700">
            Experience technology without the commitment. Rent premium devices and equipment for your every need.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
          <ul className="space-y-2">
            {footerNavigation.products.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2">
            {footerNavigation.company.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">123 Tech Lane, Silicon Valley</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">(555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">support@rentpro.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-300 text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} RentPro. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer