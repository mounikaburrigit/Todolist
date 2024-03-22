import React, { useState } from 'react';

const Usestateform = () => {
    const[firstname,setfirstname]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
// const changename=(e)=>{
//     setfirstname(e.target.value)
// }
// const changeemail=(e)=>{
//     setemail(e.target.value)
// }
// const changepassword=(e)=>{
//     setpassword(e.target.value)
// }
const handleinputchnage=(e,name)=>{
    console.log(e.target.value,name)
    if(name==="firstname"){
        setfirstname(e.target.value)
    }else if(name==="email"){
        setemail(e.target.value)
    }else if(name==="password"){
        setpassword(e.target.value)
    }
}
    return (
        <div>
            <form>
                <div>
                <input type="text" name="firstname"
                id="firstname" 
                value={firstname}
                onChange={(e)=>handleinputchnage(e,"firstname")}
                placeholder='enter your name'/>
                </div>
                <div>
                <input type="email" name="email"
                id="email" 
                value={email}
                onChange={(e)=>handleinputchnage(e,"email")}
                placeholder='enter your email'/>
                </div>
                <div>
                <input type="password" name="password"
                id="password" 
                value={password}
onChange={(e)=>handleinputchnage(e,"password")}
                placeholder='enter your password'/>
                </div>
                <div>
                    <button>submit</button>
                </div>
            </form>
        </div>
    );
};

export default Usestateform;