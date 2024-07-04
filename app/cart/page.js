"use client"

import React, { useEffect, useState } from 'react';
import Header from '../header/page';
import Link from 'next/link';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Calculating total price of all items in the cart
  const totalPrice =
    cartItems.length > 0
      ? cartItems
          .reduce((total, item) => total + parseFloat(item.price), 0)
          .toFixed(2)
      : '0.00';

  return (
    <div>
      <Header />
      <div className="bg-white-background h-screen flex flex-col items-center overflow-x-auto">
        <table className="w-full sm:w-[50%] ss:w-[80%] divide-y divide-gray-200 mt-12 mb-2 ">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
               
              >
                Product
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                
              >
                Quantity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 font-bold uppercase tracking-wider"
               
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="h-15 w-20 ss:block hidden"
                    />
                    <div className="ml-4 text-sm font-medium text-gray-900">
                      {item.name}
                    </div>
                  </div>
                </td>
                <td className="px-12 py-2 whitespace-nowrap">
                  <div className="text-sm text-gray-900">1</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm text-gray-900">${item.price}</div>
                    <button
                      className="ml-2 px-3 py-2 text-red-700 "
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <IoClose style={{ fontSize: '1.5rem' }} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-20 flex justify-end items-center">
          <p className="">
            Total{' '}
            <span className="text-black-700 font-bold">
              {parseFloat(totalPrice).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
              })}
            </span>
          </p>
        </div>

        <Link href="/" className="text-custom-purple text-lg font-bold mt-4">
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}
