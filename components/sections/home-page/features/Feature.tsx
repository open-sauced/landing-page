import Image from 'next/image'
import React, { FC } from 'react'
import { SanityFeature } from '../../../../types/schema'
import { Button } from '../../../common'
import ResponsiveWrapper from '../../../common/layout/ResponsiveWrapper'
import { Paragraph, Heading, Subheading } from '../../../common/text'

interface Props {
  feature: SanityFeature
  index: number
}

const Feature: FC<Props> = ({
  feature: { title, subtitle, previewImage, slug, description },
  index,
}) => {
  const href = slug ? `/feature/${slug.current}` : `/`
  const reverse = index % 2 === 1
  return (
    <ResponsiveWrapper reverse={reverse}>
      <div className={`flex-[1] ${!reverse && 'pl-6'}`}>
        <Subheading>{subtitle}</Subheading>
        <Heading component="h2">{title}</Heading>
        <div className="my-10">
          <Paragraph>{description}</Paragraph>
        </div>
        <Button href={href}>Learn more</Button>
      </div>
      <div className="flex-[1] flex justify-center items-center mt-14 largeTablet:mt-0">
        <img src={previewImage as unknown as string} />
      </div>
    </ResponsiveWrapper>
  )
}

export default Feature
