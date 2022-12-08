import Image from 'next/image'
import React, { FC } from 'react'
import { SanityGithubMock } from '../../../types/schema'
import GreenSquares from '../../../public/greenSquares.svg'
import GreenSquaresSmall from '../../../public/greenSquares_small.svg'
import TrueImpactIMG from '../../../public/trueImpact.png'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { Heading, Typography } from '../../common/text'
import useMediaQuery from '../../hooks/useMediaQuery'
import DecoratedText from '../../common/text/utils/DecoratedText'
import BackgroundStroke from '../../../public/middleRight.svg'

interface GitHubMockProps {
  githubMockData: SanityGithubMock
}

const GitHubMock: FC<GitHubMockProps> = ({
  githubMockData: { title, subtitle, mockimage, titleRich },
}) => {
  const isLargeTablet = useMediaQuery()
  return (
    <SectionWrapper pbs={100}>
      <div className="flex pb-16 px-10 tablet:px-0 items-center justify-center largeTablet:pb-14">
        <div>
          <p className="text-textPrimary font-inter font-bold text-[2.375rem] leading-[3.625rem] largeTablet:text-5xl largeTablet:leading-[4.5rem]">
            We are
          </p>
          <p className="font-inter font-bold pl-16 tablet:pl-20 text-[3.25rem] leading-none largeTablet:text-8xl">
            <DecoratedText content="$orange-to-yellowmore" />
          </p>
          <p className="font-inter font-bold pl-32 tablet:pl-40 tracking-[-0.03em] text-[4.25rem] leading-none largeTablet:text-9xl">
            <DecoratedText content="$orange-to-yellowthan..." />
          </p>
        </div>
      </div>
      <div className="pb-16 largeTablet:pb-52">
        {isLargeTablet ? (
          <Image alt="Green Squares text" src={GreenSquares} />
        ) : (
          <Image alt="Green Squares text" src={GreenSquaresSmall} />
        )}
      </div>
      <div className="pb-10 largeTablet:pb-44">
        <h2 className="text-center text-2xl font-bold font-inter largeTablet:text-5xl">
          <DecoratedText content={subtitle || ''} />
        </h2>
      </div>

      <p className="text-center font-bold text-textPrimary opacity-40 text-base largeTablet:text-2xl leading-none pb-10 largeTablet:pb-24">
        However...
      </p>
      <p className="text-center font-bold pb-2 tracking-[-0.03em] text-xl largeTablet:text-[2rem] largeTablet:pb-6">
        It&apos;s only a surface-level indicator of
      </p>
      <p className="font-bold text-3xl largeTablet:text-[4rem] leading-none text-center pb-32 largeTablet:pb-[300px]">
        how capable a developer is.
      </p>

      <div className="w-full grid grid-cols-1 largeTablet:grid-cols-2 pb-0 largeTablet:pb-[280px]">
        <div className="w-full my-auto largeTablet:max-w-[560px]">
          <Heading component="h2" alignLarge="left">
            Find the engineers $orange making true impact$orange in OSS communities
          </Heading>
          <div className="mt-4 largeTablet:mt-10">
            <Typography variant="subheading" alignLarge="left">
              Using our developer first metrics, you can see a true
              representation of any developer’s ability.
            </Typography>
          </div>
        </div>
        <div className="w-full flex mt-14 largeTablet:mt-0">
          <div className="flex w-full justify-center relative">
            <div className="absolute right-[-25rem] top-[5rem] largeTablet:top-[-70px] largeTablet:right-[3rem]">
              <Image alt="Doodles" src={BackgroundStroke} />
            </div>
            <div className="relative largeTablet:left-8 largeTablet:w-4/5 largeTablet:top-8">
              <Image
                src={TrueImpactIMG}
                alt="True impact to the OSS community image"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default GitHubMock
