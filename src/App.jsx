import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, {lazy, Suspense, useContext, useState} from 'react';
import  LandingPage  from './components/Landing'
import { CountContext } from './context';
const  Navbar = lazy(()=>import ('./components/Navbar'));
const Dashboard=lazy(()=>import ('./components/Dashboard'))

function App() {
  const [count,setCount]=useState(0);
  return (
    <div>
      <BrowserRouter> 
      <Navbar/>
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={'loading...'}><Dashboard /></Suspense>}></Route>
          <Route path='/' element={<Suspense fallback={'loading...'}><LandingPage /></Suspense>}></Route>
        </Routes>
      </BrowserRouter>

      <CountContext.Provider value={{count, setCount}}>
      <Count count={count} setCount={setCount}/>
      </CountContext.Provider>
      
      {/* <Buttons setCount={setCount}/> */}
    </div>
  )
}

function Count({count, setCount}){
  return(
    <div>
      <CountRender/>
      <Buttons count={count} setCount={setCount}/>
    </div>
  )
}

function CountRender(){
  const count = useContext(CountContext);
  return(
    <div>
      {count}
    </div>
  )
}

function Buttons({setCount}){
  const count = useContext(CountContext);
return(
  <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>
      Increase
    </button>
    <button onClick={()=>{
      setCount(count-1)
    }}>
      Decrease
    </button>
  </div>
)
}

export default App
