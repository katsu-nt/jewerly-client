import React from 'react'
import HeaderClient from '../components/HeaderClient'
import CartDrawer from '../components/CartDrawer.jsx'
import { useCart } from '../context/cartContext.jsx'

export default function ClientLayout({ children }) {
  const { user, cart, setUser, setCart, isOpen, setIsOpen } = useCart()
  return (
    <div>
      <HeaderClient></HeaderClient>
      <div style={{ height: 'calc(100vh - 136px)', overflowY: 'auto', overflowX: 'hidden' }}>
        {children}
        {isOpen ? <CartDrawer /> : <></>}
      </div>
    </div>
  )
}
