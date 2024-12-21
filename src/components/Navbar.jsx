import { useNavigate } from 'react-router-dom'

export default function Navbar(){
    const navigate= useNavigate();
    return (
        <div >
        <div>
          <button onClick={()=>{
            navigate('/')
          }}>Landing Page</button>
        </div>
        <div>
          <button onClick={()=>{
           navigate('/dashboard')
          }}>Dashboard</button>
        </div>
      </div>
    )
}