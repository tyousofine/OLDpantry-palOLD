import React from 'react'
import { Link } from 'react-router-dom'
import ShrimpPuff from '../assets/shrimpPuff.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

export default function ChooseAI({ingredients}) {

const ingArray = ingredients.split(/[ ,]+/);

const handleAIGenerate = () => {
  
}


  return (
    <section className='flex flex-col'>
    <div>Choose AI</div>
    <p>Use this option for AI to create a recipe for you based on the ingredients.</p>
    <p>WARNING: </p>
    <h4>sample result:</h4>
    <img src={ShrimpPuff} alt="shrimp" className='max-w-md sm:max-w-sm px-4' />
    <h3>Schrimp Puffs</h3>
   <button 
    className='btn'
    onClick={() => {handleAIGenerate}}>
      <FontAwesomeIcon icon={faRobot}/>
      Use AI
    </button>

</section>

  )
}
