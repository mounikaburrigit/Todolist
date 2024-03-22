import React from 'react';
let a={
 name:"mounika",
 age:"23",
}
let b={
    name:"priyanka",
 age:"25",
}

const SimpleCode = () => {
    return (
        <div>
            <Name firstname= {a.name} age={a.age}/>
            <Name firstname= {b.name} age={b.age}/>
        </div>
    );
};

function Name(Props){
    return (
        <div>
            <>
            <h1>{Props.firstname}</h1>
            <p>{Props.age}</p>
            </>
        </div>
    )
}
export default SimpleCode;
