import { FOOTER, FOOTER_LINKS, ICON } from '@/utils/helper'
import React from 'react'
import Description from './Description'
import Image from 'next/image'

function Footer() {
    return (
        <div className='bg-custom-black2 pt-[60px]'>
            <div className='px-4'>
                <div className="container">
                    <a href="/"><Image src="/assets/images/logo.webp" alt='logo'  width={150} height={44}/></a>
                    <div className='flex flex-wrap gap-6 gap-y-2 mt-10'>
                        {FOOTER_LINKS.map((item, index) => (
                            <div key={index}>
                                <a className='text-white font-semibold' href="">{item.title}</a>
                            </div>
                        ))}
                    </div>
                    {FOOTER.map((item, index) => (
                        <div key={index}>
                            <p className='text-white font-semibold mt-[30px]'>{item.title}</p>
                            <Description myClass="!mt-[10px]" pera={item.description} />
                            <Description myClass="!mt-[10px]" pera={item.discription} />
                        </div>
                    ))}
                    <div className='flex gap-6 flex-wrap mt-[50px]'>
                        {ICON.map((item, index) => (
                            <a className='media-icon' href={item.link} key={index}>{item.icon}</a>
                        ))}
                    </div> 
                </div>
            </div>
            <div className='bg-white w-full h-[1px] bg-opacity-20 mt-20'></div>
            <p className='text-white opacity-80 text-center py-4'>Copyright © {new Date().getFullYear()} ArrowTrade. All Rights Reserved.</p>
        </div>
    )
}

export default Footer