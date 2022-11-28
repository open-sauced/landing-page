import Image from 'next/image'
import React, { FC } from 'react'
import { SanityGithubMock } from '../../../types/schema'
import GreenSquares from '../../../public/greenSquares.svg'
import GreenSquaresSmall from '../../../public/greenSquares_small.svg'
import trueImpact from '../../../public/trueImpact.svg'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { Paragraph, Heading } from '../../common/text'
import ResponsiveWrapper from '../../common/layout/ResponsiveWrapper'
import useMediaQuery from '../../hooks/useMediaQuery'
interface GitHubMockProps {
  githubMockData: SanityGithubMock
}

const GitHubMock: FC<GitHubMockProps> = ({
  githubMockData: { title, subtitle, mockimage, titleRich },
}) => {
  const isLargeTablet = useMediaQuery()
  return (
    <SectionWrapper direction="col">
      <div className="flex pb-16 px-10 tablet:px-0 items-center justify-center largeTablet:pb-14">
        <div>
          <p className="text-white text-4xl tablet:text-5xl font-bold">
            We are
          </p>
          <p className="pl-16 tablet:pl-20 text-7xl tablet:text-8xl font-bold bg-gradient-to-r from-brandRed via-brandRed to-brandYellow text-transparent bg-clip-text">
            more
          </p>
          <p className="pl-32 tablet:pl-40 text-8xl tablet:text-9xl font-bold bg-gradient-to-r from-brandRed via-brandRed to-brandYellow text-transparent bg-clip-text">
            than
          </p>
        </div>
      </div>
      <div className="pb-16 largeTablet:pb-52">
        {isLargeTablet ? (
          <Image alt="GitHub green squares" src={GreenSquares} />
        ) : (
          <Image
            alt="GitHub green squares"
            src={GreenSquaresSmall}
          />
        )}
      </div>
      <div className="pb-10 largeTablet:pb-44">
        <Heading component="h2" align="center">
          {subtitle}
        </Heading>
      </div>

      <p className="text-center font-bold text-gray-500 text-xl tablet:text-2xl pb-10 largeTablet:pb-24">
        However...
      </p>
      <p className="font-bold text-2xl tablet:text-3xl text-center pb-2 largeTablet:pb-6">
        It&apos;s only a surface-level indicator of
      </p>
      <p className="font-bold text-5xl tablet:text-[4rem] text-center pb-32 largeTablet:pb-[350px]">
        how capable a developer is.
      </p>

      <ResponsiveWrapper mb={350}>
        <div className="flex-1">
          <Heading component="h2">
            Find out the $otrue impact$o to the OSS community
          </Heading>
          <div className="mt-10">
            <Paragraph>
              Using our developer first metrics, you can see a true
              representation of any developer’s ability.
            </Paragraph>
          </div>
        </div>
        <div className="flex-1 flex mt-14 largeTablet:mt-0">
          <div className="flex w-full justify-center">
            <Image src={trueImpact} />
          </div>
        </div>
      </ResponsiveWrapper>
    </SectionWrapper>
  )
}

export default GitHubMock
