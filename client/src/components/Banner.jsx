import React from 'react'
import banner from '../assets/herobg.jpg'

export default function Banner() {
  return (
  
    <div className="flex flex-col justify-center bg-local bg-center bg-no-repeat h-44 bg-cover" style={{ backgroundImage: `url(${banner})` }}>

      <div className='ml-16'>
        <h2 className='text-slate-200 font-sunShine text-5xl'>Pantry-Pal</h2>
        <p className='text-slate-300 font-tsukimi mt-2 text-sm w-60 '>Discover Delicious Recipes Tailored to Your Pantry Ingredients</p>
      </div>
  
  </div>
  )
}
