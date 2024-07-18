import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { AboutPage as SanityAboutPage } from '../../../sanity.types'

// Components
import GradientBorderWrapper from '../../common/GradientBorderWrapper'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { Typography } from '../../common/text'
import OrangeRightArrow from '../../../public/orange_right_arrow.png'
import OrangeRightArrowSmall from '../../../public/orange_right_arrow_small.png'
import useMediaQuery from '../../hooks/useMediaQuery'
import Link from 'next/link'

interface LinksProps {
  services: SanityAboutPage['services']
}

const Links: FC<LinksProps> = ({ services }): ReactElement => {
  const isLargeTablet = useMediaQuery()
  const imgDimension = isLargeTablet ? 40 : 24
  return (
    <SectionWrapper pb={255} pbs={135}>
      <div className="max-w-[660px] gap-y-12 flex flex-col">
        {services?.map(({ serviceName , serviceUrl, serviceDescription }) => {
          const internalLink = serviceUrl && serviceUrl.startsWith('/')
          return (
            <div key={serviceName} className="w-full">
              <div className="flex items-center">
                <div>
                  <Typography variant="title3" alignLarge="left">
                    {serviceName}
                  </Typography>
                </div>

                <Link href={serviceUrl as unknown as string} legacyBehavior passHref>
                  <a
                    target={internalLink ? '_self' : '_blank'}
                    
                  >
                    <div className="flex justify-center items-center pl-6 cursor-pointer">
                      <GradientBorderWrapper
                        style={{
                          width: `${imgDimension}px`,
                          height: `${imgDimension}px`,
                          borderRadius: '50%',
                        }}
                      >
                        <div className="w-full h-full bg-[#211e1c] rounded-full flex justify-center items-center">
                          <div className="relative left-[1px] largeTablet:top-[2px] largeTablet:left-[2px]  ">
                            <Image
                              src={
                                isLargeTablet
                                  ? OrangeRightArrow
                                  : OrangeRightArrowSmall
                              }
                              alt="Visit"
                            />
                          </div>
                        </div>
                      </GradientBorderWrapper>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="pt-8 pb-12 largeTablet:pt-10">
                <Typography variant="body1" alignLarge="left">
                  {serviceDescription}
                </Typography>
              </div>
              <div className="w-full h-[2px] bg-gradient-to-tr from-brandRed to-brandYellow"></div>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default Links
