import React from 'react';

const ChildComponent = ({Data}) => {
    return (
        <div>
            <h1>Child Component</h1> 
            <button onClick={()=>Data("I am from Child")}>Send Data from child</button>
        </div>
    );
};

export default ChildComponent;