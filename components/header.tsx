"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Briefcase } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-9 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
            <Briefcase className="size-5 text-white" />
          </div>
          <span className="text-lg font-semibold text-foreground">ProServices</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/services"
            className="text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <a
            href="#entrepreneurs"
            className="text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Entrepreneurs
          </a>
          <a
            href="#comment-ca-marche"
            className="text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Comment ça marche
          </a>
          <a
            href="#a-propos"
            className="text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            À propos
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-muted-foreground font-medium">
            Connexion
          </Button>
          <Button className="bg-primary hover:bg-primary/90 font-medium">Publier un service</Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <nav className="container flex flex-col gap-4 py-4">
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <a
              href="#entrepreneurs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Entrepreneurs
            </a>
            <a
              href="#comment-ca-marche"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Comment ça marche
            </a>
            <a
              href="#a-propos"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              À propos
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" className="w-full text-muted-foreground">
                Connexion
              </Button>
              <Button className="w-full">Publier un service</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
