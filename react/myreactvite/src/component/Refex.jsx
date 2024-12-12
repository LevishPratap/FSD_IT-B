import { useRef, useState } from "react";
const Refex=()=>{
    const RefCount=useRef(0)
        console.log("Component Rendered")
    function Increment(){
        RefCount.current++;
        console.log('redered time:',RefCount.current);
        if (RefCount.current%5==0){
            alert('Redered Value reached the desired limit');
        }
    } 
    return(
        <>
        <div style={{fontSize:'30px'}}>Refex</div>
        <h2>RefCount:{RefCount.current}</h2>
        <button onClick={Increment}>Increamentbttn</button>
        </>

    )
}
export default Refex;