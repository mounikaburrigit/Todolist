import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => { 
    const [inputValue,setInputValue]=useState("") 
    const count =useRef(0) 

    useEffect(()=>{
        count.current=count.current+1
    })
    return (
        <div>
          <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>  
          <h1>I am renderning {count.current} this times</h1>
       
        </div>
    );
};

export default UseRef;