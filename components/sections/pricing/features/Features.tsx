import React, { FC, ReactElement } from 'react'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Paragraph, Subheading } from '../../../common/text'
import FeatureCard from './FeatureCard'

interface FeaturesProps {}

const Features: FC<FeaturesProps> = (): ReactElement => {
  return (
    <SectionWrapper direction="col" pb={288}>
      <Subheading>Features</Subheading>
      <Heading align="center">$rogFeatures Section$rog Title Goes Here </Heading>
      <div className="pt-4 pb-10  largeTablet:w-2/3 largeTablet:pt-10 largeTablet:pb-24 ">
        <Paragraph align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.
        </Paragraph>
      </div>
      <div className="w-full grid grid-cols-2  gap-y-16 gap-x-9 largeTablet:grid-cols-3 largeTablet:gap-y-[88px]">
        {Array(6)
          .fill('')
          .map((x, i) => (
            <FeatureCard key={i} />
          ))}
      </div>
    </SectionWrapper>
  )
}

export default Features
