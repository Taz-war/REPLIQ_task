"use client";
import { CartContext, useCart } from "@/contexts/CartContext";
// import { cartItems } from "@/data/cartItems.json";
import { useContext } from "react";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  //   return "asd";
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold my-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center my-2">
            <p>
              {item.name} x {item.quantity}
            </p>
            <p>${item.price}</p>
            <button
              className="btn btn-error"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
