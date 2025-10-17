import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Global CSS for root, body, etc.
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
