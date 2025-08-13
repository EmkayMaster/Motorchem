"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Upload, Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react"

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState("products")
  const { toast } = useToast()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple demo login - in production, use proper authentication
    setIsLoggedIn(true)
    toast({
      title: "Login successful",
      description: "Welcome to the admin panel",
    })
  }

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Product added",
      description: "New product has been added successfully",
    })
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle>Admin Login</CardTitle>
              <CardDescription>Enter your credentials to access the admin panel</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} required />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Admin Panel</h1>
              <p className="text-muted-foreground">Manage your website content</p>
            </div>
            <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
              Logout
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-4 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex space-x-4">
            {["products", "images", "content"].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                onClick={() => setActiveTab(tab)}
                className="capitalize"
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          {activeTab === "products" && (
            <div className="space-y-8">
              {/* Add Product Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    Add New Product
                  </CardTitle>
                  <CardDescription>Add a new product to your catalog</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddProduct} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="productName">Product Name</Label>
                        <Input id="productName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="productBrand">Brand</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select brand" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="route64">Route 64</SelectItem>
                            <SelectItem value="vtec">VTEC</SelectItem>
                            <SelectItem value="motorchem">MOTORCHEM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="productCategory">Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="engine-oils">Engine Oils</SelectItem>
                            <SelectItem value="transmission-fluids">Transmission Fluids</SelectItem>
                            <SelectItem value="brake-fluids">Brake Fluids</SelectItem>
                            <SelectItem value="coolants">Coolants</SelectItem>
                            <SelectItem value="additives">Additives</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="productPrice">Price</Label>
                        <Input id="productPrice" type="number" step="0.01" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="productDescription">Description</Label>
                      <Textarea id="productDescription" rows={3} placeholder="Enter product description..." />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="productImage">Product Image</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                        <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground mb-2">Drag and drop an image here, or click to select</p>
                        <Input type="file" accept="image/*" className="hidden" />
                        <Button variant="outline">Choose File</Button>
                      </div>
                    </div>

                    <Button type="submit" className="bg-primary hover:bg-primary/90">
                      Add Product
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Existing Products */}
              <Card>
                <CardHeader>
                  <CardTitle>Existing Products</CardTitle>
                  <CardDescription>Manage your current product catalog</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Route 64 Synthetic 5W-30",
                        brand: "Route 64",
                        category: "Engine Oils",
                        price: "$45.99",
                        status: "In Stock",
                      },
                      {
                        name: "VTEC Transmission Fluid",
                        brand: "VTEC",
                        category: "Transmission Fluids",
                        price: "$32.99",
                        status: "In Stock",
                      },
                      {
                        name: "Premium Brake Fluid DOT 4",
                        brand: "MOTORCHEM",
                        category: "Brake Fluids",
                        price: "$18.99",
                        status: "Out of Stock",
                      },
                    ].map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold">{product.name}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="secondary">{product.brand}</Badge>
                            <Badge variant="outline">{product.category}</Badge>
                            <Badge variant={product.status === "In Stock" ? "default" : "destructive"}>
                              {product.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-primary">{product.price}</span>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "images" && (
            <Card>
              <CardHeader>
                <CardTitle>Image Management</CardTitle>
                <CardDescription>Upload and manage images for your website</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                  <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">Upload Images</h3>
                  <p className="text-muted-foreground mb-4">
                    Drag and drop images here, or click to select multiple files
                  </p>
                  <Button className="bg-primary hover:bg-primary/90">Choose Files</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "content" && (
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Homepage Content</CardTitle>
                  <CardDescription>Edit the main content on your homepage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="heroTitle">Hero Title</Label>
                    <Input id="heroTitle" defaultValue="MOTORCHEM S.A." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                    <Input id="heroSubtitle" defaultValue="LUBRICANTS AND ADDITIVES" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="heroDescription">Hero Description</Label>
                    <Textarea
                      id="heroDescription"
                      rows={3}
                      defaultValue="STOCKIST OF ROUTE 64, VTEC, AND HIGH PERFORMANCE BRANDS"
                    />
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Update your contact details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue="info@motorchem.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      rows={3}
                      defaultValue="123 Industrial Avenue&#10;Business District&#10;City, State 12345"
                    />
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
