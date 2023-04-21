import React, { FC } from 'react'
import { SanityHomePage } from '../../../../types/schema'
import Feature from './Feature'
import SectionWrapper from '../../../common/layout/SectionWrapper'
interface Props {
  data: SanityHomePage['features']
}

export interface FeatureProps {
  title : string
  description: string
  image : string
}

const featureData = [
  {
    _key: '1',
    title: 'Find $orange-to-yellowhot repositories$orange-to-yellow to contribute to today',
    description: 'Discovering projects is more than stars. Focus on PRs. Discover active projects and get recommendations based on the developers you follow.',
  },
  {
    _key: '2',
    title: '$orange-to-yellowShareable highlights$orange-to-yellow  you can promote',
    description: 'Generate shareable insights using our unique and customizable widgets. Sometimes it&apos;s  better to show than tell.',
  },
  {
    _key: '3',
    title: '$orange-to-yellowConnect with companies$orange-to-yellow doing open source',
    description: 'Whether you are looking for your next job or pull request, make it easier to be discoverable through collaborations.',
  },
]

const Features: FC<Props> = ({ data }) => {
  return (
    <div id="features">
      <SectionWrapper>
        {featureData?.map((feature, i) => (
          <Feature
            key={feature._key}
            feature={feature as unknown as FeatureProps}
            index={i}
          />
        ))}
      </SectionWrapper>
    </div>
  )
}

export default Features
