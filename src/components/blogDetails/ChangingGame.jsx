import React from 'react'
import Heading from '../common/Heading'
import { CHANGING_GAME } from '@/utils/helper'
import Description from '../common/Description'
import Image from 'next/image'
import changeGame from "../../../public/assets/images/changing-game.webp"

function ChangingGame() {
    return (
        <div>
            <Heading title="How AI-Driven Market insights are" spanTitle="Changing the Game?" />
            {CHANGING_GAME.map((item, index) => (
                <div key={index}>
                    <p className='text-xl font-semibold text-white opacity-80 mt-5'>{item.title}</p>
                    <Description myClass="mt-4" pera={item.description} />
                </div>
            ))}
            <div className='bg-off-white rounded-[10px] w-fit  flex mx-auto p-[10px] backdrop-blur-[1221px]'>
                <Image src={changeGame} alt="game" width={600} height={600} />
            </div>
        </div>
    )
}

export default ChangingGame