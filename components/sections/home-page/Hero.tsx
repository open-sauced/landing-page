import React from 'react'
import { SanityHomePage } from '../../../types/schema'
import SectionWrapper from '../../common/layout/SectionWrapper'
import ContainerWithLine from '../../common/ContainerWithLine'
import { Heading, Typography } from '../../common/text'
import { Button } from '../../common'
import DecoratedText from '../../common/text/utils/DecoratedText'
import Link from 'next/link'
interface HeroProps {
  data: SanityHomePage['hero']
}

const Hero = ({ data }: HeroProps) => {
  return (
    <SectionWrapper pt={115} pts={60} pbs={0}>
      <ContainerWithLine>
        <main>
          <div className="flex largeTablet:items-center h-full flex-col gap-x-6 gap-y-10 largeTablet:flex-row mx-6">
            <div className="flex-1 ">
              <Typography alignSmall="left" alignLarge="left" variant="preHeading">
                YOU GOT THIS
              </Typography>

              <div className="relative">
                <img className="absolute -left-[49px] largeTablet:-left-[68px] -top-[50px]" src="/icons/journey_ball.svg" alt="Starting point"/>

                <Heading component="h1" alignSmall="left" alignLarge="left">
                  Your next open source journey $orange-to-yellowstarts here$orange-to-yellow
                </Heading>
              </div>
              
              <div className="py-10">
                <Typography alignLarge="left" alignSmall="left" variant="body3">
                  Start the path to your next contribution and join the global community of open source developers making an impact around the world.
                </Typography>
              </div>

              <div className="flex gap-4 flex-col largeTablet:flex-row">
              {data?.cta?.map((item, i) => (
                <Button key={i} href={item.ctaLink} borderVariant={ i !== 0 ? "gray" : "neon" }>
                  {item.ctaLabel}
                </Button>
              ))}
              </div>

              <div className="pt-6 pb-10">
                <Typography alignLarge="left" alignSmall="left" variant="body3">
                  Maintaining a team?
                  <span>
                    <Link href="/teams">
                      <DecoratedText content="$orange-to-yellow Click here$orange-to-yellow"/>
                    </Link>
                  </span> 
                </Typography>
              </div>
            </div>
            
            <div className="flex-1 ">
              <div className="">
                <img loading="eager" className="relative scale-105 largeTablet:scale-110 -right-4" src="/hero.svg" alt="" />
              </div>
            </div>
          </div>
        </main>
      </ContainerWithLine>
    </SectionWrapper>
  )
}

export default Hero
