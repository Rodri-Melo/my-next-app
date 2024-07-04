"use client"

import { useState, useEffect } from 'react'
import { BsCart3 } from 'react-icons/bs'
import Link from 'next/link'

export default function Header() {
  const [cartItemCount, setCartItemCount] = useState(0)

  useEffect(() => {
    const updateCartItemCount = () => {
      if (typeof window !== 'undefined') {
        const savedCartItems = localStorage.getItem('cartItems')
        if (savedCartItems) {
          setCartItemCount(JSON.parse(savedCartItems).length)
        }
      }
    }

    updateCartItemCount()

    window.addEventListener('storage', updateCartItemCount)

    return () => {
      window.removeEventListener('storage', updateCartItemCount)
    }
  }, [])

  return (
    <header className="border-b-2 border-custom-grey p-5 flex bg-custom-offWhite">
      <div className="w-full flex">
        <h1
          className="
          sm:text-2xl
          md:text-2xl 
          lg:text-3xl 
          text-custom-purple flex items-center justify-center"
          style={{ width: '35%', marginRight: '35%', marginLeft: '0%' }}
        >
          Dev Store
        </h1>
        <div className="text-red flex items-center justify-center relative" style={{ width: '10%' }}>
          <Link href="/cart">
            <BsCart3 className="sm:text-2xl md:text-3xl lg:text-4xl" />
          </Link>
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </div>
      </div>
    </header>
  )
}
