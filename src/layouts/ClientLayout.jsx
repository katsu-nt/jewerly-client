import React from 'react'
import HeaderClient from '../components/HeaderClient'

export default function ClientLayout({children}) {
  return (
    <div>
      <HeaderClient></HeaderClient>
      {children}
    </div>
  )
}
