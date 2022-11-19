import Image from 'next/image'
import React, { FC } from 'react'
import { SanityFeature } from '../../../../types/schema'
import { Button } from '../../../common'
import { Paragraph, Heading, Subheading } from '../../../common/text'

interface Props {
  feature: SanityFeature
  index: number
}

const Feature: FC<Props> = ({
  feature: { title, subtitle, previewImage, slug, description },
  index,
}) => {
  return (
    <div className=" px-2 tablet:px-20 ">
      <div
        className={` flex px-8 gap-20 py-24 items-center  ${
          index % 2 == 1 ? 'tablet:flex-row-reverse' : 'tablet:flex-row'
        } `}
      >
        <div className="flex-[1] ">
          <img src={previewImage as unknown as string} />
        </div>

        <div className="flex-[2]">
          <Subheading>{subtitle}</Subheading>
          <Heading component="h2">{title}</Heading>
          <div className="my-10">
            <Paragraph>{description}</Paragraph>
          </div>
          <Button href={('/feature/' + slug?.current) as unknown as string}>
            Learn more
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Feature
