import React from 'react'
import Link from 'next/link'
import { HomePage as SanityHomePage } from '../../../sanity.types'

import SectionWrapper from '../../common/layout/SectionWrapper'
import DecoratedText from '../../common/text/utils/DecoratedText'
import { Heading, Typography } from '../../common/text'
import { Button } from '../../common'

interface HeroProps {
  data: SanityHomePage['hero']
}

const TeamsHero = ({ data }: HeroProps) => {
  return (
    <SectionWrapper direction="row" pt={115} pts={60} pb={120} pbs={0}>
      <main className="flex flex-col largeTablet:flex-row ">
        <div className="flex flex-col items-start flex-1">
          <Typography variant="preHeading" alignLarge="left">
            {data?.title}
          </Typography>

          <div className="largeTablet:max-w-lg">
            <Heading alignLarge="left">{data?.heading}</Heading>
          </div>

          <div className="mt-8 mb-10 tablet:mt-4 ">
            <p className="text-xl text-textPrimary opacity-70 largeTablet:leading-8">
              {data?.description}
            </p>
          </div>
          <div className="flex gap-4 items-center flex-col largeTablet:flex-row">
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
        <div className="flex mt-16 justify-center items-center flex-1 largeTablet:justify-end largeTablet:mt-0">
          <div className="w-full h-full relative pointer-events-none max-w-[463px] largeTablet:max-h-[299px]">
            <img alt="OpenSauced hero image" src={data?.image as unknown as string} />
          </div>
        </div>
      </main>
      {/* largeTablet:left-16 largeTablet:bottom-4 */}
    </SectionWrapper>
  )
}

export default TeamsHero
