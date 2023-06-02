import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AIRecipePage from './pages/AIRecipePage';
import APIRecipePage from './pages/APIRecipePage';



const App = () => {
  return (
 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path='/aiRecipe' element={<AIRecipePage />} />
    <Route path='/apiRecipe' element={<APIRecipePage/>} />
    </Routes>
    </BrowserRouter>

  )
}

export default App