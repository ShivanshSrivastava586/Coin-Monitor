import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Coinpage from './components/Coinpage'
import '../src/App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <div className='navbar'>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>} exact/>
          <Route path='/coins/:id' element={<Coinpage/>} exact/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
