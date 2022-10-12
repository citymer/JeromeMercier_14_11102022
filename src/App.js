import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CurrentEmployees from './pages/CurrentEmployees';
import Home from './pages/Home';
import './styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/current-employees' element={<CurrentEmployees />}></Route>

      </Routes>
     </BrowserRouter>
 )   
}

export default App;