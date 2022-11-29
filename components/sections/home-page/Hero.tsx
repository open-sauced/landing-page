import React from 'react'
import { SanityAbout } from '../../../types/schema'
import PRsHero from '../../../public/PRs-hero.png'
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
    <SectionWrapper direction="row" pt={115} pts={60}>
      <main className="flex flex-col largeTablet:flex-row largeTablet:min-h-[450px]">
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
            <Button href={data.projectsButtonUrl} variant="gray">
              {data.projectsButtonLabel}
            </Button>
          </div>
        </div>
        <div className="flex mt-6 justify-center items-center flex-1 largeTablet:justify-end largeTablet:mt-0">
          <div className="w-fit relative pointer-events-none largeTablet:left-16 largeTablet:bottom-4">
            <Image alt="PRs" src={PRsHero} />
          </div>
        </div>
      </main>
    </SectionWrapper>
  )
}

export default Hero
