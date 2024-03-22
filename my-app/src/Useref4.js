import React,{useRef} from 'react';

const Useref4 = () => {
    const inputvalue=useRef("")
    const inputcheck=()=>{
         inputvalue.current.focus()
    }
    return (
        <div>
            <input type="text" ref={inputvalue}></input>
            <button onClick={inputcheck}>submit</button>
        </div>
    );
};

export default Useref4;