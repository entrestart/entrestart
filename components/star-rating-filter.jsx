"use client"

import { useState } from "react"
import { Star } from "lucide-react"

export function StarRatingFilter({ value, onChange }) {
  const [hoverRating, setHoverRating] = useState(0)

  const handleMouseMove = (e, starIndex) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const isHalf = x < rect.width / 2
    setHoverRating(isHalf ? starIndex - 0.5 : starIndex)
  }

  const handleClick = (e, starIndex) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const isHalf = x < rect.width / 2
    const rating = isHalf ? starIndex - 0.5 : starIndex

    // Si on clique sur la même note, on la désélectionne
    if (value === rating) {
      onChange(0)
    } else {
      onChange(rating)
    }
  }

  const renderStar = (starIndex) => {
    const activeRating = hoverRating || value
    const isFull = activeRating >= starIndex
    const isHalf = activeRating === starIndex - 0.5

    return (
      <div
        key={starIndex}
        className="relative p-1 cursor-pointer transition-transform hover:scale-110"
        onClick={(e) => handleClick(e, starIndex)}
        onMouseMove={(e) => handleMouseMove(e, starIndex)}
        onMouseLeave={() => setHoverRating(0)}
      >
        {/* Empty star background */}
        <Star className="size-7 text-muted-foreground/30" />

        {/* Filled portion */}
        <div
          className="absolute inset-0 p-1 overflow-hidden"
          style={{ width: isFull ? "100%" : isHalf ? "50%" : "0%" }}
        >
          <Star className="size-7 text-amber-400 fill-amber-400" />
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-0.5">{[1, 2, 3, 4, 5].map((star) => renderStar(star))}</div>
      {value > 0 && (
        <p className="text-sm text-muted-foreground">
          {value} étoile{value > 1 ? "s" : ""} et plus
        </p>
      )}
    </div>
  )
}
