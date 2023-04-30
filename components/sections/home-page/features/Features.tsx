import React, { FC } from 'react'
import { SanityHomePage } from '../../../../types/schema'
import Feature from './Feature'
import SectionWrapper from '../../../common/layout/SectionWrapper'

const featureData = [
  {
    _key: '1',
    title: 'Find $orange-to-yellowhot repositories$orange-to-yellow to contribute to today',
    description: 'Discovering projects is more than stars. Focus on PRs. Discover active projects and get recommendations based on the developers you follow.',
    icon: '/icons/find_icon.svg',
    image: '/features/hot_repo.svg',
    smallImage: '/hotReposSmall.svg'
  },
  {
    _key: '2',
    title: '$orange-to-yellowShareable highlights$orange-to-yellow  you can promote',
    description: "Generate shareable insights using our unique and customizable widgets. Sometimes it's better to show than tell.",
    icon: '/icons/share_icon.svg',
    image: '/features/pr_highlights.svg',
    smallImage: ''
  },
  {
    _key: '3',
    title: '$orange-to-yellowConnect with companies$orange-to-yellow doing open source',
    description: 'Whether you are looking for your next job or pull request, make it easier to be discoverable through collaborations.',
    icon: '/icons/connect_icon.svg',
    image: '/features/collaboration.svg',
    smallImage: ''
  },
]

interface Props {
  data: SanityHomePage['features']
}

export interface FeatureProps {
  description: string
  heading : string
  image : string
  icon : string
  title : string
}

const Features: FC<Props> = ({ data }) => {
  return (
    <SectionWrapper pbs={0} >
      {featureData?.map((feature, i) => (
        <Feature
          key={feature._key}
          feature={feature as unknown as FeatureProps}
          index={i}
        />
      ))}
    </SectionWrapper>
  )
}

export default Features
