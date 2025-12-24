"use client"

import { Star, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

interface Service {
  id: string
  title: string
  image: string | null
  price: number
  duration: number
  rating: number
  user: {
    id: string
    name: string
    avatar: string | null
    bio: string | null
  }
}

export function FeaturedServices() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch("/api/services/featured")
        const data = await response.json()
        setServices(data)
      } catch (error) {
        console.error("[v0] Error fetching featured services:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  if (loading) {
    return (
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-tight">
                Services en vedette
              </h2>
              <p className="text-xl text-muted-foreground">Les meilleurs entrepreneurs sélectionnés pour vous</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 animate-pulse"
              >
                <div className="h-40 bg-muted" />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-full bg-muted" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-muted rounded w-2/3" />
                      <div className="h-3 bg-muted rounded w-1/2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded" />
                    <div className="h-4 bg-muted rounded w-3/4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-tight">Services en vedette</h2>
            <p className="text-xl text-muted-foreground">Les meilleurs entrepreneurs sélectionnés pour vous</p>
          </div>
          <Button variant="outline" size="lg" className="hidden md:flex gap-2 bg-transparent">
            Voir tous les services
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <Star className="size-4 text-amber-400 fill-amber-400" />
                  <span className="font-semibold text-foreground">{service.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={service.user.avatar || "/placeholder-user.jpg"}
                    alt={service.user.name}
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{service.user.name}</p>
                    <p className="text-sm text-muted-foreground line-clamp-1">{service.user.bio}</p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-4 leading-snug line-clamp-2">
                  {service.title}
                </h3>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="size-4" />
                    <span className="text-sm">{service.duration} jours</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">À partir de </span>
                    <span className="text-xl font-bold text-primary">{service.price}€</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 md:hidden">
          <Button variant="outline" size="lg" className="gap-2 bg-transparent">
            Voir tous les services
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
