import React, { FC, ReactElement } from 'react'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Paragraph, Typography } from '../../../common/text'
import MetricCard from './MetricCard'

interface AboutProps {}

const About: FC<AboutProps> = (): ReactElement => {
  return (
    <SectionWrapper pt={205} pts={45} pb={80} pbs={90}>
      <Typography variant='preHeading'>About</Typography>
      <div className="w-full largeTablet:w-2/3 ">
        <Heading align="center">
          Let’s make open source $yogaccessible for everyone$yog
        </Heading>
      </div>
      <div className="w-full largeTablet:w-2/3 pt-4 pb-16 largeTablet:pt-10 largeTablet:pb-20 ">
        <Paragraph align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.
        </Paragraph>
      </div>
      <div className="w-full grid grid-cols-2 gap-y-9 largeTablet:grid-cols-4 largeTablet:gap-y-0 ">
        {Array(4)
          .fill({ title: 'Metric', label: 'label' })
          .map((item, i) => (
            <MetricCard data={item} index={i} />
          ))}
      </div>
    </SectionWrapper>
  )
}

export default About
