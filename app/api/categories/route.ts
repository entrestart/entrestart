import { NextResponse } from "next/server"

const fallbackCategories = [
  {
    id: "1",
    name: "Tech & IT",
    slug: "tech-it",
    description: "Services de développement et technologies",
    icon: "monitor",
    color: "#6366F1",
    serviceCount: 645,
  },
  {
    id: "2",
    name: "Design & Créatif",
    slug: "design-creatif",
    description: "Services de design graphique et créatif",
    icon: "palette",
    color: "#EC4899",
    serviceCount: 523,
  },
  {
    id: "3",
    name: "Marketing & Ventes",
    slug: "marketing-ventes",
    description: "Services de marketing digital et stratégie",
    icon: "trending-up",
    color: "#10B981",
    serviceCount: 412,
  },
  {
    id: "4",
    name: "Vidéo & Animation",
    slug: "video-animation",
    description: "Services de création vidéo et animation",
    icon: "video",
    color: "#F59E0B",
    serviceCount: 289,
  },
  {
    id: "5",
    name: "Rédaction & Traduction",
    slug: "redaction-traduction",
    description: "Services de rédaction et traduction",
    icon: "pen-tool",
    color: "#06B6D4",
    serviceCount: 367,
  },
  {
    id: "6",
    name: "Audio & Musique",
    slug: "audio-musique",
    description: "Services audio et production musicale",
    icon: "music",
    color: "#8B5CF6",
    serviceCount: 178,
  },
  {
    id: "7",
    name: "Business & Conseil",
    slug: "business-conseil",
    description: "Services de conseil en entreprise",
    icon: "briefcase",
    color: "#EF4444",
    serviceCount: 234,
  },
  {
    id: "8",
    name: "Autres Services",
    slug: "autres-services",
    description: "Autres services professionnels",
    icon: "layers",
    color: "#14B8A6",
    serviceCount: 456,
  },
]

export async function GET() {
  return NextResponse.json(fallbackCategories)
}
