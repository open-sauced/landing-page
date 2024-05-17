import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import SectionWrapper from '../../common/layout/SectionWrapper'

// Static Assets
import BrandKitLogo from '../../../public/brandkit-logo.svg'
import UShape from '../../../public/background-strokes/uShape.svg'

interface Props {
  headingData: {
    subtitle: string
    featureImage: string
    LastUpdated: string
    AllAssets: string
    CTAButtonLabel: string
    CTAButtonLink: string
  }
}
const PressHeading: FC<Props> = ({ headingData }) => {
  const {
    subtitle,
    featureImage,
    LastUpdated,
    AllAssets,
    CTAButtonLabel,
  } = headingData

  return (
    <div className="h-fit relative bg-gray105">
      <SectionWrapper>
        <div className="px-6 pt-6 pb-36">
          <div className="justify-end hidden py-4 tablet:flex ">
            <Link passHref href="/">
              <button className="text-gray-700 hover:text-white hover:bg-opacity-70 transition-all duration-300 bg-orange-600 px-3 py-2 rounded-md bg-opacity-20 font-semibold text-sm">
                Visit OpenSauced.pizza
              </button>
            </Link>
          </div>
          <div className="flex items-center flex-wrap">
            {/* Left Portion */}
            <div className="flex-1">
              <Link href="/" passHref>
                <div className="flex items-end gap-x-2 mb-8">
                  <div className="h-[66px] w-[300px] largeTablet:w-[386px]  cursor-pointer">
                    <Image
                      src={BrandKitLogo}
                      alt="OpenSauced Icon"
                    />
                  </div>
                </div>
              </Link>

              <img className="tablet:hidden" src={featureImage} alt="feature" />
              <p className="text-xl  largeTablet:text-2xl text-gray-700 font-normal tracking-normal leading-8">
                {subtitle}
              </p>

              <div className="flex gap-7 mt-12 items-center">
                <div className="relative w-fit flex">
                  <div className="bg-orange-500 absolute rounded-md blur-sm -inset-1 transition-all"></div>
                  <Link href={AllAssets} passHref>
                    <button className="font-bold bg-white text-sm text-gray-700 opacity-90 rounded-md px-5 py-3">
                      {CTAButtonLabel}
                    </button>
                  </Link>
                </div>

                <span className="text-xs text-gray-700 font-semibold">
                  {LastUpdated}
                </span>
              </div>
            </div>

            {/* Right Portion */}
            <div className="hidden relative tablet:flex tablet:w-[275px] largeTablet:w-[390px]  largeTablet:flex-1 laptop:w-[600px]">
              {/* <img src={UShape} className="" alt="" /> */}
              <div className="absolute max-w-[190px] largeTablet:max-w-[250px] laptop:max-w-[360px] laptop:right-26 -top-40 desktop:right-36 largeTablet:-top-44 laptop:-top-64  largeTablet:right-24 right-16">
                <Image src={UShape} alt="graphics" />
              </div>
              <img
                className="w-full h-full"
                src={featureImage}
                alt="feature"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default PressHeading
