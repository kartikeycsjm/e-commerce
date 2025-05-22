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
    <div className="p-6 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl text-white text-center
      font-bold mt-20 my-6">Your Cart</h1>
      <div className="space-y-4 mt-10 grid grid-col-1 
      md:grid-cols-2 gap-5 md:w-[80%] m-auto">
        {cart.map(({ id, name, image, price, discount, discountedPrice, quantity = 1 }) => (
          <div
            key={id}
            className="flex items-center gap-2 border border-gray-700 rounded-xl p-2 shadow"
          >
            <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <Image src={image} alt={name} fill className="object-cover" priority />
            </div>
            <div className="flex flex-col flex-grow">
              <h2 className="text-md font-semibold 
              text-white">{name}</h2>
              <p className="text-gray-500 line-through">&#8377;{price.toFixed(2)}</p>
              <p className="text-green-600 font-bold">&#8377;{discountedPrice.toFixed(2)}</p>
            </div>
            <div className="bg-pink-700 rounded-lg flex items-center gap-1 mt-4">
              <button
                onClick={() => removeFromCart(id)}
                className=" text-white px-2 py-1 rounded"
              >
                -
              </button>

              <span className="font-sm text-sm text-white">{quantity}</span>

              <button
                onClick={() =>
                  addToCart({ id, name, image, price, discount, discountedPrice })
                }
                className="text-white px-2 py-1 rounded"
              >
                +
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
