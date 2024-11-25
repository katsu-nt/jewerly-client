import React from 'react'
import HeaderAdmin from "../components/HeaderAdmin.jsx"
export default function AdminLayout({children}) {
  return (
    <div>
      <HeaderAdmin></HeaderAdmin>
      {children}
    </div>
  )
}
