import Image from 'next/image'
import React, { FC } from 'react'
import { SanityGithubMock } from '../types/schema'
import GreenSquares from '../public/greenSquares.svg'
import trueImpact from '../public/trueImpact.svg'
interface GitHubMockProps {
  githubMockData: SanityGithubMock
}

const GitHubMock: FC<GitHubMockProps> = ( { githubMockData: {title, subtitle, mockimage, titleRich}}) => {
  return (
      <section className="px-4 font-inter">
        <div className="flex pb-14 px-10 tablet:px-0 items-center justify-center">
          <div>
            <p className="text-white text-4xl tablet:text-5xl font-bold">We are</p>
            <p className="pl-16 tablet:pl-20 text-7xl tablet:text-8xl font-bold bg-gradient-to-r from-brandRed via-brandRed to-brandYellow text-transparent bg-clip-text">more</p>
            <p className="pl-32 tablet:pl-40 text-8xl tablet:text-9xl font-bold bg-gradient-to-r from-brandRed via-brandRed to-brandYellow text-transparent bg-clip-text">than</p>
          </div>
        </div>
        <div>
          <Image alt="GitHub green squares" src={GreenSquares} />
        </div>

        <p className="pt-24 tablet:pt-52 font-bold text-3xl tablet:text-5xl text-white text-center  ">
          <span className="leading-tight"> A green contribution graph </span> <span className=" leading-tight bg-gradient-to-r from-brandYellow via-brandRed to-brandRed text-transparent bg-clip-text">looks cool</span>
          <br />
          <span className="leading-tight">and can encourage building</span> <span className="leading-tight bg-gradient-to-r from-brandYellow via-brandRed to-brandRed text-transparent bg-clip-text">coding habits</span>
        </p>

        <div className="pt-28 tablet:pt-40">
          <p className="text-center font-bold text-gray-500 text-xl tablet:text-2xl pb-24">However...</p>
          <p className="font-bold text-2xl tablet:text-3xl text-center pb-5">It&apos;s only a surface-level indicator of</p>
          <p className="font-bold text-5xl tablet:text-[4rem] text-center pb-24">how capable a developer is.</p>
        </div>

        <div className="flex flex-col tablet:flex-row gap-x-4 gap-y-16 items-center pt-28 tablet:pt-40">
          <div className="flex-1 max-w-lg">
            <h2 className="font-bold text-5xl text-white">Find out the  <span className="text-brandRed">true impact</span> to the OSS community</h2>
            
            <p className="text-gray-400 text-2xl mt-12">Using our developer first metrics, you can see a true representation of any  developer’s ability.</p>
          </div>
          <div className="flex-1 flex">
            <div className="flex w-full justify-center tablet:justify-end">
              <Image src={trueImpact} />

            </div>
          </div>

        </div>
      </section>
  )
}

export default GitHubMock