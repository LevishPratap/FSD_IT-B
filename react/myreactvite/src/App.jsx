import Home from "./component/Home";
import {Routes,Route} from "react-router-dom"
import Stop from "./component/Stop";
import Watch from "./component/Watch";

const App=()=>{
  return(
    <div>
     <h1>heloo</h1>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stop" element={<Stop />} >Stop</Route>
        <Route path="/watch" element={<Watch/>}></Route>
       
      </Routes>
    

    </div>
  )
}
export default App;