import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className='min-h-screen bg-[#111] py-5 px-20'>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default App