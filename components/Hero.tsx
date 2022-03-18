import React from 'react'
import Button from './Button'
import Image from 'next/image'
import heroImage from '../public/hero.png'

const Hero = () => {
  return (
    <main className="pt-[186px] grid grid-cols-[1.5fr_1fr] gap-[120px]">
      <div className="flex flex-col text-gray400 gap-[40px] items-start">
        <h2 className="font-bold text-[48px] leading-[1.2]">
          The path to your next open source contribution.
        </h2>
        <p className="text-[12px] leading-loose">
          Millions of companies of all sizes use open source software to stay
          competitive. Get started contributing to open source with OpenSauced.
        </p>

        <Button
          type="primary"
          endIcon={
            <svg width="0.6rem" height="0.6rem" fill="none" viewBox="8 8 8 8">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.75 8.75L14.25 12L10.75 15.25"
              ></path>
            </svg>
          }
        >
          Start now
        </Button>
      </div>
      <div className="relative">
        <div className="top-[-120px] h-[800px] aspect-square absolute">
          <Image layout="responsive" alt="" src={heroImage} />
        </div>
      </div>
    </main>
  )
}

export default Hero
