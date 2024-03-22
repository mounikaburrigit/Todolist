import React, { useState } from 'react';
const array=[{
    id:1,
    name:"mounka",
    age:23
},
{
    id:2,
    name:"priyanka",
    age:23

}




]

const Usestate3 = () => {
    const[data,setdata]=useState(array)
    return (
        <div>
            <ul>
                {
                    data.map((e)=>{
return(
    <li key={e.id}>{e.name}


    <li>{e.age}</li>
    </li>
    
)
                    })
                }
            </ul>
        </div>
    );
};

export default Usestate3;