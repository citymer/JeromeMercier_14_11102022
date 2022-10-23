import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.scss'
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
