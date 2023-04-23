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
  cover : string
}

const featureData = [
  {
    _key: '1',
    title: 'Find $orange-to-yellowhot repositories$orange-to-yellow to contribute to today',
    description: 'Discovering projects is more than stars. Focus on PRs. Discover active projects and get recommendations based on the developers you follow.',
    cover: '/hotRepos.png'
  },
  {
    _key: '2',
    title: '$orange-to-yellowShareable highlights$orange-to-yellow  you can promote',
    description: 'Generate shareable insights using our unique and customizable widgets. Sometimes it&apos;s  better to show than tell.',
    cover: '/prHighlights.svg'
  },
  {
    _key: '3',
    title: '$orange-to-yellowConnect with companies$orange-to-yellow doing open source',
    description: 'Whether you are looking for your next job or pull request, make it easier to be discoverable through collaborations.',
    cover: '/collaborationReq.svg'
  },
]

const CoverStyle = [
  {
    top: 20,
    left: 0,
    scale: 1.293
  },
  {
    top: -180,
    left: 350,
    scale: 1
  },
  {
    top: 30,
    left: 270,
    scale: 1
  }
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
            coverStyle={CoverStyle[i]}
          />
        ))}
      </SectionWrapper>
    </div>
  )
}

export default Features
