import Image from 'next/image';
import Link from 'next/link';
import React, { Attributes, FC } from 'react'
import BrandKitLogo from '../public/brandkit-logo.svg'
import UShape from '../public/uShape.svg'

interface Props {
  headingData : {
    subtitle: string,
    featureImage : string,
    LastUpdated : string,
    AllAssets : string,
    CTAButtonLabel: string,
    CTAButtonLink: string
  }
}
const PressHeading:FC<Props> = ({headingData}) => {
  const {
    subtitle,
    featureImage,
    LastUpdated,
    AllAssets,
    CTAButtonLabel,
    CTAButtonLink,

  } = headingData;

  return (
    <div className="">
      <div className="flex items-center flex-wrap px-6 pt-6 pb-10">
        {/* Left Portion */}
        <div className="flex-1">
          <Link href="/" passHref>
            <div className="flex items-end gap-x-2 mb-20">
              <div className="h-[66px] w-[300px] largeTablet:w-[386px]  cursor-pointer">
                <Image src={BrandKitLogo} layout="responsive" alt="OpenSauced Icon"/>
              </div>
            </div>
          </Link>

          <img className="tablet:hidden" src={featureImage} alt="feature" />
          <p className="text-2xl text-gray-700 font-normal tracking-normal leading-8">{subtitle}</p>

          <div className="flex gap-7 mt-9 items-center">
            <div className="relative w-fit flex">
              <div className="bg-orange-500 absolute rounded-md blur-sm -inset-1 "></div>
              <Link href={AllAssets} passHref>
                <button className="font-bold ring-2 shadow-md blur-0 bg-white ring-orange-400 text-sm text-gray-700 opacity-90 rounded-md px-5 py-3">
                    {CTAButtonLabel}
                </button>
              </Link>
            </div>

            <span className="text-xs text-gray-700 font-semibold">{LastUpdated}</span>
          </div>
        </div>

        {/* Right Portion */}
        <div className="hidden relative tablet:flex tablet:w-[275px] largeTablet:w-[390px]  largeTablet:flex-1 laptop:w-[600px] ">
          {/* <img src={UShape} className="" alt="" /> */}
          <div className="absolute max-w-[180px] largeTablet:max-w-[250px] laptop:max-w-[370px] -top-40 largeTablet:-top-44 laptop:-top-64 laptop:right-36 largeTablet:right-24 right-16 ">
            <Image src={UShape} alt="graphics" />
          </div>
          <img className="w-full h-full z-50 " src={featureImage} alt="feature" />
        </div>

      </div>
    </div>
  )
}

export default PressHeading