import React from 'react'

interface PriceBadgeProps {
  price:         number
  originalPrice?: number
  currency?:     string
}

export function PriceBadge({ price, originalPrice, currency = 'USD' }: PriceBadgeProps) {
  const fmt = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(n)

  const hasDiscount = originalPrice !== undefined && originalPrice > price
  const discountPct = hasDiscount
    ? Math.round((1 - price / originalPrice!) * 100)
    : null

  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-2xl font-bold text-gray-900">{fmt(price)}</span>
      {hasDiscount && (
        <>
          <span className="text-sm text-gray-400 line-through">{fmt(originalPrice!)}</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-green-100 text-green-800">
            -{discountPct}%
          </span>
        </>
      )}
    </div>
  )
}
