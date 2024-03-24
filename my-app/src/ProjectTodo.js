import React, { useEffect, useState } from 'react';
import "./index1.css";
import { AiFillDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

const ProjectTodo = () => {
    const[iscompletescreen,setiscompletescreen]=useState(false)
    const[alltodo,setalltodo]=useState([])
    const[title,settitle]=useState("");
    const[description,setdescription]=useState("")
    
    const handlechange =()=>{
        const newTodoItem = {
            title: title,
            description: description,
            
        };

        const updatedTodoArray = [...alltodo, newTodoItem];
        setalltodo(updatedTodoArray);
        localStorage.setItem("todolist",JSON.stringify(updatedTodoArray))
    }
    const handledelete=(index)=>{
        let reducedtodo=[...alltodo]
        reducedtodo.splice(index,1)
        setalltodo(reducedtodo)
        localStorage.setItem("todolist",JSON.stringify(reducedtodo))
    }
   
 useEffect(()=>{
        let savedtodo=JSON.parse(localStorage.getItem("todolist"))
        if(savedtodo){
            setalltodo(savedtodo)
        }
    },[])
    
    return (
        <div className='App'>
            <h1>My Todos</h1>
            <div className='todo-wrapper'>
                <div className='todo-input'>
                    <div className='todo-input-item'>
                        <label>Title</label>
                        <input type="text" value={title} onChange={(e)=>
                        settitle(e.target.value)} placeholder='what is task title'/>
                    </div>
                    <div className='todo-input-item'>
                        <label>description</label>
                        <input type="text" value={description} onChange={(e)=>
                            setdescription(e.target.value)} placeholder='what is task description'/>
                    </div> 
                    <div className='todo-input-item'>
                        <button type="button" className='primaryBtn' onClick={handlechange}>Add</button>
                    </div>

                </div>
                <div className='btn-area'>
<button className={`secondarybtn ${iscompletescreen===false && "active"}`} onClick={()=>setiscompletescreen(true)}>Todo</button>
<button className={`secondarybtn ${iscompletescreen===true && "active"}`} onClick={()=>setiscompletescreen(false)}>completed</button>
                </div>
                
                <div className='todo-list'>
                    {alltodo .map((item,index)=>{
                        return(
                            
                            
                            <div className='todo-list-item' key={index}>
                            <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            

                            </div>
    
                        
                        <div>
                            <AiFillDelete className='icon'onClick={()=>handledelete(index)} title="delete?" /> 
                            <BsCheckLg className='check-icon' title="completed?" />
                        </div>
                        
                        </div>
    )

                        
                    })}
                  

                </div>
                
                    </div>
                    </div> 
                    
                    
                    
                
                
                   
                

            
            
        
    );
};

export default ProjectTodo;