"use client"
import './style.css'

import React, { useEffect, useState } from 'react'

let fotbal=[
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
           {name:"Tatenham",id:14,country:"england"},
          {name:"Manchester city",id:15,country:"england"},
          {name:"napoly",id:16,country:"italia"},
          {name:"intermilan",id:17,country:"italia"},
          {name:"esteghlal",id:18,country:"iran"},
          {name:"vicel kopeh ",id:19,country:"japon"},
          {name:"Lion",id:20,country:"feranch"},
          {name:"valencia",id:21,country:"espania"},
          {name:"arsenal",id:22,country:"england"},
          {name:"klop brokheh",id:23,country:"belgiom"},
          {name:"dortmond",id:24,country:"germeny"},
          {name:"aljazire",id:25,country:"emarat"},
          {name:"aletehad",id:26,country:"Arabestan"},

]

export default function Fotball() {
const part=fotbal.slice(0,5);
const [data1,setdata1]=useState(fotbal.slice(0,5));
useEffect (()=>{
let part2=document.getElementById('loding');

function scroole(entry){
     
    let part3=entry[0];
    if(part3.isIntersecting){
      setTimeout(()=>{
      setdata1((part)=>[...part,...fotbal.slice(part.length,part.length+5)])
        
      }

      ,100)
        
    }
    
}

new IntersectionObserver(
scroole,
{rootMargin:"100px"}

).observe(part2)
    


}

,[])

  return (
    <div>
      {data1.map((ball,indext)=>(
        <div key={indext} className='ball1'>  
         <h1>{ball.name}</h1>
         <h2>{ball.country}</h2>
          

        </div>
      )

      )

      }
      
     {data1.length <fotbal.length &&(
        <div id='loding'>
        <span>lodding...</span>
      </div>
     )

     }
      

    </div>
  )
}
