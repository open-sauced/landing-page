import React, { FC, ReactElement } from 'react'
import { SanityAboutPage } from '../../../../types/schema'
import { getPartialString, getPartialStringFromEnd } from '../../../../utils/stringUtils'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Typography } from '../../../common/text'
import MetricCard from './MetricCard'

interface AboutProps {
  intro: SanityAboutPage['introduction']
}

const About: FC<AboutProps> = ({ intro }): ReactElement => {
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
        {data
          .map((item, i) => (
            <MetricCard key={i} data={item} index={i} />
          ))}
      </div>
    </SectionWrapper>
  )
}

export default About

const data = [
  {label: "Countries represented by team", title: "4"},
  {label: "Projects indexed", title: "120k"},
  {label: "Community members", title: "800+"},
  {label: "Pizza slices consumed YTD", title: "320"},
]