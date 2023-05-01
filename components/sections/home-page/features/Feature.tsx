import React, { FC } from 'react'
import { FeatureProps } from './Features'
import { Heading, Typography } from '../../../common/text'
import ContainerWithLine from '../../../common/ContainerWithLine'

interface Props {
  feature: FeatureProps
  index: number
  className: {
    lg: string
    sm: string
  }
}

const Feature: FC<Props> = ({
  feature: { description, heading, image, smallImage, title, icon },
  className
}) => {
  const hide = smallImage ? 'hidden' : ''

  return (
    <ContainerWithLine>
      <div className="pb-14 largeTablet:mb-32">
        <div className="flex gap-y-24 py-10 flex-col-reverse largeTablet:flex-col">
          <div className=" flex flex-col px-6 gap-y-8">
            <div className="relative largeTablet:max-w-[500px]">
              <img className="absolute -left-[56px] largeTablet:-left-[77px] -top-[8px] largeTablet:-top-[4px]" src={icon} alt="" />
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

          <div className={`relative largeTablet:flex justify-center largeTablet:min-h-[350px] ${hide}`}>
            <img className={`relative ${className.lg}`} src={image} alt="Feature"/>
          </div>

          { smallImage && (
          <div className="relative flex largeTablet:hidden justify-center largeTablet:min-h-[350px]">
            <img className={`relative ${className.sm}`} src={smallImage} alt="Feature"/>
          </div>)
          }
        </div>
      </div>
    </ContainerWithLine>
  )
}

export default Feature 