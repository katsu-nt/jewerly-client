import React from 'react'
import HeaderClient from '../components/HeaderClient'

export default function ClientLayout({ children }) {

  return (
    <div>
      <HeaderClient></HeaderClient>
      <div style={{ height: 'calc(100vh - 136px)', overflowY: 'auto', overflowX: 'hidden' }}>
        {children}
      </div>
    </div>
  )
}
