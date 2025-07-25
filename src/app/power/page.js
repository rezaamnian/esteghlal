
import React, { Suspense } from 'react'
import Servercomponenet from '../components/Servercomponenet'
import Clientcomponent from '../components/clientcomponent'
export default function Power() {

  return (
    <div>
      <Suspense fallback={<div>lodiing...</div>}>
      <Servercomponenet/>

      
         
      </Suspense>
      
      <br />
      <Clientcomponent/>
    </div>
  )
}
