import Image from 'next/image'
import React, { FC } from 'react'
import upperStroke from '../public/upperStroke.svg'
import leftSidePizzaStroke from '../public/leftSidePizzaStroke.svg'
import rightSidePizzaStroke from '../public/rightSidePizzaStroke.svg'
import middleRightStroke from '../public/middleRight.svg'
import _5_leftStroke from '../public/_5_leftStroke.svg'
import _5_rightStroke from '../public/_5_rightStroke.svg'


const Background:FC = ({ children }) => {
  return (
    <div className="bg-darkBG text-white h-fit overflow-hidden relative">
        <div className="absolute -top-[44rem] tablet:-top-[42rem] -left-[28rem] largeTablet:-left-[16rem] laptop:-left-[14rem] desktop:-left-[10rem]">
            <Image alt="Doodles" src={upperStroke} />
        </div>
        <div className="absolute top-[6rem] -right-[20rem] tablet:-right-[8rem] largeTablet:laptop:-right-[6rem] laptop:-right-[4rem] desktop:-right-[3rem]">
            <Image alt="Doodles" src={upperStroke} />
        </div>
        <div className="absolute top-[50rem] -left-[28rem] largeTablet:-left-[18rem] laptop:-left-[15rem] desktop:-left-[11rem]">
            <Image alt="Doodles" src={leftSidePizzaStroke} />
        </div>
        <div className="absolute top-[58rem] -right-[28rem] largeTablet:-right-[22rem] laptop:-right-[19rem] desktop:-right-[16rem]">
            <Image alt="Doodles" src={rightSidePizzaStroke} />
        </div>

        <div className="max-w-7xl relative">
            <div className="absolute hidden tablet:block top-[160rem] tablet:top-[155rem] largeTablet:top-[145rem] laptop:right-[4rem] tablet:-right-[2rem] desktop:-right-[15rem] right-0">
                <Image alt="Doodles" src={middleRightStroke} />
            </div>
        </div>

        <div className="absolute top-[185rem] -left-[28rem] largeTablet:-left-[18rem] laptop:-left-[15rem] desktop:-left-[11rem]">
            <Image alt="Doodles" src={_5_leftStroke} />
        </div>
        <div className="absolute top-[190rem] -right-[28rem] largeTablet:-right-[22rem] laptop:-right-[19rem] desktop:-right-[16rem]">
            <Image alt="Doodles" src={_5_rightStroke} />
        </div>

        <div className="relative">
            {children}
        </div>
    </div>
  )
}

export default Background