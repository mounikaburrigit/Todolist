import React, {useState, useEffect } from 'react';


const URL="https://jsonplaceholder.typicode.com/users"

const Fetching = () => {
    const [users,setUsers]=useState([]) 

    const fetching=async(apiUrl)=>{
         const response=await fetch(apiUrl) 
         const data=await response.json() 
         setUsers(data)
    } 
     
    useEffect(()=>{
        fetching(URL)
    },[])
    
    return (
        <div>
            <ul>
                {
                    users.map((eachuser)=>{
                        return(
                            <li key={eachuser.id}> 
                               {eachuser.name}
                               <h1>{eachuser.address.street}</h1>

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Fetching;