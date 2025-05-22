// 'use client'

// import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

// type Product = {
//     id: number
//     name: string
//     image: string
//     price: number
//     discount: string
//     discountedPrice: number
// }

// type ShopContextType = {
//     cart: Product[]
//     favorites: Product[]
//     addToCart: (product: Product) => void
//     removeFromCart: (productId: number) => void
//     addToFavorites: (product: Product) => void
//     removeFromFavorites: (productId: number) => void
//     isFavorite: (productId: number) => boolean
//     isInCart: (productId: number) => boolean
// }

// const ShopContext = createContext<ShopContextType | undefined>(undefined)

// const localStorageKey = {
//     cart: 'shop_cart',
//     favorites: 'shop_favorites',
// }

// export const ShopProvider = ({ children }: { children: ReactNode }) => {
//     const [cart, setCart] = useState<Product[]>([])
//     const [favorites, setFavorites] = useState<Product[]>([])

//     // Load from localStorage on first render
//     useEffect(() => {
//         const cartData = localStorage.getItem(localStorageKey.cart)
//         const favoritesData = localStorage.getItem(localStorageKey.favorites)

//         if (cartData) setCart(JSON.parse(cartData))
//         if (favoritesData) setFavorites(JSON.parse(favoritesData))
//     }, [])

//     // Save to localStorage when state changes
//     useEffect(() => {
//         localStorage.setItem(localStorageKey.cart, JSON.stringify(cart))
//     }, [cart])

//     useEffect(() => {
//         localStorage.setItem(localStorageKey.favorites, JSON.stringify(favorites))
//     }, [favorites])

//     const addToCart = (product: Product) => {
//         if (!cart.some(p => p.id === product.id)) {
//             setCart(prev => [...prev, product])
//         }
//     }

//     const removeFromCart = (productId: number) => {
//         setCart(prev => prev.filter(p => p.id !== productId))
//     }

//     const addToFavorites = (product: Product) => {
//         if (!favorites.some(p => p.id === product.id)) {
//             setFavorites(prev => [...prev, product])
//         }
//     }

//     const removeFromFavorites = (productId: number) => {
//         setFavorites(prev => prev.filter(p => p.id !== productId))
//     }

//     const isFavorite = (productId: number) => favorites.some(p => p.id === productId)
//     const isInCart = (productId: number) => cart.some(p => p.id === productId)

//     return (
//         <ShopContext.Provider
//             value={{
//                 cart,
//                 favorites,
//                 addToCart,
//                 removeFromCart,
//                 addToFavorites,
//                 removeFromFavorites,
//                 isFavorite,
//                 isInCart
//             }}
//         >
//             {children}
//         </ShopContext.Provider>
//     )
// }

// export const useShop = () => {
//     const context = useContext(ShopContext)
//     if (!context) {
//         throw new Error('useShop must be used within a ShopProvider')
//     }
//     return context
// }

'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Product = {
    id: number
    name: string
    image: string
    price: number
    discount: string
    discountedPrice: number
}


type CartItem = Product & { quantity: number }


type ShopContextType = {
    cart: CartItem[]
    favorites: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (productId: number) => void
    addToFavorites: (product: Product) => void
    removeFromFavorites: (productId: number) => void
    isFavorite: (productId: number) => boolean
    isInCart: (productId: number) => boolean
}

const ShopContext = createContext<ShopContextType | undefined>(undefined)

const localStorageKey = {
    cart: 'shop_cart',
    favorites: 'shop_favorites',
}

export const ShopProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([])
    const [favorites, setFavorites] = useState<Product[]>([])
    useEffect(() => {
        const cartData = localStorage.getItem(localStorageKey.cart)
        const favoritesData = localStorage.getItem(localStorageKey.favorites)

        if (cartData) setCart(JSON.parse(cartData))
        if (favoritesData) setFavorites(JSON.parse(favoritesData))
    }, [])

    useEffect(() => {
        localStorage.setItem(localStorageKey.cart, JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        localStorage.setItem(localStorageKey.favorites, JSON.stringify(favorites))
    }, [favorites])

    const addToCart = (product: Product) => {
        setCart(prev => {
            const existingItem = prev.find(p => p.id === product.id)
            if (existingItem) {
                return prev.map(p =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                )
            } else {
                return [...prev, { ...product, quantity: 1 }]
            }
        })
    }


    const removeFromCart = (productId: number) => {
        setCart(prev => {
            return prev
                .map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter(item => item.quantity > 0)
        })
    }


    const addToFavorites = (product: Product) => {
        if (!favorites.some(p => p.id === product.id)) {
            setFavorites(prev => [...prev, product])
        }
    }

    const removeFromFavorites = (productId: number) => {
        setFavorites(prev => prev.filter(p => p.id !== productId))
    }

    const isFavorite = (productId: number) => favorites.some(p => p.id === productId)
    const isInCart = (productId: number) => cart.some(p => p.id === productId)

    return (
        <ShopContext.Provider
            value={{
                cart,
                favorites,
                addToCart,
                removeFromCart,
                addToFavorites,
                removeFromFavorites,
                isFavorite,
                isInCart
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}

export const useShop = () => {
    const context = useContext(ShopContext)
    if (!context) {
        throw new
            Error('useShop must be used within a ShopProvider')
    }
    return context
}



