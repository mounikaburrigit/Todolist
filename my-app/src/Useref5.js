import React from 'react';
import { useRef } from 'react';


const Useref5 = () => {
    const count=useRef(0)
    const inputvalue=()=>{
        count.current++
        console.log(count.current)
    }
    return (
        <div>
            
            <button onClick={inputvalue}>button</button>
        </div>
    );
};

export default Useref5;