import React, { useState } from 'react';

const Higerord2 = () => {
    const[count,setcount]=useState(0)
    return (
        <div>
            <h1 onMouseEnter={()=>{
                setcount(count+1)
            }}>heading {count}</h1>
        </div>
    );
};

export default Higerord2;