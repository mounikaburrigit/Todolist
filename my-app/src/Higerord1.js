import React,{useState} from 'react';

const Higerord1 = () => {
    const[count,setcount]=useState(0)
    return (
        <div>
            <button onClick={()=>{
                setcount(count+1)
            }}>this is {count} value</button>
        </div>
    );
};

export default Higerord1;