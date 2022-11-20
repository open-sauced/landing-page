import React from 'react'
import { SanityAbout } from '../../../types/schema'
import PRsHero from '../../../public/PRs-hero.png'
import Image from 'next/image'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { Button } from '../../common'
import { Paragraph, Heading, Subheading } from '../../common/text'

interface HeroProps {
  data: SanityAbout
}

const Hero = ({ data }: HeroProps) => {
  const { title, subtitle } = data
  const heroTitle = data.title || ''
  const titleExceptLastTwoWords = heroTitle
    .split(' ')
    .slice(0, heroTitle.split(' ').length - 2)
    .join(' ')
  const lastTwoWordsOfTitle = heroTitle
    .split(' ')
    .slice(heroTitle.split(' ').length - 2, heroTitle.split(' ').length)
    .join(' ')

  return (
    <SectionWrapper>
      <main className="pt-20 tablet:pt-[12rem] tablet:grid grid-cols-[1.5fr_1fr] gap-5 laptop:gap-0 font-inter">
        <div className="flex flex-col items-start">
          <Subheading>Open Source Insights</Subheading>

          <Heading>{heroTitle}</Heading>
          <div className="mt-8 mb-10 tablet:mt-4">
            <Paragraph variant="hero">{data.subtitle}</Paragraph>
          </div>

          <div className="flex gap-4 items-center">
            <Button href={data.CTAButtonURL}>{data.CTAButtonLabel}</Button>
            <Button href={data.projectsButtonUrl} variant="gray">
              {data.projectsButtonLabel}
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="h-[400px] tablet:h-[800px] aspect-square absolute pointer-events-none">
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <Image alt="PRs" src={PRsHero} />
          </div>
        </div>
      </main>
    </SectionWrapper>
  )
}

export default Hero
