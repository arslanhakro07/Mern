import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>
      <li className='link'><a href="https://www.facebook.com/">facebook</a></li>
      <li className='link'><a href="https://www.google.com/">google</a></li>
      <li className='link'><a href="https://www.whatsapp.com/">WhatsApp</a></li>
      <li className='link'><a href="https://www.twitter.com/">Twitter</a></li>
     </div>

    
    
      <div className='circle' onClick={()=>{
        alert("dont click me");
      }}>
      <div className='circles'>
    
      </div>
      <div className='circles'>
        
        </div>
        <div className='circles'>
        
        </div>
        <div className='circles'>
        
        </div>
        </div>
        <div className='form' >
       Email:<input 
           type="text" name="email" id="" /> <br />
       Passw:<input type="password" name="password" id="" />
       <br />
                 <input onClick={
          ()=>{
            alert("form submitted");
          }
        } type="submit" value="Login" className='login' />

        </div>
    </>
  )
}

export default App
