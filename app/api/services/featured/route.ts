import { NextResponse } from "next/server"
// import { prisma } from "@/lib/prisma"

const fallbackServices = [
  {
    id: "1",
    title: "Je vais créer un site web moderne et responsive pour votre entreprise",
    description: "Développeur Full-Stack spécialisé dans la création de sites web modernes",
    price: 499,
    duration: 7,
    rating: 4.9,
    image: "/modern-web-development-laptop-code.jpg",
    status: "PUBLISHED",
    featured: true,
    user: {
      id: "1",
      name: "Thomas Dupont",
      avatar: "/professional-man-developer.png",
      bio: "Développeur Full-Stack",
    },
    category: {
      name: "Développement Web",
      slug: "developpement-web",
    },
  },
  {
    id: "2",
    title: "Je vais concevoir un logo unique et une identité visuelle complète",
    description: "Designer Graphique créatif avec 5 ans d'expérience",
    price: 299,
    duration: 5,
    rating: 5.0,
    image: "/modern-logo-design-bright-green-yellow.jpg",
    status: "PUBLISHED",
    featured: true,
    user: {
      id: "2",
      name: "Sophie Martin",
      avatar: "/professional-woman-designer.png",
      bio: "Designer Graphique",
    },
    category: {
      name: "Design Graphique",
      slug: "design-graphique",
    },
  },
  {
    id: "3",
    title: "Je vais gérer vos réseaux sociaux et augmenter votre visibilité",
    description: "Experte Marketing Digital spécialisée en réseaux sociaux",
    price: 799,
    duration: 30,
    rating: 4.8,
    image: "/analytics-dashboard-marketing-charts.jpg",
    status: "PUBLISHED",
    featured: true,
    user: {
      id: "3",
      name: "Marie Laurent",
      avatar: "/professional-woman-marketing.png",
      bio: "Experte Marketing Digital",
    },
    category: {
      name: "Marketing Digital",
      slug: "marketing-digital",
    },
  },
  {
    id: "4",
    title: "Je vais monter et éditer vos vidéos de manière professionnelle",
    description: "Vidéaste Professionnel avec expertise en post-production",
    price: 399,
    duration: 10,
    rating: 4.9,
    image: "/video-editing-timeline-professional.jpg",
    status: "PUBLISHED",
    featured: true,
    user: {
      id: "4",
      name: "Lucas Bernard",
      avatar: "/professional-man-videographer.jpg",
      bio: "Vidéaste Professionnel",
    },
    category: {
      name: "Vidéo & Animation",
      slug: "video-animation",
    },
  },
]

export async function GET() {
  return NextResponse.json(fallbackServices)
}
