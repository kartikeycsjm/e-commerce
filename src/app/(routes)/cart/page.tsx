'use client'

import React from 'react'
import { useShop } from '@/context/ShopContext'
import Image from 'next/image'

export default function CartPage() {
  const { cart, removeFromCart, addToCart } = useShop()

  if (cart.length === 0)
    return (
      <div className="p-8 text-center h-screen
      flex items-center justify-center
      text-gray-300">
        Your cart is empty.
      </div>
    )

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.discountedPrice * (item.quantity || 1),
    0
  )

  return (
    <div className="p-6 max-w-5xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4 mt-10">
        {cart.map(({ id, name, image, price, discount, discountedPrice, quantity = 1 }) => (
          <div
            key={id}
            className="flex items-center gap-4 border border-gray-700 rounded-xl p-4 shadow"
          >
            <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <Image src={image} alt={name} fill className="object-cover" priority />
            </div>
            <div className="flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-white">{name}</h2>
              <p className="text-gray-500 line-through">&#8377;{price.toFixed(2)}</p>
              <p className="text-green-600 font-bold">&#8377;{discountedPrice.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={() => removeFromCart(id)}
                className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition"
              >
                -1
              </button>

              <span className="font-medium text-white">Qty: {quantity}</span>

              <button
                onClick={() =>
                  addToCart({ id, name, image, price, discount, discountedPrice })
                }
                className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition"
              >
                +1
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-white flex justify-end text-xl font-bold">
        Total: &#8377;{totalPrice.toFixed(2)}
      </div>
    </div>
  )
}
