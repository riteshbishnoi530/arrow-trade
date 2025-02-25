import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import { MARKET_INSIGHTS } from '@/utils/helper'
import Image from 'next/image'
import market from '../../../public/assets/images/ai-driven-market.webp'
import ChangingGame from './ChangingGame'

function MarketInsights() {
  return (
    <div className='px-4'>
      <div className="container relative flex justify-between">
        <div className='max-w-[605px] max-lg:max-w-full'>
          <Heading myClass="!max-w-[450px]" title="What are AI-Driven" spanTitle="Market Insights?" />
          <Description myClass="mt-4" pera="AI-driven market insights harness the power of artificial intelligence to analyze vast amounts of market data in real time, providing actionable information that can help traders and investors make informed decisions." />
          {MARKET_INSIGHTS.map((item, index) => (
            <div key={index}>
              <p className='text-xl font-semibold text-white opacity-80 mt-[30px]'>{item.title}</p>
              <Description myClass="mt-4" pera={item.description} />
            </div>
          ))}
          <div className='bg-off-white w-fit rounded-[10px] p-[10px] backdrop-blur-[1221px]'>
            <Image src={market} alt="market" width={600} height={600} />
          </div>
          <ChangingGame />
        </div>
        <div className='max-w-[364px] max-lg:hidden w-full border border-custom-sky h-fit rounded-3xl py-[30px] sticky top-2'>
          <div className='px-5'>
            <div className='flex items-center gap-4'>
              <Image src="/assets/images/darrell-steward.webp" alt="market" width={80} height={80} />
              <p className='text-white font-semibold'>Darrell Steward</p>
            </div>
            <p className='text-white font-semibold mt-6'>What are AI-Driven Market Insights?</p>
            <p className='text-white mt-4 opacity-70'>Real-Time Analytics</p>
            <p className='text-white mt-4 opacity-70'>News Updates</p>
            <p className='text-white mt-4 opacity-70'>Expert Market Research</p>
          </div>
          <div className='w-full h-[2px] bg-custom-white'></div>
          <div className='px-5'>
            <p className='text-white font-semibold mt-6'>How AI-Driven Market insights are changing the Game</p>
            <p className='text-white mt-4 opacity-70'>Faster Decision-Making</p>
            <p className='text-white mt-4 opacity-70'>Enhanced Accuracy and Predictive Power</p>
            <p className='text-white mt-4 opacity-70'>Customized Insights for Individual Strategies</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketInsights