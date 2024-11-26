import React, { createContext, useState } from 'react'
import { useContext } from 'react';
const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [cart, setCart] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    return (
        <CartContext.Provider value={{ user, cart, setUser, setCart, isOpen, setIsOpen }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
