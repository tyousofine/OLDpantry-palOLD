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
const [data, setData] = useState('');
const [photo, setPhoto] = useState({});


console.log("data from choose:", data);
console.log("photo from choose: ", photo);

const handleAIGenerate = async () => {
  
  try {
    setGenerating(true);
    const response = await fetch('http://localhost:8080/api/v1/dalle', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt: ingArray})
  })
  
  const data = await response.json();
  setData(data);
  setPhoto({photo: `data:image/jpeg;base64,${data.image}`})
  
  } catch (e) {
  console.log("something went wrong fetching from dalle: ", e);
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
      <img src={photo.photo} alt="photo" />
   
      <button 
        className='btn disabled:bg-green-200 disabled:cursor-not-allowed'
        onClick={handleAIGenerate}
        disabled={!ingArray.trim()}>
        <FontAwesomeIcon icon={faRobot}/>
        Use AI
      </button>
    </section>
    )}

    <ResultsAI photo={photo}/>
  
  </>




  )
}
