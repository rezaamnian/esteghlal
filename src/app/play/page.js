import React from 'react'
import { varsesh } from '../file'
import Link from 'next/link';

export default function Play1() {
    const p=Object.keys(varsesh);
  return (
    <div>
        {p.map((k)=>(
            <div key={k}>
              <Link href={`/play/${k}`}>{k}</Link>
            </div>
        )

        ) 

        }
    </div>
  )
}
