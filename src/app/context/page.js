"use client"
import { createContext, useEffect, useState } from "react";


export const createdcontext=createContext();

export function Contexting({children}){
    const [cart,setcart]=useState([]);
    
useEffect(()=>{
  const storag1=JSON.parse(  localStorage.getItem("cart"))

if(storag1){
    setcart(storag1)
}

}

,[])


useEffect(
    ()=>{localStorage.setItem("cart",JSON.stringify(cart));
        

    }
,[cart])

    function addtcart(){

    }

    function deleteitem(s){
    setcart((item)=>
        item.filter((t)=>t.id !==s.id
  
        )

    

    )


    }
    
    return(
        <createdcontext.Provider  value={{cart,addtcart,deleteitem,setcart}}>
         {children}
        </createdcontext.Provider>
    )
}