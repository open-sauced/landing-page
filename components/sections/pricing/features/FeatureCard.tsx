import Image from 'next/image'
import React, { FC, ReactElement } from 'react'
import OrangeRocket from '../../../../public/orange_rocket.png'
import GradientBorderWrapper from '../../../common/GradientBorderWrapper'

// orange_right_arrow

interface FeatureCardProps {}

const FeatureCard: FC<FeatureCardProps> = (): ReactElement => {
  return (
    <div className="w-full">
      <GradientBorderWrapper
        style={{ width: '100px', height: '100px' }}
        radius="50%"
      >
        <div className="w-full h-full bg-[#211e1c] rounded-full flex justify-center items-center">
          <div>
            <Image src={OrangeRocket} />
          </div>
        </div>
      </GradientBorderWrapper>
      <div className="w-full pt-6 pb-4">
        <h3>Feature Name</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat,
        ipsum ac auctor ornare.
      </p>
    </div>
  )
}

export default FeatureCard
