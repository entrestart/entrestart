"use client"

import { ArrowRight, Monitor, Palette, TrendingUp, Video, FileText, Music, Briefcase, Grid3x3 } from "lucide-react"
import { useEffect, useState } from "react"

interface Category {
  id: string
  name: string
  slug: string
  icon: string | null
  color: string | null
  serviceCount: number
}

const iconMap: Record<string, any> = {
  monitor: Monitor,
  palette: Palette,
  "trending-up": TrendingUp,
  video: Video,
  "pen-tool": FileText,
  music: Music,
  briefcase: Briefcase,
  layers: Grid3x3,
}

const gradientMap: Record<string, string> = {
  "bg-indigo-100": "from-violet-500 to-purple-600",
  "bg-pink-100": "from-pink-500 to-rose-600",
  "bg-green-100": "from-emerald-500 to-teal-600",
  "bg-orange-100": "from-orange-500 to-amber-600",
  "bg-blue-100": "from-cyan-500 to-blue-600",
  "bg-purple-100": "from-purple-500 to-indigo-600",
  "bg-red-100": "from-red-500 to-rose-600",
  "bg-teal-100": "from-teal-500 to-cyan-600",
}

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/categories")
        const data = await response.json()
        setCategories(data)
      } catch (error) {
        console.error("[v0] Error fetching categories:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (loading) {
    return (
      <section className="bg-white py-24 lg:py-32 border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Explorez par catégorie
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des milliers de services professionnels à votre portée
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-muted/20 rounded-2xl p-7 animate-pulse">
                <div className="space-y-5">
                  <div className="size-14 rounded-xl bg-muted" />
                  <div className="space-y-2">
                    <div className="h-5 bg-muted rounded w-2/3" />
                    <div className="h-4 bg-muted rounded w-1/2" />
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
    <section className="bg-white py-24 lg:py-32 border-t border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Explorez par catégorie</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des milliers de services professionnels à votre portée
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon || "layers"] || Grid3x3
            const gradient = Object.values(gradientMap)[index % Object.values(gradientMap).length]
            const bgColor = Object.keys(gradientMap)[index % Object.keys(gradientMap).length]
            const hoverBg = bgColor.replace("100", "200")

            return (
              <a
                key={category.id}
                href={`/services?category=${category.slug}`}
                className={`${bgColor} ${hoverBg} rounded-2xl p-7 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] group border border-border/20`}
              >
                <div className="space-y-5">
                  <div
                    className={`bg-gradient-to-br ${gradient} size-14 rounded-xl flex items-center justify-center shadow-md`}
                  >
                    <Icon className="size-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1.5">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.serviceCount} services</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium pt-1">
                    <span className="text-sm">Explorer</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
