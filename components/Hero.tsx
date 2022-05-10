import React from 'react'
import Button from './Button'
import { SanityAbout } from '../types/schema'

interface HeroProps {
  sanityData: SanityAbout
}

const Hero = ({ sanityData }: HeroProps) => {
  return (
    <main className="pt-[88px] tablet:pt-[186px] tablet:grid grid-cols-[1.5fr_1fr] gap-[20px] laptop:gap-[0px]">
      <div className="flex flex-col text-gray400 gap-[32px] tablet:gap-[40px] items-start">
        <h2 className="font-bold text-[36px] laptop:text-[48px] leading-[1.2]">
          {sanityData.title}
        </h2>
        <p className="text-[14px] leading-loose font-secondary">
          {sanityData.subtitle}
        </p>

        <div className=' flex gap-4 items-center'>
          <Button
            asLink
            href={sanityData.CTAButtonURL}
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
            {sanityData.CTAButtonLabel}
          </Button>
          <Button
            asLink
            href={sanityData.projectsButtonUrl}
            type="default"
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
            {sanityData.projectsButtonLabel}
            
          </Button>
          
        </div>
        
      </div>
      <div className="relative hidden tablet:block">
        <div className="top-[-80px] h-[400px] tablet:top-[-120px] tablet:h-[800px] aspect-square absolute pointer-events-none">
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={`${sanityData.previewImage as unknown as string}?auto=format`}
            loading="eager"
          />
        </div>
      </div>
    </main>
  )
}

export default Hero
