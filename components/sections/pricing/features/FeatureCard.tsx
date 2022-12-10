import Image from 'next/image'
import React, { FC, ReactElement } from 'react'
import { Typography } from '../../../common/text'

interface FeatureCardProps {
  data: {
    name: string
    description: string
    icon: string
  }
}

const FeatureCard: FC<FeatureCardProps> = ({ data }): ReactElement => {
  return (
    <div className="w-full">
      <Image src={data.icon} alt="Logo image" />

      <div className="w-full pt-6 pb-4">
        <Typography variant="title2" alignLarge="left">
          {data.name}
        </Typography>
      </div>
      <Typography variant="body3" alignLarge="left">
        {data.description}
      </Typography>
    </div>
  )
}

export default FeatureCard
