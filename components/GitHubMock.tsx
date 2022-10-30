import Image from 'next/image'
import React, { FC } from 'react'
import { SanityGithubMock } from '../types/schema'
import WeAreMore from '../public/weAreMore.svg'
import GreenSquares from '../public/greenSquares.svg'

interface GitHubMockProps {
  githubMockData: SanityGithubMock
}

const GitHubMock: FC<GitHubMockProps> = ( { githubMockData: {title, subtitle, mockimage, titleRich}}) => {
  return (
      <section className="px-4 font-inter">
        <div className="flex pb-14 px-10 tablet:px-0 items-center justify-center">
          <div>
            <p className="text-white text-5xl font-bold">We are</p>
            <p className=" pl-20 text-8xl font-bold bg-gradient-to-r from-brandRed via-brandRed to-brandYellow text-transparent bg-clip-text">more</p>
            <p className=" pl-40 text-9xl font-bold bg-gradient-to-r from-brandRed via-brandRed to-brandYellow text-transparent bg-clip-text">than</p>
          </div>
        </div>
        <div>
          <Image alt="GitHub green squares" src={GreenSquares} />
        </div>

        <p className="pt-24 tablet:pt-52 font-bold text-3xl tablet:text-5xl text-white text-center  ">
          <span className="leading-tight"> A green contribution graph </span> <span className=" leading-tight bg-gradient-to-r from-orange-300 to-orange-700 text-transparent bg-clip-text">looks cool</span>
          <br />
          <span className="leading-tight">and can encourage building</span> <span className="leading-tight bg-gradient-to-r from-orange-300 to-orange-700 text-transparent bg-clip-text">coding habits</span>
        </p>

        <div className="pt-28 tablet:pt-40">
          <p className="text-center font-bold text-gray-500 text-xl tablet:text-2xl pb-24">However...</p>

          <p className="font-bold text-2xl tablet:text-3xl text-center pb-5">It&apos;s only a surface-level indicator of</p>
          <p className="font-bold text-5xl tablet:text-[4rem] text-center pb-24">how capable a developer is.</p>
        </div>
      </section>
  )
}

export default GitHubMock