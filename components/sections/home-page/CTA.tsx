import React, { FC } from 'react'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { SanityCalender } from '../../../types/schema'
import Image from 'next/image'
import { Paragraph, Heading } from '../../common/text'
import { Button } from '../../common'

interface CTAProps {
  data: SanityCalender
}

const CTA: FC<CTAProps> = ({ data }) => {
  const { title, subtitle, calenderImage } = data
  const featureImage = calenderImage || ''
  return (
    <SectionWrapper pb={400}>
      <Heading component="h2">
        {title}
      </Heading>
      <div className="my-10 w-full largeTablet:w-[55%]">
        <Paragraph align="center">{subtitle}</Paragraph>
      </div>
      <Button href="https://insights.opensauced.pizza">Get Started</Button>

      <div className="w-[100%] h-fit max-w-[953px] shrink-0 relative mt-[120px]">
        <Image
          alt={title}
          src={featureImage as string}
          layout="responsive"
          width={828}
          height={722}
        />
      </div>
    </SectionWrapper>
  )
}

export default CTA
