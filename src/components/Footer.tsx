import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full bg-gray-700 text-white">
            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                    <h2 className="font-semibold mb-2">Tech Shop</h2>
                    <p className="text-gray-400">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolore nostrum est doloremque eos iusto delectus nemo aliquid, numquam quisquam rerum fuga distinctio commodi dolores necessitatibus repudiandae nulla? Voluptas, corrupti?
                    </p>
                </div>


                <div>
                    <h2 className="font-semibold mb-2">Quick Links</h2>
                    <ul className="space-y-1 text-gray-300">
                        <li><Link href="/"><span className="hover:underline">Home</span></Link></li>
                        <li><Link href="/shop"><span className="hover:underline">Shop</span></Link></li>
                        <li><Link href="/cart"><span className="hover:underline">Cart</span></Link></li>
                        <li><Link href="/favorites"><span className="hover:underline">Favorites</span></Link></li>
                        <li><Link href="/contact"><span className="hover:underline">Contact</span></Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-2">Contact</h2>
                    <p className="text-gray-400">Email: <a href="mailto:contact@techshop.com" className="hover:underline">contact@example.com</a></p>
                    <p className="text-gray-400">Location: India</p>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-4 py-4 text-center text-gray-500 text-xs">
                &copy; 2025 Kartikey Mishra. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
