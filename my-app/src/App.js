import React, { useState } from 'react';

const App = () => {
    const [count,setcount]=useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{
                setcount(count+1)
            }}> +</button>
            <button onClick={()=>{
                setcount(count-1)
            }}> -</button>
            <button onClick={()=>{
                setcount(0)
            }}> set</button>
            

        </div>
    );
};

export default App;