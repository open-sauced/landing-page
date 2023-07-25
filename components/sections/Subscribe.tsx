import React, { FC, ReactElement, useRef, useState, useEffect } from 'react'
import Image from 'next/image'

// Components
import GradientBorderWrapper from '../common/GradientBorderWrapper'
import SectionWrapper from '../common/layout/SectionWrapper'
import { Heading, Typography } from '../common/text'

// Static Assets
import StrokeR3 from '../../public/background-strokes/stroke_r_3.svg'
import StrokeL3 from '../../public/background-strokes/stroke_l_3.svg'
import StrokeMobile2 from '../../public/background-strokes/stroke_mobile_2.svg'
import StrokeMobile3 from '../../public/background-strokes/stroke_mobile_3.svg'

const Subscribe: FC = (): ReactElement => {
  const inputValue = useRef<HTMLInputElement>(null)
  const [success, setSuccess] = useState(false)

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
      fetch('/favicon.svg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `form-name=newsletter&email=${email}`,
      })
        .then((responseFromServer) =>
          console.log('responseFromServer', responseFromServer)
        )
        .catch((networkError) => console.error('networkError', networkError))
    } else {
      alert('Email is required!')
    }
  }

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true)
    }
  }, [])

  return (
    <SectionWrapper pbs={120} pb={310}>
      <div className="w-full flex flex-col justify-center items-center">
        <Heading alignSmall="center" component="h2">
          Subscribe for $orangeExtra Sauce$orange
        </Heading>
        <div className="max-w-[680px] mt-4 mb-14">
          <Typography alignSmall="center" variant="subheading">
            Stay up to date with the latest OpenSauced news and trends.
          </Typography>
        </div>
        <div className="absolute hidden largeTablet:block largeTablet:bottom-[36rem] largeTablet:left-0">
          <Image alt="Doodles" src={StrokeL3} />
        </div>

        <div className="absolute hidden largeTablet:block largeTablet:bottom-[35rem] largeTablet:right-0">
          <Image alt="Doodles" src={StrokeR3} />
        </div>

        <div className="absolute bottom-[51rem] right-0  largeTablet:hidden">
          <Image alt="Doodles" src={StrokeMobile2} />
        </div>

        <div className="absolute bottom-[32rem] left-0  largeTablet:hidden">
          <Image alt="Doodles" src={StrokeMobile3} />
        </div>
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
              ref={inputValue}
              placeholder="Email"
              name="email"
              type="email"
              className="pr-4 outline-none focus:outline-none bg-[#211E1C] w-[180px] largeTablet:w-[290px]"
            ></input>
            <button
              className=" text-brandOrange text-sm cursor-pointer"
              onClick={handleSubscribe}
              type="submit"
            >
              Subscribe
            </button>
          </form>
          {success && <p>Successfully submitted form!</p>}
        </GradientBorderWrapper>
      </div>
    </SectionWrapper>
  )
}

export default Subscribe
