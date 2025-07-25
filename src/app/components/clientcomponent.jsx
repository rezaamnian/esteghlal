
"use client"

import { useState } from 'react';
import { useRef } from 'react';
import './stylee.css';

  export default function Clientcomponent() {
    const[data,setdata]=useState(0);
  return (
    <div>
     
      <button className='c1' onClick={()=>setdata((p)=>p+1)}>click mi</button>

      
      <h2>{data}</h2>
    </div>
  )
}
