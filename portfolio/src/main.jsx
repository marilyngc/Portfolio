import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <Analytics/>
    <App />
  </ThemeContextProvider>,
)
