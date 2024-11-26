import React, { useEffect } from 'react'
import HeaderClient from '../components/HeaderClient'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export default function ClientLayout({ children }) {
  const role = localStorage.getItem('role');
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <HeaderClient></HeaderClient>
      <div style={{ height: 'calc(100vh - 136px)', overflowY: 'auto', overflowX: 'hidden' }}>
        {children}
      </div>
    </div>
  )
}
