"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Description from '../common/Description'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { BLOG_CARD_LIST } from '@/utils/helper'
import CustomBtn from '../common/CustomBtn'
import { Arrow, Search } from '@/utils/icons'

const BlogCards = () => {
    const [open, setOpen] = useState(3);
    const [search, setSearch] = useState("");
    const searchParams = useSearchParams();

    useEffect(() => {
        const param = searchParams.get("page");
        if (param) {
            setOpen(parseInt(param) * 3);
        }
    }, [searchParams]);

    const cards = BLOG_CARD_LIST.slice(0, open).filter(
        (obj) => obj.title && obj.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleShowMore = () => {
        const nextPage = open < BLOG_CARD_LIST.length ? open / 3 + 1 : 1;
        setOpen(nextPage * 3);
        window.history.pushState(null, "", `?blog/page=${nextPage}`);
    };
    return (
        <div className=' pb-[90px]'>
            <div className="container max-w-[1140px] mx-auto max-xl:px-5">
                <div className="flex items-center justify-start py-[17px] pl-[30px] gap-2.5 border border-white/25 max-w-[558px] mx-auto rounded-full">
                    <label htmlFor="search" className="cursor-pointer">
                        <Search/>
                    </label>    
                    <input type="text" id="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="bg-transparent outline-none w-[80%] placeholder:text-white/80 text-white/80 placeholder:leading-6 leading-6" />
                </div>
                <div className="flex flex-wrap gap-x-6 items-center xl:justify-between justify-center pt-[70px]">
                    {cards.map((item, i) => (
                        <div key={i} className="rounded-[10px] max-w-[364px] mb-6 p-[1px] bg-border">
                            <Link href={`/blogs/${item.title.toLowerCase().replace(" ", "-")}`} key={i} >
                                <div className="rounded-[10px] md:pb-10 pb-6 bg-off-white backdrop-blur-[1221px]">
                                    <div className="w-full relative">
                                        <Image src={item.image} height={237} width={364} alt='card img' />
                                        <p className='absolute top-5 right-5 text-2xl font-semibold text-white'>{item.date}</p>
                                    </div>
                                    <div className="flex items-center justify-center px-5 gap-4 -translate-y-6">
                                        <CustomBtn myClass='!bg-custom-black !text-white/80 !text-sm !py-2 md:!px-[34px] px-6' text={item.productivityButton} />
                                        <CustomBtn myClass='!bg-custom-grey !text-white/80 !text-sm !py-2 md:!px-[40px] px-8 !border-white ' text={item.readButton} />
                                    </div>
                                    <div className="px-5 ">
                                        <p className='text-xl text-white font-semibold md:pb-2.5 pb-1 max-md:mt-[-8px] '>{item.title}</p>
                                        <Description myClass='md:pb-6 pb-3 max-md:text-sm' pera={item.description} />
                                        <div className='flex justify-between w-full'>
                                        <div className="flex items-center gap-2.5">
                                            <Image className='rounded-full' src={item.profileImage} height={50} width={50} alt='card img' />
                                            <p className='text-white font-semibold'>{item.author}</p>
                                        </div>
                                        <Arrow/>
                                        </div>
                                    </div>
                                </div>
                            </Link >
                        </div>
                    ))}
                </div>
                <div className="!mx-auto mt-10 w-fit">
                    <CustomBtn myOnClick={handleShowMore} myClass='w-full !bg-skyBlue !text-black hover:!text-white' text={open < BLOG_CARD_LIST.length
                        ? "Show all blogs"
                        : "Hide all blogs"
                    } />
                    <div className="flex justify-center items-center pt-10">
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BlogCards