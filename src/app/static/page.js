import Link from 'next/link';
import React from 'react'

async function Gold() {
  let v1=await fetch('http://localhost:3000/cv2/');
  let v2=await v1.json();
  return v2;
  
}




export default async function Play() {
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
