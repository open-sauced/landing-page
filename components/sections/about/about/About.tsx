import React, { FC, ReactElement } from 'react'
import { AboutPage as SanityAboutPage } from '../../../../sanity.types'
import { getPartialString, getPartialStringFromEnd } from '../../../../utils/stringUtils'

// Components
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Typography } from '../../../common/text'
import MetricCard from './MetricCard'

interface AboutProps {
  intro: SanityAboutPage['introduction']
  numeralHighlight: SanityAboutPage['numeralHighlight'][]
}

const About: FC<AboutProps> = ({ intro, numeralHighlight }): ReactElement => {
  return (
    <SectionWrapper pt={205} pts={60} pb={80} pbs={90}>
      <Typography variant="preHeading">About</Typography>
      <div className="w-full largeTablet:w-2/3 ">
        <Heading>
          {` $yellow-to-orange ${getPartialString(intro?.heading as unknown as string, 0.60,)} $yellow-to-orange ${getPartialStringFromEnd(intro?.heading as unknown as string, 0.40)}`}
        </Heading>
      </div>
      <div className="w-full largeTablet:w-2/3 pt-4 pb-16 largeTablet:pt-10 largeTablet:pb-20 ">
        <Typography variant="subheading">
        {intro?.subheading}
        </Typography>
      </div>
      <div className="w-full grid grid-cols-2 gap-y-9 largeTablet:grid-cols-4 largeTablet:gap-y-0 ">
        {numeralHighlight &&
          numeralHighlight.map((item, i) => (
            <MetricCard key={i} data={item} index={i} />
          ))}
      </div>
    </SectionWrapper>
  )
}

export default About