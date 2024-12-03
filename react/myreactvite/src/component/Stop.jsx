import { useState } from "react"

const Stop=()=>{
    
    const [count,setCount]=useState(0)
    function incr(){
      setCount(count+1)

    }
    function dec(){
        setCount(count-1)
    }
   

    return(
        <>
           <div>
            <h1>value of count: {count}</h1>
            <button onClick={incr}>Increment</button>
            <button onClick={dec} >decrement</button>
            </div>
        </>
    )
}
export default Stop