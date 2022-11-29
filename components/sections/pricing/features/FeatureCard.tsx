import Image from 'next/image'
import React, { FC, ReactElement } from 'react'
import OrangeRocket from '../../../../public/orange_rocket.png'
import GradientBorderWrapper from '../../../common/GradientBorderWrapper'
import { Typography } from '../../../common/text'

const FeatureCard: FC = (): ReactElement => {
  return (
    <div className="w-full">
      <GradientBorderWrapper
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      >
        <div className="w-full h-full bg-[#211e1c] rounded-full flex justify-center items-center">
          <div>
            <Image src={OrangeRocket} alt="Logo image" />
          </div>
        </div>
      </GradientBorderWrapper>
      <div className="w-full pt-6 pb-4">
        <Typography variant="title2" alignLarge="left">
          Feature Name
        </Typography>
      </div>
      <Typography variant="body3" alignLarge="left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat,
        ipsum ac auctor ornare.
      </Typography>
      <p></p>
    </div>
  )
}

export default FeatureCard
