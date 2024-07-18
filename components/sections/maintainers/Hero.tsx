import React from 'react'
import Link from 'next/link'
import { HomePage as SanityHomePage } from '../../../sanity.types'

// Components
import SectionWrapper from '../../common/layout/SectionWrapper'
import ContainerWithLine from '../../common/ContainerWithLine'
import { Heading, Typography } from '../../common/text'
import { Button } from '../../common'
import Image from 'next/image'
import DecoratedText from '../../common/text/utils/DecoratedText'
interface HeroProps {
  data: SanityHomePage['hero']
}

const Hero = ({ data }: HeroProps) => {
  return (
    <SectionWrapper pt={115} pts={60} pbs={0}>
      <ContainerWithLine>
        <main>
          <div className="flex largeTablet:items-center h-full w-full flex-col gap-x-6 gap-y-10 _1054:flex-row mx-6">
            <div className="_1255:max-w-2xl mr-2 largeTablet:mr-0">
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
                  Optimize your open source project with deep insights: Join a platform crafted for maintainers seeking to drive innovation and community growth
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
                  Are you an individual contributor?
                  <span>
                    <Link href="/">
                      <DecoratedText content="$orange-to-yellow Click here$orange-to-yellow"/>
                    </Link>
                  </span> 
                </Typography>
              </div>
            </div>
            
            <div className="max-w-m">
              <div>
                <Image width={600} height={650} priority={true} loading="eager" className="relative" src="/maintainers/hero_maintainer.png" alt="Maintainer Insight Dashboard"/>
              </div>
            </div>
          </div>
        </main>
      </ContainerWithLine>
    </SectionWrapper>
  )
}

export default Hero
