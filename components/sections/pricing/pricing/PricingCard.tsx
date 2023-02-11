import React, { FC } from 'react'
import OrangeCheckmark from '../../../../public/orangeCheckmark.svg'
import Image from 'next/image'
import { Button } from '../../../common'
import { Typography } from '../../../common/text'
import useMediaQuery from '../../../hooks/useMediaQuery'

interface PricingCardProps {
  data: {
    packageName: string
    packagePrice: number
    keyFeatures: string[]
    cta: {
      ctaText: string,
      ctaLink: string
    }
  }
  index: number
}

const PricingCard: FC<PricingCardProps> = ({ data, index }) => {
  const isLargeTablet = useMediaQuery()
  const { packageName, packagePrice, keyFeatures, cta } = data
  const per = (packagePrice !== 0 && packagePrice > -1) ? '/mo' : ''

  const getPrice = (price: number) => {
    if (price < 0) {
      return 'CONTACT US'
    }
    if (price === 0) {
      return 'FREE'
    }
    return ("$"+packagePrice)
  }
  const paddingY =
    index !== 1 ? 'largeTablet:py-[48px]' : 'largeTablet:py-[60px]'
  return (
    <div
      className={`w-full h-full p-10 bg-[#211E1C] rounded-[5px] flex flex-col largeTablet:px-11 ${paddingY}`}
    >
      <Typography variant="preHeading" alignLarge="left">
        {packageName}
      </Typography>
      <div className="flex items-end pb-4 largeTablet:pb-8">
        <div>
          {isLargeTablet && index === 1 ? (
            <p className="text-5xl font-bold tracking-[-0.03em]">{getPrice(packagePrice)}</p>
          ) : (
            <Typography>{getPrice(packagePrice)}</Typography>
          )}
        </div>
        {!!per && <span className="pl-1">{` ${"/ mo"}`}</span>}{' '}
      </div>

      <div>
        {keyFeatures.map((item) => (
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
      <Button backgroundVariant="orange" href={cta.ctaLink} fullWidth>
        {cta.ctaText}
      </Button>
    </div>
  )
}

export default PricingCard
