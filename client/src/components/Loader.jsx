import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKitchenSet,  } from '@fortawesome/free-solid-svg-icons'

export default function Loader() {
  return (
    <div className='h-inherit w-inherit flex flex-col gap-4 justify-center items-center'>
    
    <FontAwesomeIcon icon={faKitchenSet} className=' text-8xl animate-bounce text-green-300'/>
    <p className='text-xl text-slate-700'>Generating...</p>
    </div>
  )
}
