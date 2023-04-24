import React, { FC } from 'react'
import { Heading, Typography } from '../../../common/text'
import { FeatureProps } from './Features'
import JourneyLine from '../JourneyLine'
import FeatureImage from './FeatureImage'

interface Props {
  index: number
  feature: FeatureProps
  className?: string
}

const Feature: FC<Props> = ({
  index,
  feature: { title, description, cover },
  className
}) => {
  return (
    <div
    className={`w-full relative flex flex-col px-8 largeTablet:px-12 mb-[100px] largeTablet:mb-[250px]`}
    >
      <JourneyLine journeyIndex={index+1} className="left-[-28px] top-[-7px]"/>

      <div>
        <div className="largeTablet:max-w-[500px]">
          <Heading component="h2" alignLarge="left">
            {title}
          </Heading>
        </div>

        <div className="my-10 largeTablet:max-w-[500px]">
          <Typography variant="subheading2" alignLarge="left">
            {description}
          </Typography>
        </div>
      </div>
      <div className="relative h-fit max-h-[400px] largeTablet:max-h-[470px]">
        <FeatureImage
          className={className}
          src={cover}
          alt={title}
        />
      </div>
    </div>
  )
}

export default Feature
