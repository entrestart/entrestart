import { Star, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeaturedServices() {
  const services = [
    {
      id: 1,
      title: "Je vais créer un site web moderne et responsive pour votre...",
      entrepreneur: {
        name: "Thomas Dupont",
        role: "Développeur Full-Stack",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      image: "/modern-web-development-laptop-code.jpg",
      rating: 4.9,
      duration: "7 jours",
      price: "499€",
    },
    {
      id: 2,
      title: "Je vais concevoir un logo unique et une identité visuelle complète",
      entrepreneur: {
        name: "Sophie Martin",
        role: "Designer Graphique",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      image: "/modern-logo-design-bright-green-yellow.jpg",
      rating: 5.0,
      duration: "5 jours",
      price: "299€",
    },
    {
      id: 3,
      title: "Je vais gérer vos réseaux sociaux et augmenter votre visibilité",
      entrepreneur: {
        name: "Marie Laurent",
        role: "Experte Marketing Digital",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      image: "/analytics-dashboard-marketing-charts.jpg",
      rating: 4.8,
      duration: "30 jours",
      price: "799€",
    },
    {
      id: 4,
      title: "Je vais monter et éditer vos vidéos de manière professionnelle",
      entrepreneur: {
        name: "Lucas Bernard",
        role: "Vidéaste Professionnel",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      image: "/video-editing-timeline-professional.jpg",
      rating: 4.9,
      duration: "10 jours",
      price: "399€",
    },
  ]

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
                    src={service.entrepreneur.avatar || "/placeholder.svg"}
                    alt={service.entrepreneur.name}
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{service.entrepreneur.name}</p>
                    <p className="text-sm text-muted-foreground">{service.entrepreneur.role}</p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-4 leading-snug line-clamp-2">
                  {service.title}
                </h3>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="size-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">À partir de </span>
                    <span className="text-xl font-bold text-primary">{service.price}</span>
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
