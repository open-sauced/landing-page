import React, { FC } from 'react'
import OrangeCheckmark from '../../../../public/orangeCheckmark.png'
import Image from 'next/image'
import { Button } from '../../../common'

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
    index !== 1 ? 'largeTablet:py-[48px]' : 'largeTablet:py-[80px]'
  return (
    <div
      className={`w-full h-full p-10 bg-darkBG rounded-[5px] flex flex-col largeTablet:px-14 ${paddingY}`}
    >
      <p>{type}</p>
      <h3>
        {price} {!!per && <span>{` ${per}`}</span>}{' '}
      </h3>
      <div>
        {options.map((item) => (
          <div className="w-full flex">
            <div className="w-[30px] flex-shrink-0">
              <Image src={OrangeCheckmark} />
            </div>
            <div>
              <p>{item}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-grow"></div>
      <Button href={href}>Get Started</Button>
    </div>
  )
}

export default PricingCard
