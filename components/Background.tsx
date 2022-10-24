import Image from 'next/image'
import React, { FC } from 'react'
import upperStroke from '../public/upperStroke.svg'
import leftSidePizzaStroke from '../public/leftSidePizzaStroke.svg'
import rightSidePizzaStroke from '../public/rightSidePizzaStroke.svg'

const Background:FC = ({ children }) => {
  return (
    <div className="bg-darkBG text-white h-fit relative">
        <div className="absolute -top-[44rem] tablet:-top-[42rem] -left-[28rem] largeTablet:-left-[16rem] laptop:-left-[14rem] desktop:-left-[10rem]">
            <Image src={upperStroke} />
        </div>
        <div className="absolute top-[6rem] -right-[20rem] tablet:-right-[8rem] largeTablet:laptop:-right-[6rem] laptop:-right-[4rem] desktop:-right-[3rem]">
            <Image src={upperStroke} />
        </div>
        <div className="absolute top-[50rem] -left-[28rem] largeTablet:-left-[18rem] laptop:-left-[15rem] desktop:-left-[11rem]">
            <Image src={leftSidePizzaStroke} />
        </div>
        <div className="absolute top-[58rem] -right-[28rem] largeTablet:-right-[22rem] laptop:-right-[19rem] desktop:-right-[16rem]">
            <Image src={rightSidePizzaStroke} />
        </div>

        <div className="relative">
            {children}
        </div>
    </div>
  )
}

export default Background