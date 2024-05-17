import React from 'react'
import { Heading, Typography } from '../../common/text'
import PHBadgeDark from '../../common/product-hunt/PHBadgeDark'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="z-40 py-24 tablet:py-36 border-slate-800 relative flex flex-col gap-y-5 from-transparent via-red-800 to-transparent">
      <div className="flex w-full pl-[8%] pr-[10%] space-x-20">
        <div className="space-y-1 w-[80%]">
          <Typography tracking="widest" alignLarge="left" variant="preHeading">
            LUNCH WEEK
          </Typography>
          <Heading alignSmall="left" alignLarge="left">
            Serving up new features every day,
          </Heading>
          <Heading alignSmall="left" alignLarge="left">
            $yellow-to-orangelunch time is launch time$yellow-to-orange
          </Heading>
          <div className="pt-4 pb-6">
            <Typography alignLarge="left" variant="subheading">
              Join us everyday this week to see what we've been cookin' up.
            </Typography>
          </div>
          <PHBadgeDark />
        </div>
        <div className="w-[20%] flex flex-col items-center justify-center">
          <Image
            src="/lunchweekImages/pizza.svg"
            alt="Insight Dashboard"
            width={280}
            height={280}
            priority={true}
            loading="eager"
            className="scale-150 largeTablet:scale-125 scl"
          />
          <Image
            src="/lunchweekImages/lunchWeek.svg"
            alt="Insight Dashboard"
            width={400}
            height={50}
            priority={true}
            loading="eager"
            className="scale-150 largeTablet:scale-150 scl pt-10"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
