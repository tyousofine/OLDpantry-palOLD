import React from 'react'
import { Link } from 'react-router-dom'
import ShrimpPuff from '../assets/shrimpPuff.jpg'

export default function ChooseAPI() {
  return (
    <section className='flex flex-col'>
      <div>Choose API</div>
      <p>use following option to match a recipe from "insert here" food database based on your ingredients.</p>

      <h4>sample result:</h4>
      <img src={ShrimpPuff} alt="shrimp" className='max-w-md sm:max-w-sm px-4' />
      <h3>Schrimp Puffs</h3>
      <button className='btn'>Search Database</button>

</section>

  )
}
