"use client"

import { useState, useRef, useEffect } from "react"
import { MapPin, Navigation, Search } from "lucide-react"

// Liste des villes françaises pour les suggestions
const frenchCities = [
  "Paris",
  "Marseille",
  "Lyon",
  "Toulouse",
  "Nice",
  "Nantes",
  "Strasbourg",
  "Montpellier",
  "Bordeaux",
  "Lille",
  "Rennes",
  "Reims",
  "Le Havre",
  "Saint-Étienne",
  "Toulon",
  "Grenoble",
  "Dijon",
  "Angers",
  "Nîmes",
  "Villeurbanne",
  "Saint-Denis",
  "Le Mans",
  "Aix-en-Provence",
  "Clermont-Ferrand",
  "Brest",
  "Tours",
  "Limoges",
  "Amiens",
  "Perpignan",
  "Metz",
  "Besançon",
  "Orléans",
  "Rouen",
  "Mulhouse",
  "Caen",
  "Nancy",
  "Saint-Paul",
  "Argenteuil",
  "Montreuil",
  "Roubaix",
]

export function LocationInput({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const [suggestions, setSuggestions] = useState([])
  const inputRef = useRef(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleInputChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue)

    if (newValue.length > 0) {
      const filtered = frenchCities.filter((city) => city.toLowerCase().startsWith(newValue.toLowerCase())).slice(0, 5)
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }

  const handleFocus = () => {
    setIsOpen(true)
    if (inputValue.length === 0) {
      setSuggestions([])
    }
  }

  const handleSelectCity = (city) => {
    setInputValue(city)
    onChange(city)
    setIsOpen(false)
    setSuggestions([])
  }

  const handleAroundMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // En production, on utiliserait une API de géocodage inverse
          setInputValue("Ma position")
          onChange("Ma position")
          setIsOpen(false)
        },
        (error) => {
          console.error("Erreur de géolocalisation:", error)
          alert("Impossible d'obtenir votre position")
        },
      )
    } else {
      alert("La géolocalisation n'est pas supportée par votre navigateur")
    }
  }

  const handleClear = () => {
    setInputValue("")
    onChange("")
    setSuggestions([])
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          placeholder="Rechercher une ville"
          className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
        {inputValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            ×
          </button>
        )}
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden"
        >
          {/* Option "Autour de moi" */}
          <button
            type="button"
            onClick={handleAroundMe}
            className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted transition-colors border-b border-border"
          >
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Navigation className="size-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Autour de moi</p>
              <p className="text-sm text-muted-foreground">Utiliser ma position actuelle</p>
            </div>
          </button>

          {/* Suggestions de villes */}
          {suggestions.length > 0 && (
            <div className="py-2">
              {suggestions.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => handleSelectCity(city)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-muted transition-colors"
                >
                  <MapPin className="size-5 text-muted-foreground" />
                  <span className="text-foreground">{city}</span>
                </button>
              ))}
            </div>
          )}

          {inputValue.length > 0 && suggestions.length === 0 && (
            <div className="px-4 py-6 text-center text-muted-foreground">
              <p className="text-sm">Aucune ville trouvée</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
