import React, { useState } from 'react';

const Usestate4 = () => {
    const obj={
        name:"mounika",
        surename:"burri",
    }
    const[upadate,setupdate]=useState(obj)
    function change(){
        setupdate({
            ...upadate ,
            name:"prasanath",
        })
    }
    return (
        <div>
            <h1>firstname:{upadate.name}</h1>
            <button onClick={change}>btn</button>
        </div>
    );
};

export default Usestate4;