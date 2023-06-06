import React from 'react'

import Banner from '../components/Banner'

import Footer from '../components/Footer'
import MainSection from '../components/MainSection'
import Loader from '../components/Loader';
import ResultsAI from '../components/ResultsAI';


function Home() {

  return (
    <div className='w-screen h-screen bg-slate-100 overflow-auto'>
        <div className='h-44'>
          <Banner />
        </div>
  
        <div className=' h-screen'>
          <MainSection/>
        </div>
        <div className='bg-green-200 fixed bottom-0 min-h-[30px] w-screen px-4'>
          <Footer />
        </div>
    </div>
  )
}

export default Home