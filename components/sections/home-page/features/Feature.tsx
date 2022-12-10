import Image from 'next/image'
import React, { FC } from 'react'
import { SanityFeature } from '../../../../types/schema'
import { Button } from '../../../common'
import { Heading, Typography } from '../../../common/text'

interface Props {
  feature: SanityFeature
  img: string
  index: number
}

const Feature: FC<Props> = ({
  feature: { title, subtitle, slug, description },
  img,
  index,
}) => {
  const href = slug ? `/feature/${slug.current}` : `/`
  const reverse = index % 2 === 1
  const dropShadow =
    index === 0 || index === 3 ? 'drop-shadow-[0_0_60px_#f8721666]' : ''
  const flexDirection = !reverse
    ? 'largeTablet:flex-row-reverse'
    : 'largeTablet:flex-row'
  return (
    <div
      className={`w-full flex flex-col items-center ${flexDirection} mb-[120px] largeTablet:mb-[250px] `}
    >
      <div
        className={`w-full flex justify-center items-center mb-14 largeTablet:mt-0 ${dropShadow} largeTablet:w-1/2`}
      >
        <div className="w-full max-w-[550px]">
          <Image src={img} alt={`${title} image`} />
        </div>
      </div>
      <div
        className={`w-full ${reverse && 'largeTablet:pl-28'} ${
          !reverse && 'largeTablet:pr-28'
        } largeTablet:w-1/2`}
      >
        <Typography variant="preHeading" alignLarge="left">
          {subtitle}
        </Typography>
        <div className={`${index === 0 && 'largeTablet:max-w-[400px]'}`}>
          <Heading component="h2" alignLarge="left">
            {title}
          </Heading>
        </div>

        <div className="my-10 largeTablet:max-w-[500px]">
          <Typography variant="subheading" alignLarge="left">
            {description}
          </Typography>
        </div>
        {false && <Button href={href}>Learn more</Button>}
      </div>
    </div>
  )
}

export default Feature
