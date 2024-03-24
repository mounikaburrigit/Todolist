import React, { useState } from 'react';

const App = () => {
    const[title,settitle]=useState("") 
    const[alltodo,setalltodo]=useState([])
    const[description,setdescription]=useState("")
    const handle=()=>{
        const newTodoItem = {
            title: title,
            description: description,
        };

        const updatedTodoArray = [...alltodo, newTodoItem];
        setalltodo(updatedTodoArray);
    }

    return (
        <div>
            <label>Title</label>
            <input type="text" value={title} onChange={(e)=>settitle(e.target.value)}/> <br></br>
            <label>description</label>
            <input type="text" value={description} onChange={(e)=>setdescription(e.target.value)}/> 
            <button onClick={handle}>add</button>
            <div>
                {alltodo.map((item,index)=>{
                    return (
                        <div className='con' key={index}>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            </div>
                    )

                })}
                
            </div>
            
            </div> 
           
    )


                
};

export default App;