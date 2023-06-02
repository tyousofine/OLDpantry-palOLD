import React from 'react'

import Banner from '../components/Banner'
import ChooseAI from '../components/ChooseAI'
import ChooseAPI from '../components/ChooseAPI'
import Footer from '../components/Footer'


function Home() {
  return (
    <div className='w-screen h-screen bg-slate-200 overflow-hidden'>
        <Banner></Banner>
        <div className='grid grid-cols-2 border border-black h-[60%]'>
       <ChooseAPI></ChooseAPI>
       <ChooseAI></ChooseAI>
        </div>
        <Footer />
    </div>
  )
}

export default Home