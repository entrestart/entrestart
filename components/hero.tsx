"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, CheckCircle2, Shield, Star, ArrowRight, Code2, Palette, Megaphone, PenTool } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 gradient-mesh" />

      <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-3.5 py-1.5 border border-border/50">
              <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[13px] font-medium text-foreground">+2,500 entrepreneurs actifs</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Trouvez le{" "}
              <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                service parfait
              </span>{" "}
              pour votre projet
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Connectez-vous avec des entrepreneurs talentueux et découvrez des services professionnels adaptés à vos
              besoins. De la création de contenu au développement web.
            </p>

            <div className="flex gap-3 pt-2">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un service..."
                  className="pl-12 h-14 text-base bg-white border-border shadow-sm focus:shadow-md transition-shadow"
                />
              </div>
              <Button className="h-14 px-8 gap-2 bg-primary hover:bg-primary/90 text-base font-medium shadow-sm">
                Rechercher
                <ArrowRight className="size-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-full bg-emerald-50 flex items-center justify-center">
                  <CheckCircle2 className="size-4 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-foreground">Services vérifiés</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <Shield className="size-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-foreground">Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-full bg-amber-50 flex items-center justify-center">
                  <Star className="size-4 text-amber-600 fill-amber-600" />
                </div>
                <span className="text-sm font-medium text-foreground">Satisfaction garantie</span>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-white rounded-3xl shadow-xl shadow-black/5 p-8 border border-border/50">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold text-foreground">Services populaires</h3>
                <div className="size-10 rounded-xl bg-gradient-to-br from-orange-400 to-rose-400 flex items-center justify-center">
                  <span className="text-xl">🔥</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-50/50 hover:shadow-md hover:scale-[1.02] transition-all duration-200 group border border-purple-100/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-md">
                      <Code2 className="size-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Développement Web</p>
                      <p className="text-sm text-muted-foreground">342 services disponibles</p>
                    </div>
                  </div>
                  <ArrowRight className="size-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-50/50 hover:shadow-md hover:scale-[1.02] transition-all duration-200 group border border-pink-100/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-md">
                      <Palette className="size-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Design Graphique</p>
                      <p className="text-sm text-muted-foreground">287 services disponibles</p>
                    </div>
                  </div>
                  <ArrowRight className="size-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-50/50 hover:shadow-md hover:scale-[1.02] transition-all duration-200 group border border-emerald-100/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md">
                      <Megaphone className="size-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Marketing Digital</p>
                      <p className="text-sm text-muted-foreground">198 services disponibles</p>
                    </div>
                  </div>
                  <ArrowRight className="size-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-50/50 hover:shadow-md hover:scale-[1.02] transition-all duration-200 group border border-blue-100/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                      <PenTool className="size-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Rédaction de Contenu</p>
                      <p className="text-sm text-muted-foreground">156 services disponibles</p>
                    </div>
                  </div>
                  <ArrowRight className="size-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
