import React, { FC } from 'react'
import { FeatureProps } from './Features'

interface Props {
  feature: FeatureProps
  img: string
  index: number
}

const Feature: FC<Props> = ({
  feature: { description, heading, image, title },
  img,
  index,
}) => {
  return (
    <div>
    </div>
  )
}

export default Feature
