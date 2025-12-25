"use client"

import { useState, useMemo, useEffect } from "react"
import { Star, Clock, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const allServices = [
  {
    id: "1",
    title: "Je vais créer un site web moderne et responsive pour votre entreprise",
    image: "/modern-web-development-laptop-code.jpg",
    price: 499,
    duration: 7,
    rating: 4.9,
    category: "tech-it",
    location: "Paris",
    isNew: true,
    createdAt: new Date("2024-12-20"),
    user: {
      id: "u1",
      name: "Thomas Dupont",
      avatar: "/professional-man-developer.png",
      bio: "Développeur Full-Stack",
    },
  },
  {
    id: "2",
    title: "Je vais concevoir un logo unique et une identité visuelle complète",
    image: "/modern-logo-design-bright-green-yellow.jpg",
    price: 299,
    duration: 5,
    rating: 5.0,
    category: "design-creatif",
    location: "Lyon",
    isNew: false,
    createdAt: new Date("2024-11-15"),
    user: {
      id: "u2",
      name: "Sophie Martin",
      avatar: "/professional-woman-designer.png",
      bio: "Designer Graphique",
    },
  },
  {
    id: "3",
    title: "Je vais gérer vos réseaux sociaux et augmenter votre visibilité",
    image: "/analytics-dashboard-marketing-charts.jpg",
    price: 799,
    duration: 30,
    rating: 4.8,
    category: "marketing-ventes",
    location: "Marseille",
    isNew: true,
    createdAt: new Date("2024-12-22"),
    user: {
      id: "u3",
      name: "Marie Laurent",
      avatar: "/professional-woman-marketing.png",
      bio: "Experte Marketing Digital",
    },
  },
  {
    id: "4",
    title: "Je vais monter et éditer vos vidéos de manière professionnelle",
    image: "/video-editing-timeline-professional.jpg",
    price: 399,
    duration: 10,
    rating: 4.9,
    category: "video-animation",
    location: "Toulouse",
    isNew: false,
    createdAt: new Date("2024-10-05"),
    user: {
      id: "u4",
      name: "Lucas Bernard",
      avatar: "/professional-man-videographer.jpg",
      bio: "Vidéaste Professionnel",
    },
  },
  {
    id: "5",
    title: "Je vais rédiger des articles SEO optimisés pour votre blog",
    image: "/writing-articles-seo-content.jpg",
    price: 150,
    duration: 3,
    rating: 4.7,
    category: "redaction-traduction",
    location: "Nice",
    isNew: true,
    createdAt: new Date("2024-12-23"),
    user: {
      id: "u5",
      name: "Julie Petit",
      avatar: "/professional-woman-writer.png",
      bio: "Rédactrice Web SEO",
    },
  },
  {
    id: "6",
    title: "Je vais composer une musique originale pour votre projet",
    image: "/music-production-studio-equipment.jpg",
    price: 350,
    duration: 7,
    rating: 5.0,
    category: "audio-musique",
    location: "Bordeaux",
    isNew: false,
    createdAt: new Date("2024-09-20"),
    user: {
      id: "u6",
      name: "Alexandre Roy",
      avatar: "/professional-man-music-producer.jpg",
      bio: "Compositeur & Producteur",
    },
  },
  {
    id: "7",
    title: "Je vais vous accompagner dans la création de votre business plan",
    image: "/business-plan-strategy-meeting.jpg",
    price: 599,
    duration: 14,
    rating: 4.8,
    category: "business-conseil",
    location: "Lille",
    isNew: false,
    createdAt: new Date("2024-08-10"),
    user: {
      id: "u7",
      name: "Pierre Durand",
      avatar: "/professional-man-business-consultant.jpg",
      bio: "Consultant Business",
    },
  },
  {
    id: "8",
    title: "Je vais créer une application mobile iOS et Android",
    image: "/mobile-app-development.png",
    price: 1499,
    duration: 30,
    rating: 4.9,
    category: "tech-it",
    location: "Paris",
    isNew: true,
    createdAt: new Date("2024-12-24"),
    user: {
      id: "u8",
      name: "Kevin Chen",
      avatar: "/professional-asian-man-developer.jpg",
      bio: "Développeur Mobile",
    },
  },
  {
    id: "9",
    title: "Je vais créer des illustrations personnalisées pour votre marque",
    image: "/digital-illustration-art-tablet.jpg",
    price: 250,
    duration: 5,
    rating: 4.5,
    category: "design-creatif",
    location: "Nantes",
    isNew: false,
    createdAt: new Date("2024-07-01"),
    user: {
      id: "u9",
      name: "Camille Dubois",
      avatar: "/professional-woman-illustrator.jpg",
      bio: "Illustratrice Freelance",
    },
  },
]

const ITEMS_PER_PAGE = 6

export function ServicesList({ filters, columns = 3, sortBy = "newest", searchQuery = "" }) {
  const [currentPage, setCurrentPage] = useState(1)

  const filteredAndSortedServices = useMemo(() => {
    const result = allServices.filter((service) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesTitle = service.title.toLowerCase().includes(query)
        const matchesUser = service.user.name.toLowerCase().includes(query)
        const matchesBio = service.user.bio.toLowerCase().includes(query)
        if (!matchesTitle && !matchesUser && !matchesBio) {
          return false
        }
      }

      if (filters.category && service.category !== filters.category) {
        return false
      }
      if (filters.rating > 0 && service.rating < filters.rating) {
        return false
      }
      if (filters.location && filters.location !== "Ma position") {
        if (!service.location.toLowerCase().includes(filters.location.toLowerCase())) {
          return false
        }
      }
      return true
    })

    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "newest":
      default:
        result.sort((a, b) => b.createdAt - a.createdAt)
        break
    }

    return result
  }, [filters, sortBy, searchQuery]) // Added searchQuery dependency

  const totalPages = Math.ceil(filteredAndSortedServices.length / ITEMS_PER_PAGE)

  const paginatedServices = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredAndSortedServices.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredAndSortedServices, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [filters, sortBy, searchQuery])

  const gridClasses =
    columns === 4 ? "grid md:grid-cols-2 lg:grid-cols-4 gap-5" : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">{filteredAndSortedServices.length}</span> services trouvés
        </p>
      </div>

      {paginatedServices.length === 0 ? (
        <div className="bg-card border border-border/50 rounded-2xl p-12 text-center">
          <p className="text-muted-foreground text-lg">Aucun service ne correspond à vos critères</p>
          <p className="text-sm text-muted-foreground mt-2">Essayez de modifier vos filtres</p>
        </div>
      ) : (
        <>
          <div className={gridClasses}>
            {paginatedServices.map((service) => (
              <a
                key={service.id}
                href={`/services/${service.id}`}
                className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className={`w-full object-cover ${columns === 4 ? "h-32" : "h-40"}`}
                  />
                  {service.isNew && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md text-xs font-semibold">
                      <Sparkles className="size-3" />
                      Nouveau
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="size-3.5 text-amber-400 fill-amber-400" />
                    <span className="font-semibold text-foreground text-sm">{service.rating}</span>
                  </div>
                </div>

                <div className={`${columns === 4 ? "p-4" : "p-5"}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={service.user.avatar || "/placeholder.svg"}
                      alt={service.user.name}
                      className={`rounded-full object-cover ${columns === 4 ? "size-8" : "size-10"}`}
                    />
                    <div>
                      <p className={`font-medium text-foreground ${columns === 4 ? "text-xs" : "text-sm"}`}>
                        {service.user.name}
                      </p>
                      <p className={`text-muted-foreground ${columns === 4 ? "text-[10px]" : "text-xs"}`}>
                        {service.user.bio}
                      </p>
                    </div>
                  </div>

                  <h3
                    className={`font-semibold text-foreground mb-3 leading-snug line-clamp-2 ${columns === 4 ? "text-sm" : "text-base"}`}
                  >
                    {service.title}
                  </h3>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className={`${columns === 4 ? "size-3" : "size-4"}`} />
                      <span className={`${columns === 4 ? "text-xs" : "text-sm"}`}>{service.duration} jours</span>
                    </div>
                    <div className="text-right">
                      <span className={`text-muted-foreground ${columns === 4 ? "text-[10px]" : "text-xs"}`}>
                        À partir de{" "}
                      </span>
                      <span className={`font-bold text-primary ${columns === 4 ? "text-base" : "text-lg"}`}>
                        {service.price}€
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="bg-transparent"
              >
                <ChevronLeft className="size-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  onClick={() => setCurrentPage(page)}
                  className={currentPage !== page ? "bg-transparent" : ""}
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="bg-transparent"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
