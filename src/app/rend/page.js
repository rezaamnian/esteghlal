import React from 'react'



export default async function Page() {
    async function Play(){
        const b1=await fetch('http://localhost:3000/cv1');
        const b2=await b1.json();
        return b2
    }
    
    const b3=await Play();
    console.log(b3);
  return (
    <div>
        {
            b3 && b3.map((n,index)=>(
                <div key={index}>
                    <h2>{n.city}</h2>
                </div>
            ))
        }
    </div>
  )
}
