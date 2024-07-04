'use client'

import { useEffect, useState } from 'react'
import { items } from '../mockData/page'
import Image from 'next/image'
import AddToCartButton from './cartButton'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const fetchItems = async () => {
  return items
}

export default function HomePage() {
  const [data, setData] = useState([])
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCartItems = localStorage.getItem('cartItems')
      return savedCartItems ? JSON.parse(savedCartItems) : []
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    const fetchData = async () => {
      const itemsData = await fetchItems()
      setData(itemsData)
    }

    fetchData()
  }, [])

  const addItemToCart = (item) => {
    const newCartItems = [...cartItems, item]
    setCartItems(newCartItems)
    toast.success(`${item.name} foi adicionado ao carrinho!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const removeItemFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemToRemove.id)
    setCartItems(updatedCartItems)
    toast.info(`${itemToRemove.name} foi removido do carrinho!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  console.log(cartItems)

  return (
    <main className="bg-white-background min-h-screen flex flex-col justify-center items-center">
      <ToastContainer />
      <ul className="w-3/4 md:w-5/6 flex flex-wrap mt-8">
        {data.map((item) => (
          <li key={item.id} className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <article className="bg-white rounded-xl p-4 h-96 flex flex-col items-center shadow-lg">
              {item.image && (
                <Image
                  className="mt-5 mb-8"
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                />
              )}
              <div className="border-t w-full flex justify-center mb-3">
                <h2 className="text-lg font-bold mt-3 text-custom-purple">
                  {item.name}
                </h2>
              </div>
              <div className="w-5/7 flex justify-center mb-10">
                <p className="text-sm">{item.description}</p>
              </div>
              <div className="flex flex-row justify-evenly md:justify-between w-full">
                <div className="flex">
                  <p className="font-bold">${item.price}</p>
                  {item.oldPrice && (
                    <p className="line-through font-bold text-xs hidden sm:block">
                      ${item.oldPrice}
                    </p>
                  )}
                </div>
                <AddToCartButton
                  item={item}
                  cartItems={cartItems}
                  addItemToCart={addItemToCart}
                  removeItemFromCart={removeItemFromCart}
                />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  )
}
