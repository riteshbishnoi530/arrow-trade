import { BLOG_CARD_LIST } from '@/utils/helper'
import React from 'react'
import Image from 'next/image'
import { Arrow } from '@/utils/icons'
import CustomBtn from './common/CustomBtn'

function Blogs() {
    return (
        <div className='flex px-4'>
            <div className="container">
                <div className='flex gap-y-6 gap-[22px] flex-wrap'>
                    {BLOG_CARD_LIST.map((item, index) => (
                        <div key={index} className='w-[31.85%]  max-lg:w-[48%] max-sm:w-full'>
                            <div className='bg-gradient-to-b from-off-sky rounded-[10px] to-custom-sky p-[1px]'>
                                <div className='max-w-[364px] bg-black rounded-[10px] max-lg:max-w-full'>
                                    <div className='relative'>
                                        <p className='text-white absolute right-5 top-5 font-semibold'>{item.date}</p>
                                        <Image className='w-full' src={item.image} alt={item.title} width={364} height={237} />
                                    </div>
                                    <div className='px-5'>
                                        <div className='flex gap-4 -translate-y-5'>
                                            <button className='text-white text-sm bg-off-black border border-custom-sky rounded-[50px] py-2 px-[37px] max-[1155px]:px-4'>{item.productivityButton}</button>
                                            <button className='text-white text-sm bg-custom-grey border border-white rounded-[50px] py-2 px-[37px] max-[1155px]:px-4'>{item.readButton}</button>
                                        </div>
                                        <p className='text-white text-xl font-semibold'>{item.title}</p>
                                        <p className='text-white mt-[10px] opacity-80'>{item.description}</p>
                                        <div className='flex items-center gap-[10px] mt-6'>
                                            <Image src={item.profileImage} alt={item.author} width={50} height={50} />
                                            <div className='flex justify-between w-full'>
                                                <p className='text-white font-semibold'>{item.author}</p>
                                                <Arrow />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <CustomBtn myClass="!mt-10 flex mx-auto" text="See All Blogs"/>
            </div>
        </div>
    )
}

export default Blogs