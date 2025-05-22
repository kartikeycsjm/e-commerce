'use client'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { CircleUser } from 'lucide-react';
import { House } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { Heart } from 'lucide-react';
const Nav = () => {
    const [open, setOpen] = useState(false)
    const { cart } = useShop()
    const totalQuantity = cart.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0
    )
    return (
        <nav className="w-full flex fixed top-0 
        bg-gray-800 md:h-20 h-18
        justify-between z-50 items-center px-4">
            <h1 className="text-2xl text-white font-bold">
                Tech Shop
            </h1>
            <div className='flex'>
                <div className='mx-5'>
                    <Link 
                    className="p-2 m-2  hover:underline text-white
            w-[100px]" href="/cart">
                        <p className='flex gap-2'>
                            <ShoppingCart />
                            Cart
                        </p>
                    </Link >
                    <span className='size-4 text-[10px]
                    text-white absolute translate-y-[-7px]
                    md:translate-y-[-5px]
                    translate-x-[7px]
                    flex items-center justify-center
                    top-5 rounded-full bg-green-700 p-1'>
                        {totalQuantity}
                    </span>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    className="md:hidden               
                    text-white border-gray-500 rounded-sm"
                >
                    {open ? <X /> : <Menu />}
                </button>
                <Navigation open={open} setOpen={setOpen} />
            </div>

        </nav>
    )
}

const Navigation = ({
    open,
    setOpen,
}: {
    open: boolean,
    setOpen: (value: boolean) => void
}) => {
    return (
        <div
            className={`
        ${open ? 'translate-x-0' : 'translate-x-[110%] scrollbar-hide'}
        transform transition-transform
        w-[180px] border flex items-center flex-col fixed 
        top-19 right-1 rounded-lg bg-gray-800 z-50
        md:static md:w-[500px] md:flex-row md:translate-x-0 md:gap-5
        border-gray-600
      `}
        >
            <Link onClick={() => setOpen(!open)} className="p-2 m-2 hover:underline text-white
            w-[150px]" href="/">
                <p className='flex gap-2'><House /> Home</p>
            </Link>
            <Link onClick={() => setOpen(!open)} className="p-2 m-2  hover:underline text-white
            w-[150px]" href="/profile">
                <p className='flex gap-2'><CircleUser /> Profile</p>
            </Link>
            <Link onClick={() => setOpen(!open)} className="p-2 m-2  hover:underline text-white
            w-[150px]" href="/favorites">
                <p className='flex gap-2'><Heart /> Favorites</p>
            </Link >
        </div >
    )
}

export default Nav
