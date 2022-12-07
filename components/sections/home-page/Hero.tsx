import React from 'react'
import { SanityAbout } from '../../../types/schema'
import PRsHero from '../../../public/hero.png'
import Image from 'next/image'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { Button } from '../../common'
import { Heading, Typography } from '../../common/text'

interface HeroProps {
  data: SanityAbout
}

const Hero = ({ data }: HeroProps) => {
  const { title, subtitle } = data

  return (
    <SectionWrapper direction="row" pt={115} pts={60} pb={120} pbs={0}>
      <main className="flex flex-col largeTablet:flex-row ">
        <div className="flex flex-col items-start flex-1">
          <Typography variant="preHeading" alignLarge="left">
            Open Source Insights
          </Typography>

          <Heading alignLarge="left">{title}</Heading>
          <div className="mt-8 mb-10 tablet:mt-4">
            <p className="text-xl text-textPrimary opacity-70 largeTablet:leading-8">
              {subtitle}
            </p>
          </div>

          <div className="flex gap-4 items-center flex-col largeTablet:flex-row">
            <Button href={data.CTAButtonURL}>{data.CTAButtonLabel}</Button>
            <Button href={data.projectsButtonUrl} borderVariant="gray">
              {data.projectsButtonLabel}
            </Button>
          </div>
        </div>
        <div className="flex mt-16 justify-center items-center flex-1 largeTablet:justify-end largeTablet:mt-0">
          <div className="w-fit relative pointer-events-none largeTablet:max-h-[300px] ">
            <Image alt="Open Sauced hero image" src={PRsHero} />
          </div>
        </div>
      </main>
      {/* largeTablet:left-16 largeTablet:bottom-4 */}
    </SectionWrapper>
  )
}

export default Hero
