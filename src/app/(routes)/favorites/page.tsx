'use client'

import React from 'react'
import { useShop } from '@/context/ShopContext'
import Image from 'next/image'

export default function FavoritesPage() {
  const { favorites, removeFromFavorites, addToCart, isInCart } = useShop()

  if (favorites.length === 0)
    return (
      <div className="p-8 h-screen text-center text-white
      flex items-center justify-center">
        No favorites yet.
      </div>
    )

  return (
    <div className="p-6 max-w-5xl mx-auto min-h-screen">
      <h1 className="text-3xl text-white text-center
      font-bold mt-16 my-6">Your Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map(({ id, name, image, price, discount, discountedPrice }) => (
          <div
            key={id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image src={image} alt={name} fill className="object-cover" priority />
            </div>
            <h2 className="text-lg font-semibold mb-1 text-white">{name}</h2>
            <p className="text-green-600 font-bold mb-1">&#8377;{discountedPrice.toFixed(2)}</p>
            <div className="flex gap-3 mt-auto">
              <button
                onClick={() => removeFromFavorites(id)}
                className="flex-1 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Remove
              </button>
              <button
                onClick={() => !isInCart(id) && addToCart({ id, name, image, price, discount, discountedPrice })}
                disabled={isInCart(id)}
                className={`flex-1 py-2 rounded-md text-white transition ${isInCart(id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-900'
                  }`}
              >
                {isInCart(id) ? 'In Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
