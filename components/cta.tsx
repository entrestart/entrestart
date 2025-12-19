import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#667eea]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Sparkles className="size-4 text-white" />
            <span className="text-sm font-medium text-white">Commencez gratuitement</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance mb-6">
            Prêt à développer votre activité ?
          </h2>
          <p className="text-xl text-white/90 text-pretty leading-relaxed mb-10 max-w-2xl mx-auto">
            Rejoignez des milliers d'entrepreneurs qui font déjà confiance à ProServices pour trouver des clients et
            vendre leurs services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-medium h-14 px-8 text-base shadow-xl"
            >
              Créer mon profil gratuitement
              <ArrowRight className="size-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-medium h-14 px-8 text-base backdrop-blur-sm"
            >
              Voir un exemple de profil
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
