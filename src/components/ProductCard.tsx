import React from 'react'
import { Button } from './Button'
import { PriceBadge } from './PriceBadge'

interface ProductCardProps {
  name:          string
  description:   string
  price:         number
  originalPrice?: number
  imageSrc?:     string
  badge?:        string
  onAddToCart?:  () => void
}

export function ProductCard({
  name,
  description,
  price,
  originalPrice,
  imageSrc,
  badge,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="w-72 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">
      {/* Image area */}
      <div className="relative bg-gray-100 h-48 flex items-center justify-center">
        {imageSrc ? (
          <img src={imageSrc} alt={name} className="object-cover w-full h-full" />
        ) : (
          <div className="text-gray-300">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        {badge && (
          <span className="absolute top-2 left-2 px-2 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-md">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">{name}</h3>
          <p className="mt-1 text-xs text-gray-500 line-clamp-2">{description}</p>
        </div>

        <PriceBadge price={price} originalPrice={originalPrice} />

        <Button
          variant="primary"
          size="sm"
          onClick={onAddToCart}
          className="w-full mt-auto"
        >
          Add to cart
        </Button>
      </div>
    </div>
  )
}
