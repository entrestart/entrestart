import { ArrowRight, Monitor, Palette, TrendingUp, Video, FileText, Music, Briefcase, Grid3x3 } from "lucide-react"

export function Categories() {
  const categories = [
    {
      name: "Tech & IT",
      icon: Monitor,
      services: 645,
      gradient: "from-violet-500 to-purple-600",
      bg: "bg-violet-50",
      hoverBg: "hover:bg-violet-100",
    },
    {
      name: "Design & Créatif",
      icon: Palette,
      services: 523,
      gradient: "from-pink-500 to-rose-600",
      bg: "bg-pink-50",
      hoverBg: "hover:bg-pink-100",
    },
    {
      name: "Marketing & Ventes",
      icon: TrendingUp,
      services: 412,
      gradient: "from-emerald-500 to-teal-600",
      bg: "bg-emerald-50",
      hoverBg: "hover:bg-emerald-100",
    },
    {
      name: "Vidéo & Animation",
      icon: Video,
      services: 289,
      gradient: "from-orange-500 to-amber-600",
      bg: "bg-orange-50",
      hoverBg: "hover:bg-orange-100",
    },
    {
      name: "Rédaction & Traduction",
      icon: FileText,
      services: 367,
      gradient: "from-cyan-500 to-blue-600",
      bg: "bg-cyan-50",
      hoverBg: "hover:bg-cyan-100",
    },
    {
      name: "Audio & Musique",
      icon: Music,
      services: 178,
      gradient: "from-purple-500 to-indigo-600",
      bg: "bg-purple-50",
      hoverBg: "hover:bg-purple-100",
    },
    {
      name: "Business & Conseil",
      icon: Briefcase,
      services: 234,
      gradient: "from-red-500 to-rose-600",
      bg: "bg-red-50",
      hoverBg: "hover:bg-red-100",
    },
    {
      name: "Autres Services",
      icon: Grid3x3,
      services: 456,
      gradient: "from-teal-500 to-cyan-600",
      bg: "bg-teal-50",
      hoverBg: "hover:bg-teal-100",
    },
  ]

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
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <a
                key={category.name}
                href="#"
                className={`${category.bg} ${category.hoverBg} rounded-2xl p-7 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] group border border-border/20`}
              >
                <div className="space-y-5">
                  <div
                    className={`bg-gradient-to-br ${category.gradient} size-14 rounded-xl flex items-center justify-center shadow-md`}
                  >
                    <Icon className="size-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1.5">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.services} services</p>
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
