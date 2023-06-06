import React from 'react'
import { useState } from 'react';
import Loader from './Loader';
import sampleImage from '../assets/aiFoodSample.png'

function ResultsAI() {
  return (
    <section className='max-w-7xl mx-auto mt-12 border-t border-slate-300 py-12 px-8'>
      <h1 className='font-bold text-2xl'>Your AI created recipe: </h1>
      <h2>Name: </h2>
      <div>'Scrhimp pasta with sauce'</div>

      <div><img src={sampleImage} alt="sample image" /></div>

  <h2>instructions:</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptas libero ab obcaecati hic provident molestiae inventore consectetur vero pariatur aliquid magnam ipsam tenetur beatae debitis, autem dolor culpa officiis architecto voluptates perspiciatis doloremque? Iure dolorum libero laborum. Maiores rerum consectetur minus fugit facere iste consequuntur commodi velit. Similique, nobis?</p>

    </section>
  )
}

export default ResultsAI