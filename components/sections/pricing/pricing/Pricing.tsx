import React, { FC, ReactElement } from 'react'
import GradientBorderWrapper from '../../../common/GradientBorderWrapper'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Paragraph, Typography } from '../../../common/text'
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

const Pricing = (): ReactElement => {
  return (
    <SectionWrapper pt={205} pts={45} pb={260}>
      <Typography variant="preHeading">Pricing</Typography>
      <div className="w-full largeTablet:w-2/3">
        <Heading>$yogAccess insights$yog you never knew existed</Heading>
      </div>

      <div className="pt-4 pb-10 largeTablet:pt-10 largeTablet:pb-20 largeTablet:w-[58%]">
        <Paragraph align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.
        </Paragraph>
      </div>
      <div className="w-full flex flex-col gap-6 justify-center items-center largeTablet:flex-row">
        {data.map((item, i) => {
          const height =
            i !== 1 ? 'largeTablet:min-h-[454px]' : 'largeTablet:min-h-[486px]'
          const wrapperStyle = ` h-fit min-h-[402px] ${height}]`
          return (
            <div className={wrapperStyle}>
              <GradientBorderWrapper
                key={item.type}
                style={{ width: '100%', height: '100%', borderRadius: '5px' }}
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
