import React, { FC, ReactElement } from 'react'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { Typography } from '../../common/text'
import Image from 'next/image'
import OrangeRightArrow from '../../../public/orange_right_arrow.png'
import OrangeRightArrowSmall from '../../../public/orange_right_arrow_small.png'
import useMediaQuery from '../../hooks/useMediaQuery'
import Link from 'next/link'

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
    href: 'https://www.figma.com/proto/a2Ay1zhFAIDPmiEbTYVOID/OpenSauced-Brand?node-id=140%3A11324&scaling=min-zoom&page-id=0%3A1',
  },
  {
    title: 'hot.opensauced.pizza',
    content:
      'Explore some of the hottest projects on GitHub. This is a curated list of the most popular repositories.',
    href: 'https://hot.opensauced.pizza',
  },
]

const Links: FC = (): ReactElement => {
  const isLargeTablet = useMediaQuery()

  const imgDimension = isLargeTablet ? 40 : 24
  return (
    <SectionWrapper pb={255} pbs={135}>
      <div className="max-w-[660px] gap-y-12 flex flex-col">
        {data.map(({ title, content, href }) => {
          const internalLink = href && href.startsWith('/')
          return (
            <div key={title} className="w-full">
              <div className="flex items-center">
                <div>
                  <Typography variant="title3" alignLarge="left">
                    {title}
                  </Typography>
                </div>

                <Link href={href} passHref>
                  <a
                    target={internalLink ? '_self' : '_blank'}
                    rel="noreferrer"
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
                  {content}
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
