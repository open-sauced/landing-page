import React, { FC, ReactElement } from 'react'
import { Button } from '../../common'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { Heading, Paragraph } from '../../common/text'

interface InsightsProps {}

const Insights: FC<InsightsProps> = (): ReactElement => {
  return (
    <SectionWrapper pb={285}>
      <Heading component="h2" alignSmall="center">
        Get insights from $oStars to PRs$o
      </Heading>
      <div className="my-4 w-full largeTablet:my-10 largeTablet:w-2/3">
        <Paragraph align="center">
          Most projects give data when developers start your project. Find out
          what happens after that star with OpenSauced.
        </Paragraph>
      </div>

      <Button href="https://insights.opensauced.pizza">Get Started</Button>
    </SectionWrapper>
  )
}

export default Insights
