import React, { useMemo, useState } from 'react';

const UseMemo = () => {
    const [countOne,setCountOne]=useState(0) 
    const [countTwo,setCountTwo]=useState(0) 


// const Even=useMemo(()=>{
//       let i=0 
//       while(i<200000000000000)i++ 
//       return countOne%2===0
// },[countOne])




    return (
        <div>
            <h1>{countOne}</h1> 
           

            <h2>{countTwo}</h2> 

            <button onClick={()=>setCountOne(countOne+1)}>Count One</button> 
            {/* {Even?"Even":"Odd"} */}
            <button onClick={()=>setCountTwo(countTwo-1)}>Count Two</button>
        </div>
    );
};

export default UseMemo;