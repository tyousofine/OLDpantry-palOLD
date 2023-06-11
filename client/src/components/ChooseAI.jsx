import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShrimpPuff from '../assets/shrimpPuff.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import Loader from './Loader';
import ResultsAI from './ResultsAI'


// ingredients comming from main section
export default function ChooseAI({ingredients}) {
  const [generating, setGenerating] = useState(false);


const ingArray = ingredients.split(/[ ,]+/).join(' ');
console.log('ING ARRAY:', ingArray)
const [recipe, setRecipe] = useState('');
const [photo, setPhoto] = useState({});



const handleAIGenerate = async () => {
  
  try {
    setGenerating(true);
    const dalleResponse = await fetch('http://localhost:8080/api/v1/dalle', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt: ingArray})
  })
  
  const photoData = await dalleResponse.json();
  setPhoto({photo: `data:image/jpeg;base64,${photoData.image}`})
  
  } catch (e) {
  console.log("something went wrong fetching from dalle: ", e);
  } finally {
  setGenerating(false);
  }

  try {
    setGenerating(true);
    const davinciResponse = await fetch('http://localhost:8080/api/v1/davinci', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt: ingArray })

    })

    const davinciData = await davinciResponse.json();
    console.log('Davinci Data: ', davinciData);
    setRecipe(davinciData.recipe);
    console.log('RECIPE: ', recipe);


  } catch (e) {
    console.log('Someething went wrong generating recipe: ', e)
    
  } finally {
    setGenerating(false);
  }
}

return (
  <>
    {generating ? (
      <Loader />
    ) : (
    <section className='flex flex-col'>
      <div>Choose AI</div>
      <p>Use this option for AI to create a recipe based on the ingredients.</p>
      <p>WARNING: Eat at your own risk!</p>
      {/* <img src={photo.photo} alt="photo" /> */}
      {/* <div dangerouslySetInnerHTML={{ __html: recipe}}>
        </div> */}
      <button 
        className='btn disabled:bg-green-200 disabled:cursor-not-allowed'
        onClick={handleAIGenerate}
        disabled={!ingArray.trim()}>
        <FontAwesomeIcon icon={faRobot}/>
        Use AI
      </button>
    </section>
    )}

    <ResultsAI photo={photo} recipe={recipe}/>
  
  </>




  )
}
