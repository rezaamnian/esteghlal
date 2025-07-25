"use client"
import React, { useContext, useEffect, useState } from 'react'


import './style.css'

import { createdcontext } from '../context/page';
export default function Shopingcenter() {
    const [prices,setprices]=useState(0);
  const {cart,deleteitem,setcart}=useContext(createdcontext);
  const [array,setarray]=useState([]);
  const[h,seth]=useState()

  function changing(c,v){

    setcart((g)=>
      
      g.map(item=>
      item.id==c.id ?{...item,number:v} :item
      
    ))
  }
  
useEffect(()=>{
  setarray([]);
cart.map((object)=>{
array.push(object.number*object.price)
})
const sum=array.reduce(function(p,k){
  return p+k;
},0)
setprices(sum);

},[cart])
  return (
    <div className='shop1'>
     <div className='dv1'>
       <h2 className='h2'>shoping center</h2>
        
     </div>  

     <div >
         {cart&& cart.map((j,n)=>(
          <div key={n} className='dv2'>
            <img src={`./img/${j.name}`} alt="no body"  className='img1'/>
            <h3 className='h3'>model:{j.model}</h3>
            <input type="number" className='number1' value={j.number}    min={1} onChange={(event)=>{changing(j,event.target.value)}}/>
            <h4 className='price'>price:{j.price}$</h4>
             <button className='delete2' onClick={()=>deleteitem(j)}>delete</button>
          </div>  
         ))

         }
     </div><br /><br /><br />
     <div className='dv4'>
      <span className='allprice'>total price is:{prices}$</span>
      <button className='mony'>پرداخت </button>
    
     </div>
     </div>
  )
}
