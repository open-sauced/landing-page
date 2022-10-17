import Image from 'next/image';
import Link from 'next/link';
import React, { Attributes, FC } from 'react'
import BrandKitLogo from '../public/brandkit-logo.svg'

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
      <div className="flex justify-center items-center flex-wrap">
        <div className="flex-1">
            <Link href="/" passHref>
              <div className="flex items-end gap-x-2 mb-20">
                <div className="h-[66px] w-[300px] tablet:w-[386px]  cursor-pointer">
                  <Image src={BrandKitLogo} layout="responsive" alt="OpenSauced Icon"/>
                </div>
              </div>
            </Link>
          <p className="text-2xl text-gray-700 font-normal tracking-normal leading-8">{subtitle}</p>

          <div className="flex mt-9">
            <div className="font-bold bg-orange-500 text-sm text-white rounded-md px-5 py-3">
              <Link href={AllAssets}>
                {CTAButtonLabel}
              </Link>
            </div>
            <div className="font-bold text-sm text-white rounded-md px-5 py-3 cursor-pointer">
              <p>{`Last updated on ${LastUpdated}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PressHeading