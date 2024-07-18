import React, { FC } from 'react'
import { HomePage as SanityHomePage } from '../../../../sanity.types'

// Components
import Feature from './Feature'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import EndingLine from '../../../common/EndingLine'

const featureData = [
  {
    _key: '1',
    title: 'Find $orange-to-yellowhot repositories$orange-to-yellow to contribute to today',
    description: 'Discovering projects is more than stars. Focus on PRs. Discover active projects and get recommendations based on the developers you follow.',
    icon: '/icons/find_icon.svg',
    image: '/features/hot_repo.svg',
    smallImage: '/features/hot_repo_sm.svg'
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

const className = [
  {
    lg:  "-left-[22px] px-[100px] scale-[1.30] ",
    sm: "scale-[1.3] right-0 " 
  },
  {
    lg:  "largeTablet:-top-[270px] largeTablet:px-5 largeTablet:-right-[90px] largeTablet:!absolute ",
    sm: "" 
  },
  {
    lg:  "largeTablet:-right-[100px] -right-[8px] largeTablet:px-24 ",
    sm: "" 
  },
]

interface Props {
  data: SanityHomePage['features']
}

export interface FeatureProps {
  description: string
  heading : string
  image : string
  smallImage : string
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
          className={className[i]}
        />
        ))}

        <EndingLine/>
    </SectionWrapper>
  )
}

export default Features
