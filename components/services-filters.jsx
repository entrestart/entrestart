"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { StarRatingFilter } from "@/components/star-rating-filter"
import { LocationInput } from "@/components/location-input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

const categories = [
  { id: "tech-it", name: "Tech & IT", slug: "tech-it" },
  { id: "design-creatif", name: "Design & Créatif", slug: "design-creatif" },
  { id: "marketing-ventes", name: "Marketing & Ventes", slug: "marketing-ventes" },
  { id: "video-animation", name: "Vidéo & Animation", slug: "video-animation" },
  { id: "redaction-traduction", name: "Rédaction & Traduction", slug: "redaction-traduction" },
  { id: "audio-musique", name: "Audio & Musique", slug: "audio-musique" },
  { id: "business-conseil", name: "Business & Conseil", slug: "business-conseil" },
  { id: "autres-services", name: "Autres Services", slug: "autres-services" },
]

export function ServicesFilters({ filters, onFiltersChange }) {
  const [isOpen, setIsOpen] = useState({
    category: true,
    rating: true,
    location: true,
  })

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const handleCategoryChange = (categorySlug) => {
    onFiltersChange((prev) => ({
      ...prev,
      category: prev.category === categorySlug ? "" : categorySlug,
    }))
  }

  const handleRatingChange = (rating) => {
    onFiltersChange((prev) => ({ ...prev, rating }))
  }

  const handleLocationChange = (location) => {
    onFiltersChange((prev) => ({ ...prev, location }))
  }

  const handleDistanceChange = (value) => {
    onFiltersChange((prev) => ({ ...prev, distance: value[0] }))
  }

  const resetFilters = () => {
    onFiltersChange({
      category: "",
      rating: 0,
      location: "",
      distance: 50,
    })
  }

  return (
    <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Filtres</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetFilters}
          className="text-muted-foreground hover:text-foreground"
        >
          Réinitialiser
        </Button>
      </div>

      {/* Category Filter */}
      <div className="border-b border-border/50 pb-6 mb-6">
        <button
          onClick={() => toggleSection("category")}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <span className="font-medium text-foreground">Domaine d'activité</span>
          <ChevronDown
            className={`size-5 text-muted-foreground transition-transform ${isOpen.category ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen.category && (
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.slug)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all ${
                  filters.category === category.slug
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="border-b border-border/50 pb-6 mb-6">
        <button
          onClick={() => toggleSection("rating")}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <span className="font-medium text-foreground">Note minimum</span>
          <ChevronDown
            className={`size-5 text-muted-foreground transition-transform ${isOpen.rating ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen.rating && <StarRatingFilter value={filters.rating} onChange={handleRatingChange} />}
      </div>

      {/* Location Filter */}
      <div>
        <button
          onClick={() => toggleSection("location")}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <span className="font-medium text-foreground">Localisation</span>
          <ChevronDown
            className={`size-5 text-muted-foreground transition-transform ${isOpen.location ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen.location && (
          <div className="space-y-5">
            <LocationInput value={filters.location} onChange={handleLocationChange} />

            {filters.location && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Distance</span>
                  <span className="text-sm font-medium text-foreground">{filters.distance} km</span>
                </div>
                <Slider
                  value={[filters.distance]}
                  onValueChange={handleDistanceChange}
                  min={5}
                  max={200}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>5 km</span>
                  <span>200 km</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
