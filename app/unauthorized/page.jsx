import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShieldX, Home, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UnauthorizedPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="mb-8 flex justify-center">
            <div className="size-24 rounded-full bg-destructive/10 flex items-center justify-center">
              <ShieldX className="size-12 text-destructive" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Accès refusé</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Vous n'avez pas les autorisations nécessaires pour accéder à cette page. Veuillez vous connecter ou
            contacter l'administrateur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/login">
                <LogIn className="size-5" />
                Se connecter
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <Link href="/">
                <Home className="size-5" />
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
