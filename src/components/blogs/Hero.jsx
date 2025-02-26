import React from 'react'
import Header from '../common/Header'
import NavSlider from '../common/NavSlider'

function Hero() {
  return (
    <>
      <NavSlider/>
    <div className='px-4 mt-4'>
      <Header />
      <div className='py-[70px]'>
        <h1 className='text-custom-xl max-lg:text-5xl max-md:text-4xl text-white max-w-[718px] mx-auto text-center leading-[120%]'>Unlock Knowledge with Our <span className='text-custom-sky font-semibold'>Featured Articles</span></h1>
        <p className='text-white max-w-[674px] mx-auto text-center'>Explore our latest articles, insights, and expert advice on industry trends. Stay informed, gain new perspectives, and discover valuable tips to help you stay ahead.</p>
      </div>
    </div>
    </>
  )
}

export default Hero