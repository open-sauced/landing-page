import React, { FC } from 'react'
import Image from 'next/image'

// Static assets
import upperStroke from '../../../public/background-strokes/upperStroke.svg'
import left_2_stroke from '../../../public/background-strokes/left_2_stroke.svg'
import right_2_stroke from '../../../public/background-strokes/right_2_stroke.svg'
import right_3_stroke from '../../../public/background-strokes/right_3_stroke.svg'

interface BackgroundProps {
  children: React.ReactNode
}

const Background: FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="bg-darkBG text-white h-fit overflow-hidden relative">
      <div className="absolute hidden largeTablet:block largeTablet:top-[-40rem] largeTablet:left-[-23rem] desktop:-left-[0rem]">
        <Image alt="Doodles" src={upperStroke} />
      </div>

      <div className="absolute top-[30rem] right-[-15rem] tablet:-right-[8rem] largeTablet:top-[6rem] largeTablet:laptop:-right-[6rem] laptop:-right-[4rem] desktop:-right-[3rem]">
        <Image alt="Doodles" src={upperStroke} />
      </div>
      
      <div className="absolute hidden largeTablet:block top-[95rem] -left-[5rem]">
        <Image alt="Doodles" src={left_2_stroke} />
      </div>

      <div className="absolute hidden largeTablet:block top-[125rem] right-[4rem]">
        <Image alt="Doodles" src={right_2_stroke} />
      </div>

      <div className="absolute top-[190rem] -right-[35rem] largeTablet:-right-[4rem]">
        <Image alt="Doodles" src={right_3_stroke} />
      </div>

      <div className="relative">{children}</div>
    </div>
  )
}

export default Background
