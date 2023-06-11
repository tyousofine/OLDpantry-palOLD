import React from 'react'
import { useState } from 'react';
import Loader from './Loader';
import sampleImage from '../assets/aiFoodSample.png'

function ResultsAI({photo, recipe}) {

console.log('data from RESULTSAI: ', photo);
console.log('recipe from RESULTSAI: ', recipe)

  return (
      <section className='max-w-7xl mx-auto mt-12 border-t border-slate-300 py-12   px-8'>
        <h1 className='font-bold text-2xl'>Your AI created recipe: </h1>
        
   

        {/* if no image fro Dalle don't display this section */}
        {!!photo.photo && 
        <div className='w-64 h-fit'><img src={photo.photo} alt="recipe image" /></div>
        }
        <div dangerouslySetInnerHTML={{ __html: recipe}}>
        </div>
        {/* <div>{recipe}</div> */}

      </section>
  )
}

export default ResultsAI