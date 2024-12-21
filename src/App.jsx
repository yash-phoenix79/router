import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, {lazy} from 'react';
import  LandingPage  from './components/Landing'
import Navbar from lazy(()=>import ('./components/Navbar'));
const Dashboard=lazy(()=>import ('./components/Dashboard'))

function App() {

  

  return (
    <div>

      
      <BrowserRouter> 
      <Navbar/>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/' element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
