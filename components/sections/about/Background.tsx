import React, { FC } from 'react'
import Image from 'next/image'

// Static Assets
import StrokeL4 from '../../../public/background-strokes/stroke_l_4.svg'
import StrokeR3 from '../../../public/background-strokes/stroke_r_3.svg'
import StrokeMobile1 from '../../../public/background-strokes/stroke_mobile_1.svg'

interface BackgroundProps {
  children: React.ReactNode
}

const Background: FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="bg-darkBG text-white h-fit overflow-hidden relative">
      <div className="absolute hidden largeTablet:block largeTablet:top-[12rem] largeTablet:left-0">
        <Image alt="Doodles" src={StrokeL4} />
      </div>
      <div className="absolute hidden largeTablet:block largeTablet:top-[9rem] largeTablet:right-0">
        <Image alt="Doodles" src={StrokeR3} />
      </div>

      <div className="absolute top-0 right-0  largeTablet:hidden">
        <Image alt="Doodles" src={StrokeMobile1} />
      </div>

      <div className="relative">{children}</div>
    </div>
  )
}

export default Background
