import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Error404 from './pages/Error404'
import AsyncCurrentEmployees from './pages/asyncCurrentEmployees'
import Home from './pages/Home'
import './styles/index.scss'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/current-employees"
          element={<AsyncCurrentEmployees />}
        ></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  )
}

export default App
