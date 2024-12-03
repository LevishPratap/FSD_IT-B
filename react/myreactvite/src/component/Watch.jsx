import { useEffect, useState } from "react";

const Watch=()=>{
    
    const[min, setMin]=useState(0)
    const [sec,setSec]=useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setSec(sec=>sec+1)
        },1000)
        return(
            ()=>{
                clearInterval(interval);
            }
        )
    },[])
    return(
        <>
          <div>
            <h1>{min}:{sec}</h1>
            {/* <button onClick={start}>START</button> */}
            <button>RESET</button>
          </div>
        </>
    )
}
export default Watch;