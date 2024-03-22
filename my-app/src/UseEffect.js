import React, { useEffect, useState } from 'react'; 


const UseEffect = () => { 
    const [count, setCount] = useState(0); 

    useEffect(()=>{
       setTimeout(()=>{
          console.log("i am renderning")
       },1000)
    },[count])

    return(
        <>
        <h1>{count}</h1> 
        <button onClick={()=>setCount(count+1)}>Click </button>
        </>
    )
};

export default UseEffect;