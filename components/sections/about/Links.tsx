import React, { FC, ReactElement } from 'react'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { Typography } from '../../common/text'
import Image from 'next/image'
import OrangeRightArrow from '../../../public/orange_right_arrow.png'
import OrangeRightArrowSmall from '../../../public/orange_right_arrow_small.png'
import useMediaQuery from '../../hooks/useMediaQuery'
import Link from 'next/link'

interface LinksProps {}

const data = [
  {
    title: 'Blog',
    content:
      'Read up on product innovations and updates, company announcements, community spotlights, and more.',
    href: '/blog',
  },
  {
    title: 'Brand Assets',
    content:
      'Want to use our Pizza Slice? Looking for the right way to display the OpenSauced logo for your latest project? Download the assets and see how and where to use them.',
    href: 'about/#',
  },
  {
    title: 'hot.opensauced.pizza',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.',
    href: 'https://hot.opensauced.pizza',
  },
]

const Links: FC<LinksProps> = (): ReactElement => {
  const isLargeTablet = useMediaQuery()

  const imgDimension = isLargeTablet ? 40 : 24
  return (
    <SectionWrapper direction="row" pb={255} pbs={135}>
      <div className="max-w-[660px] gap-y-12 flex flex-col ">
        {data.map(({ title, content, href }) => (
          <div className="w-full">
            <div className="flex">
              <div>
                <Typography alignLarge="left">{title}</Typography>
              </div>

              <Link href={href}>
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
                        />
                      </div>
                    </div>
                  </GradientBorderWrapper>
                </div>
              </Link>
            </div>
            <div className="pt-8 pb-12 largeTablet:pt-10">
              <Typography variant="body1" alignLarge="left">
                {content}
              </Typography>
            </div>
            <div className="w-full h-[2px] bg-gradient-to-tr from-brandRed to-brandYellow"></div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Links
