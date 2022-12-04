import React, { FC } from 'react'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { SanityCalender } from '../../../types/schema'
import { Heading, Typography } from '../../common/text'
import { Button } from '../../common'

interface CTAProps {
  data: SanityCalender
}

const CTA: FC<CTAProps> = ({ data }) => {
  const { title, subtitle } = data
  return (
    <SectionWrapper pb={245} pbs={135} >
      <Heading component="h2" alignSmall="center">
        {title}
      </Heading>
      <div className="my-10 w-full largeTablet:w-[55%]">
        <Typography variant="subheading" alignSmall="center">
          {subtitle}
        </Typography>
      </div>
      <Button href="https://insights.opensauced.pizza">Get Started</Button>
    </SectionWrapper>
  )
}

export default CTA
