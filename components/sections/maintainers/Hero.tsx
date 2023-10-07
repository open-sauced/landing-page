import React from 'react'
import Link from 'next/link'
import { SanityHomePage } from '../../../types/schema'

// Components
import SectionWrapper from '../../common/layout/SectionWrapper'
import ContainerWithLine from '../../common/ContainerWithLine'
import { Heading, Typography } from '../../common/text'
import { Button } from '../../common'
import Image from 'next/image'
interface HeroProps {
  data: SanityHomePage['hero']
}

const Hero = ({ data }: HeroProps) => {
  return (
    <SectionWrapper pt={115} pts={60} pbs={0}>
      <ContainerWithLine>
        <main>
          <div className="flex items-center h-full flex-col gap-x-6 gap-y-10 _1054:flex-row mx-6">
            <div>
              <Typography alignSmall="left" alignLarge="left" variant="preHeading">
                YOU GOT THIS
              </Typography>

              <div className="relative">
                <img className="absolute -left-[49px] largeTablet:-left-[68px] -top-[50px]" src="/icons/journey_ball.svg" alt="Starting point"/>

                <Heading component="h1" alignSmall="left" alignLarge="left">
                  The first tool designed for $orange-to-yellowmaintainers$orange-to-yellow
                </Heading>
              </div>
              
              <div className="py-10 max-w-md _1106:max-w-xl">
                <Typography leading='8' tracking='tight' alignLarge="left" alignSmall="left" variant="body1">
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
                  Working with a team? <Link href="/teams">Click here</Link>
                </Typography>
              </div>
            </div>
            
            <div className="max-w-md">
              <div>
                <Image width={800} height={800} priority={true} loading="eager" className="relative  _1106:scale-125 _1106:-right-16" src="/maintainers/maintainer_dashboard_comp.png" alt="Maintainer Insight Dashboard"/>
              </div>
            </div>
          </div>
        </main>
      </ContainerWithLine>
    </SectionWrapper>
  )
}

export default Hero
