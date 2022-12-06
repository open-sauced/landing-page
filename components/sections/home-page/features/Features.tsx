import React, { FC } from 'react'
import { SanityFeature } from '../../../../types/schema'
import Feature from './Feature'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import Feature1IMG from '../../../../public/feature_1.svg'
import Feature2IMG from '../../../../public/feature_2.png'
import Feature3IMG from '../../../../public/feature_3.png'
import Feature4IMG from '../../../../public/feature_4.svg'

const featureImages = [Feature1IMG, Feature2IMG, Feature3IMG, Feature4IMG]

interface Props {
  data: SanityFeature[]
}

const Features: FC<Props> = ({ data }) => {
  return (
    <div id="features" className="pt-[30px]">
      <SectionWrapper pb={20} pbs={0}>
        {data.map((feature, i) => (
          <Feature
            key={feature.slug?.current}
            feature={feature as SanityFeature}
            img={featureImages[i]}
            index={i}
          />
        ))}
      </SectionWrapper>
    </div>
  )
}

export default Features
