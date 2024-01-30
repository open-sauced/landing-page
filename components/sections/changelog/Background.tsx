import React, { FC } from 'react'
import Image from 'next/image'

// Static Assets
import StrokeL5 from '../../../public/background-strokes/stroke_l_5.svg'
import StrokeR4 from '../../../public/background-strokes/stroke_r_4.svg'
import StrokeMobile1 from '../../../public/background-strokes/stroke_mobile_1.svg'

interface BackgroundProps {
  children: React.ReactNode
}

const Background: FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="bg-darkBG text-white h-fit overflow-hidden relative">
      <div className="absolute hidden largeTablet:block largeTablet:top-[0rem] largeTablet:right-0">
        <Image alt="Doodles" src={StrokeR4} />
      </div>

      <div className="absolute hidden largeTablet:block largeTablet:top-[1rem] largeTablet:left-0">
        <Image alt="Doodles" src={StrokeL5} />
      </div>

      {/* MOBILE */}

      <div className="absolute top-0 right-0  largeTablet:hidden">
        <Image alt="Doodles" src={StrokeMobile1} />
      </div>

      <div className="relative">{children}</div>
    </div>
  )
}

export default Background
