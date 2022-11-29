import React, { FC } from 'react'
import OrangeCheckmark from '../../../../public/orangeCheckmark.png'
import Image from 'next/image'
import { Button } from '../../../common'
import { Typography } from '../../../common/text'

interface PricingCardProps {
  data: {
    type: string
    price: string
    per: string
    options: string[]
    href: string
  }
  index: number
}

const PricingCard: FC<PricingCardProps> = ({ data, index }) => {
  const { type, price, per, options, href } = data
  const paddingY =
    index !== 1 ? 'largeTablet:py-[48px]' : 'largeTablet:py-[60px]'
  return (
    <div
      className={`w-full h-full p-10 bg-darkBG rounded-[5px] flex flex-col largeTablet:px-14 ${paddingY}`}
    >
      <Typography variant="preHeading" alignLarge="left">
        {type}
      </Typography>
      <div className="flex items-end pb-4 largeTablet:pb-8">
        <div>
          <Typography>{price}</Typography>
        </div>
        {!!per && <span className="pl-1">{` ${per}`}</span>}{' '}
      </div>

      <div>
        {options.map((item) => (
          <div className="w-full flex pb-1">
            <div className="w-[30px] flex-shrink-0">
              <Image src={OrangeCheckmark} />
            </div>
            <div>
              <Typography variant="body2">{item}</Typography>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-8"></div>
      <Button href={href} fullWidth>
        Get Started
      </Button>
    </div>
  )
}

export default PricingCard
