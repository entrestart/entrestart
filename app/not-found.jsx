import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Home, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="mb-8">
            <span className="text-8xl font-bold bg-gradient-to-r from-primary via-violet-500 to-primary bg-clip-text text-transparent">
              404
            </span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Page introuvable</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/">
                <Home className="size-5" />
                Retour à l'accueil
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
              <Link href="/services">
                <Search className="size-5" />
                Explorer les services
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
