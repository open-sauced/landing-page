import React, { FC, ReactElement } from 'react'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { PricingPage as SanityPricingPage } from '../../../../sanity.types'
import { getPartialString, getPartialStringFromEnd } from '../../../../utils/stringUtils'

// Components
import { Heading, Typography } from '../../../common/text'
import FeatureCard from './FeatureCard'

interface FeatureProps {
  premiumFeatures: SanityPricingPage['premiumFeatures'][]
  premiumIntro: SanityPricingPage['premiumFeatureIntro']
}

const Features: FC<FeatureProps> = ({
  premiumFeatures,
  premiumIntro,
}): ReactElement => {
  return (
    <SectionWrapper pb={288}>
      <Typography variant="preHeading">Features</Typography>
      <Heading>
        {`$red-to-orange${getPartialString(premiumIntro?.heading as unknown as string, 0.3)}$red-to-orange ${getPartialStringFromEnd(premiumIntro?.heading as unknown as string, 0.7)}`}
      </Heading>
      <div className="pt-4 pb-10  largeTablet:w-2/3 largeTablet:pt-10 largeTablet:pb-24 ">
        <Typography variant="subheading">
          {premiumIntro?.subheading}
        </Typography>
      </div>
      <div className="w-full grid grid-cols-2  gap-y-16 gap-x-9 largeTablet:grid-cols-3 largeTablet:gap-y-[88px]">
        {premiumFeatures.map((item, i) => (
          <FeatureCard data={item as unknown as any} key={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Features
