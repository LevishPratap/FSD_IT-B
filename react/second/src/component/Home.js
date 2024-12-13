import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <div style={{background:'yellow', display:'flex',
        justifyContent:'space-around', height:'70px',
        alignItems:'center' }}>
          
            <Link to='/login' 
             style={{fontSize:'25px',
             textDecoration:'none',
             color:'black',
              fontWeight:'bold'}}> Login
            </Link>
           
            <Link to='/register' 
             style={{fontSize:'25px',
             textDecoration:'none',
             color:'black',
              fontWeight:'bold'}}> Register
            </Link>

          
      </div>
      
    </>
  )
}

export default Home
