"use client"
import React, { useContext, useState } from 'react'
import './style.css';
import Link from 'next/link';
import Shopingcenter from '../camponent/page';
import { createdcontext } from '../context/page';
const list=[
{name:'tv.jpg',price:400,model:"sumsoung",id:1},
{name:'mobile.jpg',price:140,model:"sumsoung",id:2},
{name:'tablet.jpg',price:200,model:"suny",id:3},


]
export default function Projeh() {
const [shoping,setshoping]=useState(false);

let {cart,setcart}=useContext(createdcontext);






function adding(j){
if(cart.length==0){
  
  setcart((h)=>
           [...h,{...j,number:1}]
         )

}
else{
const w=cart.every((v)=>v.id !==j.id

)

if( w ==true )
   setcart((h)=>
            [...h,{...j,number:1}]
         )
}
}
  return (
     
    <div className='gold1'>
       {shoping && (<Shopingcenter/>)

       }
     <div className='gold3'>
         <button className='sabad' onClick={()=>{!shoping ? setshoping(true) : setshoping(false)}}>shopping cart</button>
     </div>
      {list.map((j,i)=>(
        <div key={i} className='gold2'>
         <img src={`./img/${j.name}`} alt="no body" className='img1' />

         <button className='btn1'onClick={()=>adding(j)}>add </button>          

         <Link href={`/projeh/${j.id}`} className='link1'>learn more</Link>   
        </div>
      )
      
      
      
      )
       
      }
       

    
     
    </div>
  )
}
