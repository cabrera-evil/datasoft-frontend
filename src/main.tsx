import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_PUBLIC_API_URL || "http://localhost:8080/api";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
