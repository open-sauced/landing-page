import React, { FC } from 'react'
import OrangeCheckmark from '../../../../public/orangeCheckmark.png'
import Image from 'next/image'
import { Button } from '../../../common'
import { Typography } from '../../../common/text'
import useMediaQuery from '../../../hooks/useMediaQuery'

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
  const isLargeTablet = useMediaQuery()
  const { type, price, per, options, href } = data
  const paddingY =
    index !== 1 ? 'largeTablet:py-[48px]' : 'largeTablet:py-[60px]'
  return (
    <div
      className={`w-full h-full p-10 bg-[#211E1C] rounded-[5px] flex flex-col largeTablet:px-11 ${paddingY}`}
    >
      <Typography variant="preHeading" alignLarge="left">
        {type}
      </Typography>
      <div className="flex items-end pb-4 largeTablet:pb-8">
        <div>
          {isLargeTablet && index === 1 ? (
            <p className="text-5xl font-bold tracking-[-0.03em]">{price}</p>
          ) : (
            <Typography>{price}</Typography>
          )}
        </div>
        {!!per && <span className="pl-1">{` ${per}`}</span>}{' '}
      </div>

      <div>
        {options.map((item) => (
          <div key={item} className="w-full flex pb-1">
            <div className="w-[30px] flex-shrink-0">
              <Image src={OrangeCheckmark} alt="Check mark" />
            </div>
            <div>
              <Typography alignLarge="left" variant="body2">
                {item}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-8"></div>
      <Button backgroundVariant="orange" href={href} fullWidth>
        Get Started
      </Button>
    </div>
  )
}

export default PricingCard
