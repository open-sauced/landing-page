import React from 'react'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { Heading, Typography } from '../../common/text'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'
import Image from 'next/image'

import StrokeR3 from '../../../public/_3_rightStroke.svg'
import StrokeL3 from '../../../public/_3_leftStroke.svg'
import StrokeMobile2 from '../../../public/background-strokes/stroke_mobile_2.svg'
import StrokeMobile3 from '../../../public/background-strokes/stroke_mobile_3.svg'

const Newsletter = () => {
  return (
    <SectionWrapper pt={100} pb={250}>
        <div className="relative w-screen">
          <div className="absolute largeTablet:block top-[-14rem] largeTablet:-top-[10rem] left-[-30rem] largeTablet:left-[-15rem]">
            <Image alt="Doodles" src={StrokeL3} />
          </div>

          <div className="absolute largeTablet:block top-[-14rem] largeTablet:-top-[22rem] right-[-34rem] largeTablet:-right-[32rem]">
            <Image alt="Doodles" src={StrokeR3} />
          </div>

          <div className="absolute bottom-[51rem] right-0  largeTablet:hidden">
            <Image alt="Doodles" src={StrokeMobile2} />
          </div>

          <div className="absolute bottom-[32rem] left-0  largeTablet:hidden">
            <Image alt="Doodles" src={StrokeMobile3} />
          </div>
        <div className="flex flex-col items-center gap-y-8">
          
        <Heading alignSmall="center">
          $orange-to-yellowThe fast track$orange-to-yellow to open source
        </Heading>

        <Typography alignSmall="center" variant="body1" >
          Stay up to date with the latest OpenSauced news and trends.
        </Typography>

        <form className="flex relative box-border px-4  w-full flex-col gap-x-8 gap-y-6 largeTablet:flex-row justify-center">
          <GradientBorderWrapper>
            <input placeholder="Your name" className="w-full largeTablet:w-[190px] rounded-md outline-none focus:outline-none h-[38px] text-[#FEEADD] px-4 py-3 text-sm font-medium bg-[#211E1C]" type="text"/>
          </GradientBorderWrapper>

          <GradientBorderWrapper>
            <div className="flex bg-[#211E1C] rounded-md overflow-hidden">
              <input placeholder="Your email" className="flex-1 largeTablet:w-[394px] bg-transparent outline-none focus:outline-none h-[38px] text-[#FEEADD] px-4 py-3 text-sm font-medium" type="text"/>
              <button
                className=" text-brandOrange font-medium w-20 text-sm cursor-pointer"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </GradientBorderWrapper>
        </form>
      </div>
      </div>
    </SectionWrapper>
  )
}

export default Newsletter