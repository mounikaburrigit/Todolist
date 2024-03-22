import { useState } from "react";


const useCounter = () => {
    const[count,setcount]=useState(0)
    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
    const reset=()=>{
        setcount(0)
    } 
    return[count,increment,decrement,reset] 

};

export default useCounter;