import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Loader from './components/Loader';





const App = () => {
  return (
 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path='/loader' element={<Loader />}
    />
    </Routes>

    </BrowserRouter>

  )
}

export default App