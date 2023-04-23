import React, { FC } from 'react'
import { Heading, Typography } from '../../../common/text'
import { FeatureProps } from './Features'
import JourneyLine from '../JourneyLine'
import FeatureImage from './FeatureImage'

interface Props {
  index: number
  feature: FeatureProps
  coverStyle: {
    top: number
    left: number
    scale: number
  }
}

const Feature: FC<Props> = ({
  index,
  feature: { title, description, cover },
  coverStyle: { top, left, scale }
}) => {
  return (
    <div
    className={`w-full relative flex flex-col px-12 mb-[120px] largeTablet:mb-[250px]`}
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
      <div className="relative">
        <FeatureImage
          top={top}
          left={left}
          scale={scale}
          src={cover}
          alt={title}
        />
        {/* <img className="relative left-10" src="/hotRepos.svg" alt="Feature cover" /> */}
      </div>
    </div>
  )
}

export default Feature
