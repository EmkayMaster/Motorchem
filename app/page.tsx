import { Navigation } from "@/components/navigation"
import { Hero3D } from "@/components/hero-3d"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Truck, Award, Phone, Mail, Zap, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="bg-red-600/10 text-red-500 border-red-600/20 px-4 py-2 text-sm font-medium"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Premium Automotive Solutions
                </Badge>

                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="text-gradient-red">MOTORCHEM</span>
                    <br />
                    <span className="text-foreground">S.A.</span>
                  </h1>

                  <div className="inline-block">
                    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 text-lg md:text-xl font-bold shadow-lg transform -skew-x-12">
                      <span className="block transform skew-x-12">LUBRICANTS AND ADDITIVES</span>
                    </div>
                  </div>
                </div>

                <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-lg">
                  STOCKIST OF ROUTE 64, VTEC, AND HIGH PERFORMANCE BRANDS
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/products">
                    <Button size="lg" className="btn-primary-enhanced text-white font-semibold px-8 py-4 text-lg">
                      <Zap className="mr-2 w-5 h-5" />
                      View Products
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent px-8 py-4 text-lg font-semibold"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600">29+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600">50+</div>
                  <div className="text-sm text-muted-foreground">Product Lines</div>
                </div>
              </div>
            </div>

            {/* Right Content - 3D Scene */}
            <div className="relative h-[600px] lg:h-[700px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl overflow-hidden">
                <Hero3D />
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-white text-sm font-medium">Interactive 3D View</p>
              </div>

              <div className="absolute bottom-4 left-4 bg-red-600/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-white text-sm font-bold">Premium Quality</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-red-950/5"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-red">Why Choose MOTORCHEM?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading supplier of premium automotive lubricants and additives with decades of expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Premium Quality</CardTitle>
                <CardDescription className="text-base">
                  High-performance lubricants from trusted brands like Route 64 and VTEC
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Fast Delivery</CardTitle>
                <CardDescription className="text-base">
                  Quick and reliable delivery across the region with extensive stock availability
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Expert Support</CardTitle>
                <CardDescription className="text-base">
                  Professional technical support and consultation for all your automotive needs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-red">Our Product Range</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive selection of automotive lubricants and additives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Engine Oils", description: "Premium synthetic and conventional engine oils", icon: "🛢️" },
              { name: "Transmission Fluids", description: "High-performance transmission and gear oils", icon: "⚙️" },
              { name: "Brake Fluids", description: "DOT 3, DOT 4, and DOT 5.1 brake fluids", icon: "🛑" },
              { name: "Coolants", description: "Antifreeze and cooling system additives", icon: "❄️" },
              { name: "Additives", description: "Fuel and oil additives for enhanced performance", icon: "⚡" },
              { name: "Specialty Products", description: "Custom solutions for specific applications", icon: "🔧" },
            ].map((product, index) => (
              <Card key={index} className="border-border/50 hover:border-red-500/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="text-3xl mb-3">{product.icon}</div>
                  <CardTitle className="text-lg group-hover:text-red-600 transition-colors">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
              >
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us today for premium automotive lubricants and expert consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4">
                <Phone className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-red-600 bg-transparent px-8 py-4 font-semibold"
              >
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-brand-red">MOTORCHEM S.A.</h3>
              <p className="text-muted-foreground">Premium automotive lubricants and additives supplier</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/products" className="hover:text-red-600 transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-red-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-red-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Engine Oils</li>
                <li>Transmission Fluids</li>
                <li>Brake Fluids</li>
                <li>Additives</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@motorchem.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 MOTORCHEM S.A. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
