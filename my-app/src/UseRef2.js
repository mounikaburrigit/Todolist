import React, { useRef } from 'react';


const UseRef2 = () => { 
    const inpoutElement=useRef()
     
    const focus=()=>{
        inpoutElement.current.focus()
    }
    

    return (
        <div>
            <input ref={inpoutElement}/> 
            <button onClick={focus}>Click</button>
        </div>
    );
};

export default UseRef2;