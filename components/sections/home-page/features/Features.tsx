import React, { FC } from 'react'
import { SanityFeature } from '../../../../types/schema'
import Feature from './Feature'
import { PortableText } from '@portabletext/react'
import SectionWrapper from '../../../common/layout/SectionWrapper'

interface Props {
  data: SanityFeature[]
}

const Features: FC<Props> = ({ data }) => {
  return (
    <SectionWrapper pb={20} pbs={0}  >
      {data.map((feature, i) => (
        <Feature
          key={feature.slug?.current}
          feature={feature as SanityFeature}
          index={i}
        />
      ))}
    </SectionWrapper>
  )
}

export default Features
