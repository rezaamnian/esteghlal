import React from 'react'
import './style.css'

const list=[
{name:'tv.jpg',price:"400$",model:"sumsoung",id:1},
{name:'mobile.jpg',price:"140$",model:"sumsoung",id:2},
{name:'tablet.jpg',price:"200$",model:"suny",id:3},
]

export  function generateMetadata({params}){

  let {id}= params;
  let p1=list.find(
  (y)=>y.id==id
)


  return {
    title:p1.model,
    description:"electronical divices",
    openGraph:{
      title:p1.model + "sosial media",
    description:"electronical divices",
    }
}
}


export default function More({params}) {
  const {id}=params;

let p=list.find(
  (y)=>y.id==id
)
  console.log(id)
  return (
    <div>
    <div className='learn-more'>
     
      <h1>{p.name}</h1>
      <h2>{p.model}</h2>
      <h3>{p.price}</h3> *

    </div>
    </div>
    
  )
}
