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
import DecoratedText from '../../common/text/utils/DecoratedText'
interface GitHubMockProps {
  githubMockData: SanityGithubMock
}

const GitHubMock: FC<GitHubMockProps> = ({
  githubMockData: { title, subtitle, mockimage, titleRich },
}) => {
  const isLargeTablet = useMediaQuery()
  return (
    <SectionWrapper>
      <div className="flex pb-16 px-10 tablet:px-0 items-center justify-center largeTablet:pb-14">
        <div>
          <p className="text-textPrimary font-bold text-[2.375rem] leading-[3.625rem] largeTablet:text-5xl largeTablet:leading-[4.5rem]">
            We are
          </p>
          <p className="font-bold pl-16 tablet:pl-20 text-[3.25rem] leading-none largeTablet:text-8xl">
            <DecoratedText content="$oygmore" />
          </p>
          <p className="font-bold pl-32 tablet:pl-40 tracking-[-0.03em] text-[4.25rem] leading-none largeTablet:text-9xl">
            <DecoratedText content="$oygthan..." />
          </p>
        </div>
      </div>
      <div className="pb-16 largeTablet:pb-52">
        {isLargeTablet ? (
          <Image alt="GitHub green squares" src={GreenSquares} />
        ) : (
          <Image alt="GitHub green squares" src={GreenSquaresSmall} />
        )}
      </div>
      <div className="pb-10 largeTablet:pb-44">
        <Heading component="h2" alignSmall="center">
          {subtitle}
        </Heading>
      </div>

      <p className="text-center font-bold text-textPrimary opacity-40 text-base largeTablet:text-2xl leading-none pb-10 largeTablet:pb-24">
        However...
      </p>
      <p className="text-center font-bold pb-2 tracking-[-0.03em] text-xl largeTablet:text-[2rem] largeTablet:pb-6">
        It&apos;s only a surface-level indicator of
      </p>
      <p className="font-bold text-3xl largeTablet:text-[4rem] leading-none text-center pb-32 largeTablet:pb-[350px]">
        how capable a developer is.
      </p>

      <ResponsiveWrapper mb={350}>
        <div className="flex-1">
          <Heading component="h2" alignLarge="left">
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
