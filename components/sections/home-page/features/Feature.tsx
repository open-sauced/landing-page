import React, { FC } from 'react'
import { Heading, Typography } from '../../../common/text'
import { FeatureProps } from './Features'
import JourneyLine from '../JourneyLine'

interface Props {
  feature: FeatureProps
  index: number
}

const Feature: FC<Props> = ({
  feature: { title, description, image,  },
  index,
}) => {
  return (
    <div
    className={`w-full relative flex items-center px-12 mb-[120px] largeTablet:mb-[250px]`}
    >
      <JourneyLine journeyIndex={index+1} left={-28} top={-7} />
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
      <div>
        img
      </div>
    </div>
  )
}

export default Feature
