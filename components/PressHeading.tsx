import Image from 'next/image';
import Link from 'next/link';
import React, { Attributes, FC } from 'react'
import OsIconWhiteText from '../public/osIconWhiteText.svg'

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
    <div className="px-4 tablet:px-4 largeTablet:px-0">
      <div className="flex justify-center items-center flex-wrap">
        <div className="flex-1 my-32">
            <Link href="/" passHref>
              <div className="flex items-end gap-x-2 mb-20">
                <div className="h-[66px] w-[300px] tablet:w-[386px]  cursor-pointer">
                  <Image src={OsIconWhiteText} layout="responsive" alt="OpenSauced Icon"/>
                </div>

                <p className="font-semibold text-sm text-gray-400">Brand Kit</p>
              </div>
            </Link>
          <p className="text-2xl text-white leading-8">{subtitle}</p>

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

        <div className="flex-1 hidden tablet:block relative">
          <img className="w-auto h-full" src={featureImage as unknown as string} alt="OpenSauced logo stack" />
        </div>
      </div>
    </div>
  )
}

export default PressHeading