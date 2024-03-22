import React, { useState } from 'react';
import './index.css'


const Calculater2 = () => {
  const[input,setInput]=useState(" ")
  return (
    <div className='conatainer'>
      <div className='calculator'>
        <form action=" ">
          <div>
  <input className='input' type="text" value={input}/> 
  <div className='display'>
    <input className='inputac' type="button" value="Ac" onClick={(e)=>{
setInput(" ")
    }}/>
    <input className='inputac1'  type="button" value="dc" onClick={(e)=>{
setInput(input.slice(0,-1))
    }}/>
    <input className='inputac1' type="button" value="." onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
    <input className='inputasymbol' type="button" value="/" onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
  </div>
  <div className='display2'>
    <input className='btn7' type="button" value="7" onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
    <input className='btn8 ' type="button" value="8" onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
    <input className='btn9' type="button" value="9" onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
    <input className='inputasymbol1' type="button" value="*" onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
  </div>
  <div className='display3'>
    <input className='btn4' type="button" value="4" onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
    <input className='btn5' type="button" value="5" onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
    <input className='btn6' type="button" value="6" onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
    <input className='inputasymbol2' type="button" value="+" onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
  </div>
  <div className='display4'>
    <input className='btn4' type="button" value="3" onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
    <input className='btn4' type="button" value="2" onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
    <input className='btn4' type="button" value="1" onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
     <input className='inputasymbol3' type="button" value="-" onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
  </div>
  <div className='display'>
    <input className='btn4' type="button" value="00" onClick={(e)=>{
setInput(input+e.target.value)
    }} />
    <input className='btn4' type="button" value="0" onClick={(e)=>{
setInput(input+e.target.value)
    }}/>
    <input className='inputasymbol4' type="button" value="=" onClick={(e)=>{
setInput(eval(input)+"")
    }}/>
    
  </div>


</div>



        </form>

      </div>
      
    </div>
  );
};

export default Calculater2;