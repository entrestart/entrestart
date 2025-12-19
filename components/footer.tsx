import { Briefcase, Twitter, Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-9 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                <Briefcase className="size-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-foreground">ProServices</span>
            </div>
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-sm mb-6">
              La marketplace B2B pour entrepreneurs qui veulent vendre leurs services et se faire connaître auprès
              d'autres professionnels.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="size-9 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="size-4 text-muted-foreground group-hover:text-foreground" />
              </a>
              <a
                href="#"
                className="size-9 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4 text-muted-foreground group-hover:text-foreground" />
              </a>
              <a
                href="#"
                className="size-9 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors group"
                aria-label="GitHub"
              >
                <Github className="size-4 text-muted-foreground group-hover:text-foreground" />
              </a>
              <a
                href="#"
                className="size-9 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors group"
                aria-label="Email"
              >
                <Mail className="size-4 text-muted-foreground group-hover:text-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Plateforme</h3>
            <ul className="space-y-3 text-[15px] text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Entreprise</h3>
            <ul className="space-y-3 text-[15px] text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Carrières
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Presse
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Partenaires
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Support</h3>
            <ul className="space-y-3 text-[15px] text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Statut
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 ProServices. Tous droits réservés.</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Confidentialité
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Conditions
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
