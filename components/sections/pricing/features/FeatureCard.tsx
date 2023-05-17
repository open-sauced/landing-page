import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

import { Typography } from '../../../common/text'

interface FeatureCardProps {
  data: {
    feature: string
    featureDescription: string
    featureIcon: object
  }
}

const FeatureCard: FC<FeatureCardProps> = ({ data }): ReactElement => {
  const { feature, featureDescription, featureIcon } = data
  
  return (
    <div className="w-full">
      <Image width={100} height={100} src={featureIcon as unknown as string} alt="Logo image" />

      <div className="w-full pt-6 pb-4">
        <Typography variant="title2" alignLarge="left">
          {feature}
        </Typography>
      </div>
      <Typography variant="body3" alignLarge="left">
        {featureDescription}
      </Typography>
    </div>
  )
}

export default FeatureCard
