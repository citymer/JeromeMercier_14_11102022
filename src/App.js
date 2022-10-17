import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error404 from './pages/Error404'
import CurrentEmployees from './pages/CurrentEmployees'
import Home from './pages/Home'
import './styles/index.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/current-employees" element={<CurrentEmployees />}></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
