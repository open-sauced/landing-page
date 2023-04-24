import Image from 'next/image'
import React, { FC } from 'react'
import upperStroke from '../../../public/upperStroke.svg'
import leftSidePizzaStroke from '../../../public/leftSidePizzaStroke.svg'
import rightSidePizzaStroke from '../../../public/rightSidePizzaStroke.svg'
import rightSidePizzaStroke2 from '../../../public/rightSidePizzaStroke2.svg'
import _5_leftStroke from '../../../public/_5_leftStroke.svg'
import _5_rightStroke from '../../../public/_5_rightStroke.svg'

const Background: FC = ({ children }) => {
  return (
    <div className="bg-darkBG text-white h-fit overflow-hidden relative">
      <div className="absolute hidden largeTablet:block largeTablet:top-[-40rem] largeTablet:left-[-23rem] desktop:-left-[0rem]">
        <Image alt="Doodles" src={upperStroke} />
      </div>

      <div className="absolute top-[30rem] right-[-15rem] tablet:-right-[8rem] largeTablet:top-[6rem] largeTablet:laptop:-right-[6rem] laptop:-right-[4rem] desktop:-right-[3rem]">
        <Image alt="Doodles" src={upperStroke} />
      </div>

      <div className="absolute hidden largeTablet:block largeTablet:top-[94rem]  largeTablet:-left-[18rem] laptop:-left-[15rem] desktop:-left-[0rem]">
        <Image alt="Doodles" src={leftSidePizzaStroke} />
      </div>

      <div className="absolute hidden largeTablet:block largeTablet:top-[122rem] largeTablet:-right-[22rem] laptop:-right-[19rem] desktop:-right-[0rem]">
        <Image alt="Doodles" src={rightSidePizzaStroke} />
      </div>

      <div className="absolute hidden largeTablet:block largeTablet:top-[195rem] largeTablet:-right-[22rem] laptop:-right-[19rem] desktop:-right-[0rem]">
        <Image alt="Doodles" src={rightSidePizzaStroke2} />
      </div>

      {/* <div className="absolute top-[107rem] -left-[25rem] largeTablet:top-[192rem]  largeTablet:-left-[18rem] laptop:-left-[15rem] desktop:-left-[13rem]">
        <Image alt="Doodles" src={_5_leftStroke} />
      </div>

      <div className="absolute hidden largeTablet:block largeTablet:top-[192rem] largeTablet:-right-[29rem] ">
        <Image alt="Doodles" src={_5_rightStroke} />
      </div> */}

      {/* <div className="absolute hidden largeTablet:block largeTablet:top-[402rem]  largeTablet:-left-[18rem] laptop:-left-[15rem] desktop:-left-[13rem]">
        <Image alt="Doodles" src={_5_leftStroke} />
      </div> */}

      {/* <div className="absolute hidden largeTablet:block largeTablet:top-[402rem] largeTablet:-right-[29rem] ">
        <Image alt="Doodles" src={_5_rightStroke} />
      </div> */}

      <div className="relative">{children}</div>
    </div>
  )
}

export default Background
