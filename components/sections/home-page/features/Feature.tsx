import React, { FC } from 'react'
import { FeatureProps } from './Features'
import { Heading, Typography } from '../../../common/text'
import ContainerWithLine from '../../../common/ContainerWithLine'

interface Props {
  feature: FeatureProps
  index: number
}

const Feature: FC<Props> = ({
  feature: { description, heading, image, title, icon },
}) => {
  return (
    <ContainerWithLine>
      <div className="flex py-10 gap-y-24 px-6 flex-col-reverse largeTablet:flex-col">
        <div className=" flex flex-col gap-y-8">
          <div className="relative largeTablet:max-w-[500px]">
            <img className="absolute -left-[76px] -top-[8px] largeTablet:-top-[4px]" src={icon} alt="" />
            <Heading component="h2" alignLarge="left">
              {title}
            </Heading>
          </div>

          <div className="largeTablet:max-w-[500px]">
            <Typography variant="subheading" alignLarge="left">
              {description}
            </Typography>
          </div>
        </div>

        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </ContainerWithLine>
  )
}

export default Feature
