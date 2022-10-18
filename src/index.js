import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import DataProvider from './utils/context'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
)
