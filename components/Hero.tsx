import React from 'react'
import { SanityAbout } from '../types/schema'
import PRsHero from '../public/PRs-hero.svg'
import Image from 'next/image'

interface HeroProps {
  sanityData: SanityAbout
}

const Hero = ({ sanityData }: HeroProps) => {

  const heroTitle = sanityData.title || ""
  const titleExceptLastTwoWords = heroTitle.split(" ").slice(0, heroTitle.split(" ").length - 2).join(" ")
  const lastTwoWordsOfTitle = heroTitle.split(" ").slice(heroTitle.split(" ").length - 2, heroTitle.split(" ").length).join(" ")

  return (
    <main className=" pt-20 px-4 tablet:pt-[12rem] tablet:grid grid-cols-[1.5fr_1fr] gap-5 laptop:gap-0 font-inter">
      <div className="flex flex-col gap-7 tablet:gap-7 items-start">
        <p className="text-gray-400 uppercase text-xs font-bold">Open Source Insights</p>
        <h1 className="font-bold text-6xl laptop:text-5xl leading-none">
          {titleExceptLastTwoWords}<br/> <span className="bg-gradient-to-r from-orange-300 to-orange-700 text-transparent bg-clip-text">{lastTwoWordsOfTitle}</span>
        </h1>
        <p className="text-gray-400 text-xl">
          {sanityData.subtitle}
        </p>

        <div className="flex gap-4 items-center">
          <div className="relative">
            <div className="bg-gradient-to-r -inset-0 blur-sm rounded-md absolute from-orange-400 to-orange-600">
            </div>
            <a href={sanityData.CTAButtonURL}>
              <button className="rounded-md relative border-orange-500 border-2 text-white text-sm font-bold py-2 px-4 largeTablet:px-12 bg-darkBG">
                {sanityData.CTAButtonLabel}
              </button>
            </a>
          </div>

          <a href={sanityData.projectsButtonUrl}>
            <button className="rounded-md relative border-gray-500 border-2 text-white text-sm font-bold py-2 px-4 largeTablet:px-12 bg-darkBG">
              {sanityData.projectsButtonLabel}
            </button>
          </a>
        </div>
        
      </div>
      <div className="relative hidden tablet:block">
        <div className="h-[400px] tablet:h-[800px] aspect-square absolute pointer-events-none">
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <Image src={PRsHero} />
        </div>
      </div>
    </main>
  )
}

export default Hero
