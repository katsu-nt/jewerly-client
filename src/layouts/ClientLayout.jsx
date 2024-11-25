import React from 'react'
import HeaderClient from '../components/HeaderClient'

export default function ClientLayout({ children }) {
  return (
    <div>
      <HeaderClient></HeaderClient>
      <div style={{ marginTop: '30px' }}>
        {children}
      </div>
    </div>
  )
}
