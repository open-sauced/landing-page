import React from 'react'
import Link from 'next/link'
import { HomePage as SanityHomePage, TeamsPage as SanityTeamsPage } from '../../../sanity.types'

// Components
import SectionWrapper from '../../common/layout/SectionWrapper'
import ContainerWithLine from '../../common/ContainerWithLine'
import { Heading, Typography } from '../../common/text'
import { Button } from '../../common'
import DecoratedText from '../../common/text/utils/DecoratedText'
import Image from 'next/image'
interface HeroProps {
  data: SanityHomePage['hero'] | SanityTeamsPage['hero']
  teamsPage?: boolean
}

const Hero = ({ data, teamsPage = false }: HeroProps) => {
  return (
    <SectionWrapper pt={115} pts={60} pbs={0}>
      <ContainerWithLine>
        <main>
          <div className="flex largeTablet:items-center h-full flex-col gap-x-6 gap-y-10 largeTablet:flex-row mx-6">
            <div className="flex-1 ">
              <Typography alignSmall="left" alignLarge="left" variant="preHeading">
                {data?.title}
              </Typography>

              <div className="relative">
                <img className="absolute -left-[49px] largeTablet:-left-[68px] -top-[50px]" src="/icons/journey_ball.svg" alt="Starting point"/>

                <Heading component="h1" alignSmall="left" alignLarge="left">
                  {data?.heading}
                </Heading>
              </div>
              
              <div className="py-10">
                <Typography alignLarge="left" alignSmall="left" variant="body3">
                  {data?.description}
                </Typography>
              </div>

              <div className="flex gap-4 flex-col largeTablet:flex-row">
              {data?.cta?.map((item, i) => (
                <Button key={i} href={item.ctaLink} borderVariant={ i !== 0 ? "gray" : "neon" }>
                  {item.ctaLabel}
                </Button>
              ))}
              </div>

              { !teamsPage && 
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
              }
            </div>
            
            <div className="flex-1">
              <div>
                <Image 
                  src={data?.image as unknown as string}
                  alt="Insight Dashboard" 
                  width={600} 
                  height={600}
                  priority={true} 
                  loading="eager" 
                  className="relative scale-125 largeTablet:scale-125 scl -right-4" 
                />
              </div>
            </div>
          </div>
        </main>
      </ContainerWithLine>
    </SectionWrapper>
  )
}

export default Hero
