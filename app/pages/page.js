import { useEffect, useState } from 'react'
import { items } from '../mockData/page'
import Image from 'next/image'
import AddToCartButton from './cartButton'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const fetchItems = async () => {
  return items
}

export default function HomePage({ initialCartItems, setCartItems }) {
  const [data, setData] = useState([]);
  const [localCartItems, setLocalCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCartItems = localStorage.getItem('cartItems');
      return savedCartItems ? JSON.parse(savedCartItems) : [];
    }
    return [];
  });

 
  useEffect(() => {
    if (initialCartItems && initialCartItems.length > 0) {
      setLocalCartItems(initialCartItems);
    }
  }, [initialCartItems]);

  useEffect(() => {
    const fetchData = async () => {
      let itemsData = JSON.parse(localStorage.getItem('cachedItems'))
      const cacheTimestamp = localStorage.getItem('cacheTimestamp')
      const now = Date.now()

      if (
        !itemsData ||
        !cacheTimestamp ||
        now - parseInt(cacheTimestamp) > 120000
      ) {
        itemsData = await fetchItems()
        localStorage.setItem('cachedItems', JSON.stringify(itemsData))
        localStorage.setItem('cacheTimestamp', now.toString())
      }

      setData(itemsData)
    }

    fetchData()
  }, [])

  const addItemToCart = (item) => {
    const newCartItems = [...localCartItems, item]
    setLocalCartItems(newCartItems)
    setCartItems(newCartItems) 

    localStorage.setItem('cartItems', JSON.stringify(newCartItems))

    toast.success(`${item.name} foi adicionado ao carrinho!`, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const removeItemFromCart = (itemToRemove) => {
    const updatedCartItems = localCartItems.filter(
      (item) => item.id !== itemToRemove.id
    )
    setLocalCartItems(updatedCartItems)
    setCartItems(updatedCartItems) 

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))

    toast.info(`${itemToRemove.name} foi removido do carrinho!`, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

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
                  cartItems={localCartItems} 
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
