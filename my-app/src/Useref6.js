import React,{useRef, useState} from 'react';

const Useref6 = () => {
    const ele=useRef()
    let x=useRef(10)
    const[y,sety]=useState(100)
    return (
        <div>
            <h1 ref={ele} className='head'>this is heading</h1>
            
            <button onClick={()=>{
        
            
                ele.current.classList.toggle("head")
        
            }}>button</button>
            <p>x value:{x.current}</p>
            <button onClick={()=>{
                x.current=x.current+10
                console.log(x.current)
                sety(y+1)
            }}>increment</button>
        </div>
    );
};

export default Useref6;