

import Link from 'next/link';
import React from 'react'

async function Gold() {
  let v1=await fetch('http://localhost:3000/cv2/');
  if(!v1.ok){
    throw new Error("failed to fetch...")
  }

  else{
     let v2=await v1.json();
     return v2;
  }
 
  
}


export default async function Servercomponenet() {

    let v3=await Gold();
    return (
      <div>
        {v3.map((j,index)=>(
          <div key={index}>
          <Link href={`/static/${j.id}`}>{j.city}</Link>
          </div>
        ))
  
        }
      </div>
  )
}
