import React, { FC, ReactElement } from 'react'
import GradientBorderWrapper from '../common/GradientBorderWrapper'
import SectionWrapper from '../common/layout/SectionWrapper'
import { Heading, Paragraph } from '../common/text'

interface SubscribeProps {}

const Subscribe: FC<SubscribeProps> = (): ReactElement => {
  const handleSubscribe = () => {
    alert('Subscribed')
  }
  return (
    <SectionWrapper direction="col" pbs={120} pb={310}>
      <Heading align="center" component="h2">
        Subscribe for $oExtra Sauce$o
      </Heading>
      <div className="max-w-[680px] mt-4 mb-14">
        <Paragraph align="center">
          Identifying contributors in a project can be opaque. With Open Sauced,
          you get actionable insights into contributions that you can see.
        </Paragraph>
      </div>
      <GradientBorderWrapper>
        <div className="relative flex items-center w-[280px] h-[38px] text-[#FEEADD] pr-4 py-3 text-sm font-medium bg-darkBG rounded-md largeTablet:w-[394px]">
          <input
            placeholder="Your Work Email"
            className=" outline-none focus:outline-none bg-darkBG flex-grow px-4 "
          ></input>
          <span
            className=" text-brandRed text-sm cursor-pointer"
            onClick={handleSubscribe}
          >
            Subscribe
          </span>
        </div>
      </GradientBorderWrapper>
    </SectionWrapper>
  )
}

export default Subscribe
