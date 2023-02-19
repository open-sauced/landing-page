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
    <div id="features" className="pt-[30px]">
      <SectionWrapper pb={20} pbs={0}>
        {data?.map((feature, i) => (
          <Feature
            key={feature._key}
            feature={feature as unknown as FeatureProps}
            img={feature.image as unknown as string}
            index={i}
          />
        ))}
      </SectionWrapper>
    </div>
  )
}

export default Features
