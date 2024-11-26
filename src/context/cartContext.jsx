import React, { createContext, useState } from 'react'
import { useContext } from 'react';
const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [cart, setCart] = useState({});
    return (
        <CartContext.Provider value={{ user, cart, setUser, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
