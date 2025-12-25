"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesFilters } from "@/components/services-filters"
import { ServicesList } from "@/components/services-list"
import { useState } from "react"
import { Grid3X3, LayoutGrid, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const sortOptions = [
  { value: "newest", label: "Nouveaux services" },
  { value: "rating", label: "Meilleure note" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
]

export default function ServicesPage() {
  const [filters, setFilters] = useState({
    category: "",
    rating: 0,
    location: "",
    distance: 50,
  })
  const [columns, setColumns] = useState(3)
  const [sortBy, setSortBy] = useState("newest")
  const [sortOpen, setSortOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const selectedSortLabel = sortOptions.find((o) => o.value === sortBy)?.label

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3 tracking-tight">Tous les services</h1>
          <p className="text-xl text-muted-foreground">
            Découvrez des milliers de services proposés par des entrepreneurs talentueux
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-80 shrink-0">
            <ServicesFilters filters={filters} onFiltersChange={setFilters} />
          </aside>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6 bg-card border border-border/50 rounded-xl p-4">
              {/* Sort dropdown - styled */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors min-w-[180px]"
                >
                  <span className="text-sm text-muted-foreground">Trier par:</span>
                  <span className="text-sm font-medium text-foreground flex-1 text-left">{selectedSortLabel}</span>
                  <ChevronDown
                    className={`size-4 text-muted-foreground transition-transform ${sortOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {sortOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-card border border-border rounded-lg shadow-lg z-20 overflow-hidden">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value)
                          setSortOpen(false)
                        }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-primary/5 transition-colors ${
                          sortBy === option.value ? "bg-primary/10 text-primary font-medium" : "text-foreground"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search bar - centered */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher un service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-2.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              {/* View toggle */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-sm text-muted-foreground mr-1">Affichage</span>
                <Button
                  variant={columns === 3 ? "default" : "outline"}
                  size="icon"
                  onClick={() => setColumns(3)}
                  className={columns !== 3 ? "bg-transparent" : ""}
                >
                  <Grid3X3 className="size-4" />
                </Button>
                <Button
                  variant={columns === 4 ? "default" : "outline"}
                  size="icon"
                  onClick={() => setColumns(4)}
                  className={columns !== 4 ? "bg-transparent" : ""}
                >
                  <LayoutGrid className="size-4" />
                </Button>
              </div>
            </div>

            <ServicesList filters={filters} columns={columns} sortBy={sortBy} searchQuery={searchQuery} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
