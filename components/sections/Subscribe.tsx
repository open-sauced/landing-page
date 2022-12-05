import React, { FC, ReactElement, useRef } from 'react'
import GradientBorderWrapper from '../common/GradientBorderWrapper'
import SectionWrapper from '../common/layout/SectionWrapper'
import { Heading, Typography } from '../common/text'

const Subscribe: FC = (): ReactElement => {
  const inputValue = useRef<HTMLInputElement>(null)
  const handleSubscribe = () => {
    const email = inputValue.current?.value
    if (email) {
      const valid = email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      if (!valid) {
        return alert('Not a valid Email')
      }
      alert('What we should do with ' + email + ' ?')
    } else {
      alert('Email is required!')
    }
  }

  return (
    <SectionWrapper pbs={120} pb={310}>
      <Heading alignSmall="center" component="h2">
        Subscribe for $orangeExtra Sauce$orange
      </Heading>
      <div className="max-w-[680px] mt-4 mb-14">
        <Typography alignSmall="center" variant="subheading">
          Identifying contributors in a project can be opaque. With Open Sauced,
          you get actionable insights into contributions that you can see.
        </Typography>
      </div>
      <GradientBorderWrapper>
        <div className="relative box-border px-4 flex items-center w-[280px] h-[38px] text-[#FEEADD] pr-4 py-3 text-sm font-medium bg-darkBG rounded-md largeTablet:w-[394px]">
          <div className="pr-4">
            <input
              ref={inputValue}
              placeholder="Your Work Email"
              className=" outline-none focus:outline-none bg-darkBG w-[165px] largeTablet:w-[275px]"
            ></input>
          </div>
          <span
            className=" text-brandOrange text-sm cursor-pointer"
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
