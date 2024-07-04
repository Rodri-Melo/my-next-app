import React, { useState, useEffect } from 'react'

const AddToCartButton = ({ item, cartItems, addItemToCart, removeItemFromCart }) => {
  const [inCart, setInCart] = useState(false)

  useEffect(() => {
    const isInCart = cartItems.some(cartItem => cartItem.id === item.id)
    setInCart(isInCart)
  }, [cartItems, item])

  const handleButtonClick = () => {
    if (inCart) {
      removeItemFromCart(item)
    } else {
      addItemToCart(item)
    }
  }

  return (
    <>
      {inCart ? (
        <span
          className="text-xs cursor-pointer"
          onClick={() => {
            setInCart(false)
            removeItemFromCart(item)
          }}
        >
          in the cart
        </span>
      ) : (
        <button
          className="bg-purple-button text-white text-xs px-4 rounded hover:bg-purple-button"
          onClick={handleButtonClick}
        >
          add to cart
        </button>
      )}
    </>
  )
}

export default AddToCartButton
