import React from 'react'
import { SanityHomePage } from '../../../types/schema'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { Button } from '../../common'
import { Heading, Typography } from '../../common/text'
import JourneyLine from './JourneyLine'

interface HeroProps {
  data: SanityHomePage['hero']
}

const Hero = ({ data }: HeroProps) => {
  return (
    <SectionWrapper direction="row" pt={115} pts={60} pb={120} pbs={0}>

      <main className="flex relative flex-col largeTablet:flex-row px-8 largeTablet:px-14">
        <JourneyLine journeyIndex={0} className="left-[-20px] top-[-14px]"/>

        <div className="flex flex-col items-start flex-1">
          <Typography variant="preHeading" alignLarge="left">
            YOU GOT THIS 
          </Typography>

          <div className="largeTablet:max-w-2xl">
            <Heading alignLarge="left">
              Your next open source journey $orange-to-yellowstarts here$orange-to-yellow
            </Heading>
          </div>

          <div className="mt-8 mb-10 tablet:mt-4 largeTablet:max-w-xl">
            <p className="text-xl text-textPrimary opacity-70 largeTablet:leading-8">
              Start the path to your next contribution and join the global community of open source developers making an impact around the world.
            </p>
          </div>
          <div className="flex gap-4 items-center flex-col largeTablet:flex-row">
            {data?.cta?.map((item, i) => (
              <Button key={i} href={item.ctaLink} borderVariant={ i !== 0 ? "gray" : "neon" }>
                {item.ctaLabel}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex mt-10 justify-center items-center largeTablet:justify-end largeTablet:mt-0">
          <div className="w-full h-full relative scale-125 pointer-events-none max-w-[500px]">
            <img alt="OpenSauced hero image" src="/static-temp/insightsDashboard.svg" />
          </div>
        </div>
      </main>
      {/* largeTablet:left-16 largeTablet:bottom-4 */}
    </SectionWrapper>
  )
}

export default Hero
