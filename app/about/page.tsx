import { Navigation } from "@/components/navigation"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Truck, Shield } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 px-4 hero-enhanced">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-red mb-4">About MOTORCHEM S.A.</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            Your trusted partner in automotive excellence since 1995
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-red">Three Decades of Excellence</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1995, MOTORCHEM S.A. has been at the forefront of automotive lubricant distribution,
                  serving customers across the region with premium products and unmatched expertise.
                </p>
                <p>
                  We specialize in high-performance brands including Route 64, VTEC, and other leading manufacturers,
                  ensuring our customers have access to the finest automotive lubricants and additives available.
                </p>
                <p>
                  Our commitment to quality, reliability, and customer service has made us the preferred choice for
                  automotive professionals, fleet operators, and enthusiasts alike.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/motorchem-hero.png"
                alt="MOTORCHEM facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-red">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-border/50">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Quality First</CardTitle>
                <CardDescription>We only stock premium products from trusted manufacturers</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-border/50">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Customer Focus</CardTitle>
                <CardDescription>Your success is our priority, with personalized service and support</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-border/50">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Expertise</CardTitle>
                <CardDescription>Decades of experience in automotive lubricant solutions</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-border/50">
              <CardHeader>
                <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Reliability</CardTitle>
                <CardDescription>Consistent supply and on-time delivery you can count on</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-red">Our Team</h2>
            <p className="text-xl text-muted-foreground">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Rodriguez",
                position: "Managing Director",
                image: "/professional-man-suit.png",
              },
              {
                name: "Maria Santos",
                position: "Technical Director",
                image: "/professional-businesswoman.png",
              },
              {
                name: "Juan Martinez",
                position: "Sales Manager",
                image: "/professional-man-business-shirt.png",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center border-border/50">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 hero-gradient">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">29+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Product Lines</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
