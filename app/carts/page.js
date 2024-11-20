"use client"

import React from "react";

const carts = () => {
  const [items, setItems] = React.useState([
    { id: 1, name: "Product 1", price: 100, quantity: 2 },
    { id: 2, name: "Product 2", price: 200, quantity: 1 },
  ]);

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        {items.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty!</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-300">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between py-4">
                  <div>
                    <h2 className="text-lg font-medium">{item.name}</h2>
                    <p className="text-sm text-gray-600">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <p className="text-lg font-bold">
                    ${item.price * item.quantity}
                  </p>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between">
              <span className="text-lg font-medium">Total:</span>
              <span className="text-lg font-bold">${calculateTotal()}</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-6 hover:bg-blue-600">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default carts;
