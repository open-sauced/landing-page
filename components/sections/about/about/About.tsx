import React, { FC, ReactElement } from 'react'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Typography } from '../../../common/text'
import MetricCard from './MetricCard'

const About: FC = (): ReactElement => {
  return (
    <SectionWrapper pt={205} pts={60} pb={80} pbs={90}>
      <Typography variant="preHeading">About</Typography>
      <div className="w-full largeTablet:w-2/3 ">
        <Heading>
          Discover $yellow-to-orangethe best engineers$yellow-to-orange through open-source
        </Heading>
      </div>
      <div className="w-full largeTablet:w-2/3 pt-4 pb-16 largeTablet:pt-10 largeTablet:pb-20 ">
        <Typography variant="subheading">
        During the most compeitive hiring season in history, we are building a platform to help engineers get discovered through their open source contributions.
        </Typography>
      </div>
      <div className="w-full grid grid-cols-2 gap-y-9 largeTablet:grid-cols-4 largeTablet:gap-y-0 ">
        {Metrics
          .map((item, i) => (
            <MetricCard key={i} data={item} index={i} />
          ))}
      </div>
    </SectionWrapper>
  )
}

export default About

const Metrics = [
  {label: "Projects with 5+ Contributors", title: "230k"},
  {label: "Developers on GitHub", title: "94 million"},
  {label: "Available Contributors on OpenSauced", title: "800"},
  {label: "Projects with more than 100 Stars", title: "2.3k"},
]