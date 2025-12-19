import { Building2, Users, TrendingUp, Shield } from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "Votre vitrine professionnelle",
    description: "Créez un profil qui met en valeur votre expertise et attire les bons clients.",
  },
  {
    icon: Users,
    title: "Réseau qualifié",
    description: "Connectez-vous avec des entrepreneurs sérieux qui cherchent activement vos services.",
  },
  {
    icon: TrendingUp,
    title: "Croissance accélérée",
    description: "Développez votre chiffre d'affaires grâce à une visibilité ciblée et des leads qualifiés.",
  },
  {
    icon: Shield,
    title: "Transactions sécurisées",
    description: "Payements protégés et système de notation pour travailler en toute confiance.",
  },
]

export function Features() {
  return (
    <section id="fonctionnalites" className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Tout ce dont vous avez besoin pour réussir
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
            Une plateforme complète conçue pour les entrepreneurs par des entrepreneurs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                <feature.icon className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
