import React, { FC } from 'react'
import { HomePage as SanityHomePage } from '../../../../sanity.types'

// Components
import Feature from './Feature'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import EndingLine from '../../../common/EndingLine'

const featureData = [
  {
    _key: '1',
    title: '$orange-to-yellowGrow and celebrate$orange-to-yellow your open source community',
    description: 'Illuminate your project’s growth with Highlights. Seek collaboration, as you champion and encourage contributions. Dive in and together, let’s grow your community!',
    icon: '/icons/find_icon.svg',
    image: '/maintainers/features/pr_highlights.png',
    smallImage: ''
  },
  {
    _key: '2',
    title: 'Connect with $orange-to-yellowcontributors$orange-to-yellow like never before',
    description: "Get to truly know your contributors and build trust. With streamlined collaboration, not only achieve milestones but also celebrate successes together. Amplify your open-source journey.",
    icon: '/icons/share_icon.svg',
    image: '/features/collaboration.svg',
    smallImage: ''
  },
  {
    _key: '3',
    title: 'Build $orange-to-yellowstronger teams',
    description: 'Unveil seamless performance management with our insights page. Rally teammates, enhance collaborative decision-making, and keep everyone on the same page- literally. Streamline unity in every choice.',
    icon: '/icons/connect_icon.svg',
    image: '/maintainers/features/repo_list.png',
    smallImage: ''
  }
]

const className = [
  {
    // lg:  "-left-[22px] px-[100px] scale-[1.30] ",
    lg:  "_1594:-right-[280px]  _1764:-right-[380px] _1594:-top-36",
    sm: "" 
  },
  {
    lg:  "largeTablet:-right-[100px] -right-[8px] largeTablet:px-24 ",
    sm: "" 
  },
  {
    lg:"pl-8 largeTablet:pl-0 largeTablet:-left-[50px]",
    sm: "" 
  }
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
