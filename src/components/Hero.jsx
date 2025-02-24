import React from 'react'
import Header from './common/Header'

function Hero() {
  return (
    <div>
        <Header/>
    <div className='py-[70px] px-4'>
        <h1 className='text-custom-xl text-white max-w-[718px] mx-auto text-center leading-[120%]'>Unlock Knowledge with Our <span className='text-custom-sky font-semibold'>Featured Articles</span></h1>
        <p className='text-white max-w-[674px] mx-auto text-center'>Explore our latest articles, insights, and expert advice on industry trends. Stay informed, gain new perspectives, and discover valuable tips to help you stay ahead.</p>
        <input placeholder='Search' className='bg-transparent max-w-[558px] mx-auto w-full border border-custom-white outline-none rounded-full py-[17.2px] px-[30px] flex mt-[30px] text-white' type="text" />
    </div>
    </div>
  )
}

export default Hero