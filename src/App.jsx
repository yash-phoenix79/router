import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, {lazy, Suspense} from 'react';
import  LandingPage  from './components/Landing'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom } from './store/atoms/count';
const  Navbar = lazy(()=>import ('./components/Navbar'));
const Dashboard=lazy(()=>import ('./components/Dashboard'))

function App() {
  // const [count,setCount]=useState(0);
  return (
    <RecoilRoot>
    <div>
      <BrowserRouter> 
      <Navbar/>
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={'loading...'}><Dashboard /></Suspense>}></Route>
          <Route path='/' element={<Suspense fallback={'loading...'}><LandingPage /></Suspense>}></Route>
        </Routes>
      </BrowserRouter>


      <Count/>

      
      {/* <Buttons setCount={setCount}/> */}
    </div>
    </RecoilRoot>
  )
}

function Count(){
  return(
    <div>
      <CountRender/>
      <Buttons/>
    </div>
  )
}

function CountRender(){

  const count = useRecoilValue(countAtom);

  return(
    <div>
      {count}
    </div>
  )
}

function Buttons(){

  // const [setCount]=useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom)

return(
  <div>
    <button onClick={()=>{
      setCount(count => count+1)
    }}>
      Increase
    </button>
    <button onClick={()=>{
      setCount(count => count-1)
    }}>
      Decrease
    </button>
  </div>
)
}

export default App
