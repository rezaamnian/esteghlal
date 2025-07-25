import { varsesh } from '@/app/file';
import Link from 'next/link';
import React from 'react'

export default function page({params}) {
     
    const {slug}=params;
     console.log(slug);
    
     if(slug.length==1){
        const h=slug[0];
        var gh=varsesh[h];
         
     }
    if(slug.length==2){
        const d1=slug[0];
        const d2=slug[1];
        var b=varsesh[d1].find((n)=>n.id==d2

        )
    }
    
  return (
    <div>
        {gh && gh.map((p)=>(
            <div key={p.id}>
                <Link href={`/play/${slug}/${p.id}`}>{p.name}</Link>
            </div>
        )

        )

        }
        {b && (
            <div>
                <h1>{b.name}</h1>
                <h2>{b.contry}</h2>
            </div>
        )
 
        }
       
       
    </div>
  )
}
