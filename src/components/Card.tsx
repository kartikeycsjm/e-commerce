'use client'
import React from 'react'
import Image from 'next/image'
import { useShop } from '@/context/ShopContext'

import { Heart } from 'lucide-react'
type productType = {
    id: number,
    name: string,
    image: string,
    price: number,
    discount: string,
    discountedPrice: number
}
const Card = ({ id, name, image, price, discount, discountedPrice }
    :
    productType) => {
    const { addToCart, removeFromCart, addToFavorites, isFavorite, isInCart, removeFromFavorites, cart } = useShop()
    const currentItem = cart.find(p => p.id === id)
    return (
        <div className='w-full shadow-md border border-gray-800
        h-[380px] md:h-[400px] rounded-xl my-5 
        overflow-hidden transition-transform hover:scale-105 duration-300'>
            <div
                className="relative w-full h-[220px] rounded-xl"
            >
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover rounded-t-xl"
                    priority
                />
            </div>
            <div className="px-4 pt-2 flex justify-between">
                <div>
                    <h3 className="text-md font-semibold 
                  text-white mb-1">{name}</h3>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl font-bold text-green-600">&#8377;{discountedPrice.toFixed(2)}</span>
                        {discount !== '0%' && (
                            <span className="text-sm text-gray-500 line-through">&#8377;{price.toFixed(2)}</span>
                        )}
                    </div>
                    <p className="text-sm text-red-500">{discount !== '0%' ? `Save ${discount}` : 'No Discount'}</p>
                </div>
                <button
                    onClick={() =>
                        isFavorite(id)
                            ? removeFromFavorites(id)
                            : addToFavorites({ id, name, image, price, discount, discountedPrice })
                    }
                >
                    {isFavorite(id) ?
                        <Heart className='text-red-700 ' />
                        :
                        <Heart />}
                </button>

            </div>
            <div className='w-full flex justify-between'>
                {isInCart(id) ? (
                    <div className="flex items-center gap-2 mt-4">
                        <button
                            onClick={() => removeFromCart(id)}
                            className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition"
                        >
                            -1
                        </button>

                        <span className="font-medium">Qty: {currentItem?.quantity}</span>

                        <button
                            onClick={() => addToCart({ id, name, image, price, discount, discountedPrice })}
                            className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition"
                        >
                            +1
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => addToCart({ id, name, image, price, discount, discountedPrice })}
                        className="mt-4 w-[45%] bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                    >
                        Add to Cart
                    </button>
                )}
                <button
                    className="mt-4 w-[45%] bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                >
                    Buy
                </button>
            </div>
        </div>
    )
}
export default Card
