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
    cover: '/hotRepos.svg'
  },
  {
    _key: '2',
    title: '$orange-to-yellowShareable highlights$orange-to-yellow  you can promote',
    description: "Generate shareable insights using our unique and customizable widgets. Sometimes it's better to show than tell.",
    cover: '/prHighlights.svg'
  },
  {
    _key: '3',
    title: '$orange-to-yellowConnect with companies$orange-to-yellow doing open source',
    description: 'Whether you are looking for your next job or pull request, make it easier to be discoverable through collaborations.',
    cover: '/collaborationReq.svg'
  },
]

const classNames = [
  "top-2 largeTablet:top-[120px] largeTablet:scale-[1.2]",
  "top-2 left-0 largeTablet:top-[-180px] largeTablet:left-[21rem]",
  "top-2 left-0 largeTablet:top-[50px] largeTablet:left-[13rem]",
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
            className={classNames[i]}
          />
        ))}
      </SectionWrapper>
    </div>
  )
}

export default Features
