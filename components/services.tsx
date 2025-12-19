import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Megaphone, PenTool, LineChart, Camera, FileText } from "lucide-react"

const serviceCategories = [
  {
    icon: Code,
    title: "Développement",
    description: "Web, mobile, logiciels sur mesure",
    count: "2 450+",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "SEO, publicité, stratégie digitale",
    count: "1 890+",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "UI/UX, branding, graphisme",
    count: "1 620+",
  },
  {
    icon: LineChart,
    title: "Conseil",
    description: "Stratégie, finance, management",
    count: "980+",
  },
  {
    icon: Camera,
    title: "Production",
    description: "Photo, vidéo, contenu",
    count: "1 340+",
  },
  {
    icon: FileText,
    title: "Rédaction",
    description: "Copywriting, articles, traduction",
    count: "750+",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Tous les services dont vous avez besoin
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
            Des milliers d'entrepreneurs qualifiés prêts à vous accompagner
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="group hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="size-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-muted-foreground">{category.count} professionnels disponibles</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
