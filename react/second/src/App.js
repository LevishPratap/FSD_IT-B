import { Routes, Route } from 'react-router-dom';
import Login from './component/login'
import Register from './component/Register'
import Home from './component/Home'
const App=()=>{
  return (
        <>
          
             <Routes>
                <Route path='/' element={<Home/>}>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
               </Route>
             </Routes>
        </>
  )
}
export default App;