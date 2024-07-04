"use client"

import HomePage from './pages/page';
import Header from './header/page';
import { useState } from 'react'

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCartItems = localStorage.getItem('cartItems');
      return savedCartItems ? JSON.parse(savedCartItems) : [];
    }
    return [];
  });

  return (
    <>
      <Header cartItems={cartItems} />
      <HomePage initialCartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}
