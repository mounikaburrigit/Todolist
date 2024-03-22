import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => { 
    const [childData,setChildData]=useState("")
    return (
        <div>  
            <h1>I{childData}</h1>
            <ChildComponent Data={(data)=>setChildData(data)}/>
            <h1>Parent Component</h1>
        </div>
    );
};

export default ParentComponent;