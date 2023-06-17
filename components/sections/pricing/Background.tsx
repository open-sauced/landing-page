import React, { FC } from 'react'
import Image from 'next/image'

// Static assets
import StrokeL1 from '../../../public/background-strokes/stroke_l_1.svg'
import StrokeL2 from '../../../public/background-strokes/stroke_l_2.svg'
import StrokeR1 from '../../../public/background-strokes/stroke_r_1.svg'
import StrokeR2 from '../../../public/background-strokes/stroke_r_2.svg'
import StrokeMobile1 from '../../../public/background-strokes/stroke_mobile_1.svg'
import StrokeMobile2 from '../../../public/background-strokes/stroke_mobile_2.svg'

interface BackgroundProps {
  children: React.ReactNode
}

const Background: FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="bg-darkBG text-white h-fit overflow-hidden relative">
      <div className="absolute hidden largeTablet:block largeTablet:top-[9rem] largeTablet:right-0">
        <Image alt="Doodles" src={StrokeR1} />
      </div>

      <div className="absolute hidden largeTablet:block largeTablet:top-[3rem] largeTablet:left-0">
        <Image alt="Doodles" src={StrokeL1} />
      </div>

      <div className="absolute hidden largeTablet:block largeTablet:top-[77rem] largeTablet:left-0">
        <Image alt="Doodles" src={StrokeL2} />
      </div>

      <div className="absolute hidden largeTablet:block largeTablet:top-[65rem] largeTablet:right-0">
        <Image alt="Doodles" src={StrokeR2} />
      </div>

      {/* MOBILE */}

      <div className="absolute top-0 right-0  largeTablet:hidden">
        <Image alt="Doodles" src={StrokeMobile1} />
      </div>

      <div className="absolute top-[95rem] right-0  largeTablet:hidden">
        <Image alt="Doodles" src={StrokeMobile2} />
      </div>

      <div className="relative">{children}</div>
    </div>
  )
}

export default Background
