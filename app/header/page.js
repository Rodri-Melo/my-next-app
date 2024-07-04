'use client'

import React, { useState, useEffect, useRef } from 'react'
import { BsCart3 } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '../../public/logo.jpg'

export default function Header() {
  const [cartItemCount, setCartItemCount] = useState(0)
  const previousItemCountRef = useRef(0)

  useEffect(() => {
    const updateCartItemCount = () => {
      const savedCartItems = localStorage.getItem('cartItems')
      if (savedCartItems) {
        const items = JSON.parse(savedCartItems)
        const newCount = items.length
        setCartItemCount(newCount)

        if (newCount !== previousItemCountRef.current) {
          previousItemCountRef.current = newCount
        }
      } else {
        setCartItemCount(0)
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
        <div
          className="sm:text-2xl md:text-2xl lg:text-3xl text-custom-purple flex items-center justify-center"
          style={{ width: '35%', marginRight: '35%', marginLeft: '0%' }}
        >
           <Image src={LogoImage} alt="Logo" className="h-13"  /> 
        </div>
        <div
          className="text-red flex items-center justify-center relative"
          style={{ width: '10%' }}
        >
          <Link href="/cart">
            <div className="relative">
              <BsCart3 className="" style={{ fontSize: '3rem' }} />
              {cartItemCount > 0 && (
                <span
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
                  style={{
                    transform: 'translate(50%, -50%)',
                    top: '5px',
                    right: '25%',
                  }}
                >
                  {cartItemCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
