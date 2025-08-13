"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Route 64 Synthetic 5W-30",
    category: "Engine Oils",
    brand: "Route 64",
    description: "Premium full synthetic engine oil for modern vehicles",
    image: "/placeholder-zbo1g.png",
    price: "$45.99",
    inStock: true,
  },
  {
    id: 2,
    name: "VTEC Transmission Fluid",
    category: "Transmission Fluids",
    brand: "VTEC",
    description: "High-performance automatic transmission fluid",
    image: "/transmission-fluid-bottle.png",
    price: "$32.99",
    inStock: true,
  },
  {
    id: 3,
    name: "Premium Brake Fluid DOT 4",
    category: "Brake Fluids",
    brand: "MOTORCHEM",
    description: "High-temperature brake fluid for performance vehicles",
    image: "/placeholder-27hu7.png",
    price: "$18.99",
    inStock: false,
  },
  {
    id: 4,
    name: "Coolant Concentrate",
    category: "Coolants",
    brand: "Route 64",
    description: "Long-life antifreeze and coolant concentrate",
    image: "/placeholder-jgqdi.png",
    price: "$24.99",
    inStock: true,
  },
  {
    id: 5,
    name: "Fuel System Cleaner",
    category: "Additives",
    brand: "VTEC",
    description: "Advanced fuel system cleaning additive",
    image: "/placeholder-r5dcb.png",
    price: "$15.99",
    inStock: true,
  },
  {
    id: 6,
    name: "Gear Oil 75W-90",
    category: "Transmission Fluids",
    brand: "MOTORCHEM",
    description: "Heavy-duty gear oil for manual transmissions",
    image: "/placeholder-nmge0.png",
    price: "$28.99",
    inStock: true,
  },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBrand, setSelectedBrand] = useState("all")

  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))]
  const brands = ["all", ...Array.from(new Set(products.map((p) => p.brand)))]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand

    return matchesSearch && matchesCategory && matchesBrand
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 px-4 hero-enhanced">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-red mb-4">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            Premium automotive lubricants and additives from trusted brands
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand === "all" ? "All Brands" : brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="aspect-square relative mb-4 bg-muted rounded-lg overflow-hidden">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{product.brand}</Badge>
                    <Badge variant={product.inStock ? "default" : "destructive"}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-brand-red">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button disabled={!product.inStock} className="btn-primary-enhanced text-white font-semibold">
                      {product.inStock ? "Contact for Quote" : "Out of Stock"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
