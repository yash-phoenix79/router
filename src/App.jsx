import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { LandingPage } from './components/Landing'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/' element={<LandingPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
