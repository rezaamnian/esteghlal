"use client"

import React, { useEffect, useState } from 'react'
import './style.css'
export default function Prodoctpage() {
const [w1,setw1]=useState([]);
const[name,setname]=useState('');
const[contry,setcontry]=useState('');
const[apdate,setappdate]=useState(false);
const [ls,setls]=useState([]);
const [apdateobject,setappdateobject]=useState();
const [apdateinput,setappdateinput]=useState();
const [del1,setdel1]=useState();
const [delet,setdelet]=useState(false);


function fetchprodoct(){
    fetch("http://localhost:5000/api/prodoct").then(res=>res.json()).then(data=>setw1(data))
}


function adding(){
 const q1= w1.every((v)=>v.name !==name);
 if(q1){

fetch("http://localhost:5000/api/prodoct",
  {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({name:name,contry:contry})
    }
).then(fetchprodoct);
setcontry("");
setname("");



 }


}

function appditing(){
if(apdate==false){
  setappdate(true);
}
else{
  setappdate(false)
}
}

function apdate2(){

   fetch("http://localhost:5000/api/prodoct",
  {
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({name:apdateinput,contry:apdateobject.contry})
    }
  ).then(fetchprodoct);
  setappdateinput('');
  setappdate(false);
 console.log(w1);


}

useEffect(()=>{
     fetchprodoct();
}

,[])

function deleted (){
fetch("http://localhost:5000/api/prodoct",
  {
    method:"DELETE",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({name:del1.name,contry:del1.contry})
    }).then(fetchprodoct);

}
  return (
    <div >
       
       {w1 && w1.map((v,c)=>(
        <div key={c} className='h2'
        onMouseOver={()=>{
          console.log(v);
         setdelet(true);
        }}
        onMouseOut={()=>{setdelet(false)}}
        onClick={()=>{
          appditing()
          setappdateobject(v)
        }}>
            <h2 className='h1'>{v.name}</h2> 
           {delet && <button className='delete' onClick={()=>{deleted()}}>delete</button>

           } 
        </div>
       )
       
       )
      
       }
       <br />
       
       {apdate && (
        <div className='apdate'>
          <label >city:</label>
          <input type="text" className='input2' onChange={(e)=>setappdateinput(e.target.value)}/>
          <button className='btn2'onClick={()=>{apdate2()}} >apdate</button>
        </div>
       )

       }


      <br /><br />
      <br /><br /><br />
      <br />

      <div className='form1'>
        <label className='lb1'>name:</label>
        <input type="text" className='input1' value={name} onChange={(e)=>setname(e.target.value)} />
        <br />
        <br />
         <label className='lb1'>contry:</label>
        <input type="text" className='input1'  value={contry} onChange={(e)=>setcontry(e.target.value)} /><br /><br /><br />
        <button className='btn1' onClick={()=>{  adding()}}>add </button>
      </div>
    </div>
  )
}
