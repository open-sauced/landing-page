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

        <GradientBorderWrapper>
          <form
            className="relative box-border px-4 flex items-center w-[280px] h-[38px] text-[#FEEADD] pr-4 py-3 text-sm font-medium bg-[#211E1C] rounded-md largeTablet:w-[394px]"
            name="newsletter"
            action="?success=true"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            autoComplete="off"
          >
            <div hidden aria-hidden="true">
              <label>
                Try your luck
                <input type="hidden" value="bot-field" name="newsletter" />
              </label>
            </div>
            <input
              placeholder="Email"
              name="email"
              type="email"
              className="pr-4 outline-none focus:outline-none bg-[#211E1C] w-[180px] largeTablet:w-[290px]"
            ></input>
            <button
              className=" text-brandOrange text-sm cursor-pointer"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </GradientBorderWrapper>
      </div>
    </SectionWrapper>
  )
}

export default Newsletter