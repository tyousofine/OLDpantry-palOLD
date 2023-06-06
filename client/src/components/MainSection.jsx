import React from 'react'
import { useState } from 'react';
import ChooseAI from './ChooseAI';
import ChooseAPI from './ChooseAPI';
import ResultsAI from './ResultsAI';


export default function MainSection() {
    const [ingredients, setIngredients] = useState('');
  


const handleSubmit = (e) => {
 e.preventDefault();
 
  }

  return (

    <div className='flex flex-col items-center max-w pt-12'>

        <h4 className='font-sunShine font-bold text-4xl '>Welcome to Pantry-Pal!</h4>
        <p className='mt-4 mb-8 font-tsukimi px-4 max-h-64 overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sequi rerum optio recusandae quibusdam similique minima commodi iusto labore, est odio aut nemo ullam consequatur quisquam veritatis illo enim? Eaque rerum sunt corporis unde doloremque quaerat ipsa facere dolores ullam explicabo reprehenderit est, maiores expedita voluptas quam cum. Unde, amet.</p>


        <form onSubmit={handleSubmit}
        className='w-full flex justify-center items-center'>
            <label>
                <span className='inline-block font-sunShine font-bold text-2xl mr-4'>List Ingredients:</span>
               <input type="text"
               className='bg-slate-100 border-b-2 border-gray-400 py-1 outline-0 w-72'
               onChange={(e) => setIngredients(e.target.value)}
               value={ingredients}
              autoFocus
              />     
            </label>
        </form>
        <div className='grid sm:grid-cols-2 gap-4 mt-12 px-12 '>
          <ChooseAPI />
          <ChooseAI ingredients={ingredients}  />
        </div>
        <ResultsAI />
    </div>
  )
}
