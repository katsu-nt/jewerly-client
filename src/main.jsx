import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './output.css'
import AppRoutes from './AppRoutes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes/>
  </StrictMode>
)
