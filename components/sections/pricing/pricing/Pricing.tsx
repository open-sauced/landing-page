import React, { FC, ReactElement } from 'react'
import GradientBorderWrapper from '../../../common/GradientBorderWrapper'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Paragraph, Subheading } from '../../../common/text'
import PricingCard from './PricingCard'

const data = [
  {
    type: 'Limited Access',
    price: 'Free',
    per: '',
    options: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ],
    href: '/#',
  },
  {
    type: 'Full Access',
    price: '$99',
    per: '/ mo',
    options: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ],
    href: '/#',
  },
  {
    type: 'Enterprise',
    price: 'Contact us',
    per: '',
    options: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ],
    href: '/#',
  },
]

interface PricingProps {}

const Pricing: FC<PricingProps> = (): ReactElement => {
  return (
    <SectionWrapper direction="col" pt={205} pts={45} pb={260}>
      <Subheading>Pricing</Subheading>
      <div className="largeTablet:w-2/3">
        <Heading align="center">
          $yogAccess insights$yog you never knew existed
        </Heading>
      </div>

      <div className="pt-4 pb-10 largeTablet:pt-10 largeTablet:pb-20 largeTablet:w-[58%]">
        <Paragraph align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.
        </Paragraph>
      </div>
      <div className="w-full flex flex-col gap-6 justify-center items-center largeTablet:flex-row">
        {data.map((item, i) => {
          const height = i !== 1 ? '454px' : '486px'
          return (
            <div className={`h-[402px] largeTablet:h-[${height}]`}>
              <GradientBorderWrapper
                key={item.type}
                style={{ width: '100%', height: '100%' }}
                radius="5px"
              >
                <PricingCard data={item} index={i} />
              </GradientBorderWrapper>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default Pricing
