import React, { FC } from 'react'
import { SanityHomePage } from '../../../../types/schema'
import Feature from './Feature'
import SectionWrapper from '../../../common/layout/SectionWrapper'
interface Props {
  data: SanityHomePage['features']
}

export interface FeatureProps {
  description: string
  heading : string
  image : string
  title : string
}

const Features: FC<Props> = ({ data }) => {
  return (
    <SectionWrapper>
      {data?.map((feature, i) => (
        <Feature
          key={feature._key}
          feature={feature as unknown as FeatureProps}
          img={feature.image as unknown as string}
          index={i}
        />
      ))}
    </SectionWrapper>
  )
}

export default Features
