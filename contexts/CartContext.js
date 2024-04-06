"use client"
import React, { createContext, useContext, useState } from 'react';
import items from '@/data/cartItems.json'

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([...items]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            // Check if product is already in cart
            const itemExists = prevItems.find(item => item.id === product.id);
            if (itemExists) {
                // Increase quantity
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Add new item
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
