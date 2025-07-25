"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import './style.css'

let list=[
          {name:"Liverpol",id:1,country:"england"},
          {name:"chelsi",id:2,country:"england"},
          {name:"Atalanta",id:3,country:"italia"},
          {name:"AC Milan",id:4,country:"italia"},
          {name:"barselona",id:5,country:"espania"},
          {name:"kashima ",id:6,country:"japon"},
          {name:"monako",id:7,country:"feranch"},
          {name:"real madrid",id:8,country:"espania"},
          {name:"arsenal",id:9,country:"england"},
          {name:"anderlekht",id:10,country:"belgiom"},
          {name:"hamborg",id:11,country:"germeny"},
          {name:"alvasl",id:12,country:"emarat"},
          {name:"alhelal",id:13,country:"Arabestan"},

]

export default function Nextpage({Paramse}) {

 const [w2,setw2]=useState(1);
 const [w3,setw3]=useState(0);
 const [w4,setw4]=useState(4);
 const [w5,setw5]=useState(list.slice(w3,w4));

 let number1=Math.ceil(list.length/4);


 function create() {
  if(w4<list.length){
setw3((s)=>s+4);
setw2((p)=>p+1)
setw4((t)=>t+4);

  }
  
 }

 function negative(){
  if(w3>0){
    setw2((p)=>p-1)
setw3((s)=>s-4);
setw4((t)=>t-4);

  }
  
  
 }

 useEffect(()=>{
  setw5(list.slice(w3,w4));

 },[w3])
     return (
         <div>
          <div className='dv2'>
            {w5.map((n,m)=>(
            <div key={m} className='dv1'>
              <h1 className='h1'>{n.name}</h1>
              <h2 className='h1'>{n.country}</h2>

            </div>
           ))

           }
           
          </div>
          <div>
            {
              
            }
          </div>
          <div className='dv3'>

         
           <button className='btn1' onClick={()=>negative()}>-</button>
           <button onClick={()=>create()} className='btn1'>+</button>
           <br />
        </div>
         <div className='sp1'>
           <span >page:{w2}/{number1}</span>
            
         </div>

         </div>
     )
    
  
}
