import React, {useRef} from 'react';

const UseRef3 = () => {
    const count=useRef(0);
    const checkvalue=()=>{
        count.current++;
        console.log(count.current)
    }

    return (
        <div>
            
   <button onClick={checkvalue}>check values</button>         
            
        </div>
    );
};

export default UseRef3;