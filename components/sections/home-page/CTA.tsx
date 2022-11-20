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
    <SectionWrapper>
      <div className="flex justify-center items-center flex-col text-center font-inter">
        <Heading component="h2" align="center">
          {title}
        </Heading>
        <div className="my-10 w-full laptop:w-[55%]">
          <Paragraph align="center">{subtitle}</Paragraph>
        </div>
        <Button href="https://insights.opensauced.pizza">Get Started</Button>

        <div className="w-[344px] h-[390px] shrink-0 relative mt-[120px]">
          <Image alt={title} src={featureImage as string} layout="fill" />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CTA
