import React from 'react'
import { Link } from 'react-router-dom'

export default function ChooseAPI() {
  return (
    <section>
    <div>Choose API</div>
    <p>use following option to match a recipe from "insert here" food database based on your ingredients.</p>
    <p>images produced by open AI DALLi</p>
    <h3>warning - eat at your own risk!</h3>
    <h4>sample result:</h4>
    <ul>
        <li>ing1</li>
        <li>ing2</li>
        <li>ing3</li>
        <li>ing4</li>
    </ul>
    <ol>
        <li>step 1</li>
        <li>step 2</li>
        <li>step 3</li>
        <li>step 4</li>
    </ol>
    <Link to="/apiRecipe">Search for recipe</Link>

</section>

  )
}
