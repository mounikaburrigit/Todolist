import React, { useState } from 'react';

const obj1={
    firstName:"Priyanka",
    lastNmae:"Burri"

}
const UseStateObject = () => { 
    const [obj,setObj]=useState(obj1) 
    const handleclick=()=>{
        
        setObj((prev)=>{
            return {...prev,firstName:"mounika"}
        })
       
    }
    return (
        <div>
           <h1>firstName {obj.firstName}</h1>  
           <h2>LastName {obj.lastNmae}</h2> 
           <button onClick={handleclick}>update FirstName</button>
        </div>
    );
};

export default UseStateObject;