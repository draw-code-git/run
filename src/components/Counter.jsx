import { useState,useEffect } from "react";

function Counter(){

const [count, setCount]=useState(0)
useEffect(()=>{document.title=`count ${count}`},[count])
  return(
<>
<h1>Count: {count}</h1>
<button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
</>


  );

}

export default Counter;