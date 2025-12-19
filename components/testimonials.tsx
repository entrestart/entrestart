import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "CEO, TechStart",
      content:
        "ProServices m'a permis de trouver les meilleurs développeurs pour mon projet. La qualité est exceptionnelle.",
      avatar: "/diverse-woman-portrait.png",
      rating: 5,
    },
    {
      name: "Jean Martin",
      role: "Fondateur, CreativeBox",
      content:
        "Une plateforme intuitive avec des professionnels talentueux. J'ai trouvé mon designer graphique en moins de 24h.",
      avatar: "/man.jpg",
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      role: "Marketing Manager",
      content:
        "Les services sont vérifiés et de qualité. ProServices est devenu un partenaire essentiel pour notre croissance.",
      avatar: "/professional-woman.png",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rejoignez des milliers d'entrepreneurs satisfaits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="size-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
