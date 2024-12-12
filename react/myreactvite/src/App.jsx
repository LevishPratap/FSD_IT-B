import { Route,Routes } from "react-router-dom";
import Refex from "./component/Refex";
const App=()=>{
  return(
    <div >
     {/* <nav style={{display:'flex',
      justifyContent:'space-between',
       background:'red',
       margin:0,padding:0,
       listStyle:'none'}}>
         <li style={{fontSize:'25px',textDecoration:'none',listStyle:'none'}}><a href="">Home </a></li>
         <li style={{fontSize:'25px',textDecoration:'none',listStyle:'none'}}><a href="">Home </a></li>
         <li style={{fontSize:'25px',textDecoration:'none',listStyle:'none'}}><a href="">Home </a></li>
      <li style={{fontSize:'25px',textDecoration:'none',listStyle:'none'}}><a href="">Home </a></li>
     </nav> */}

     <div>
       <Routes>
         <Route path="/" element={<h1>Home</h1>}>hh</Route>
         <Route path="/footer" element={<h1>Footer</h1>}>ff</Route>
         <Route path="/admin" element={<h1>Admin</h1>}>ad</Route>
         <Route path="/refex" element={<Refex/>}/>
       </Routes>
     </div>
    </div>

   
  )
}
export default App;