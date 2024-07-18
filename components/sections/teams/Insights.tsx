import React, { FC, ReactElement } from 'react'
import { HomePage as SanityHomePage } from '../../../sanity.types'

// Components
import { Button } from '../../common'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { Heading, Typography } from '../../common/text'

interface InsightsProps {
  data: SanityHomePage['secondCtaSection']
}

const Insights: FC<InsightsProps> = ({ data }): ReactElement => {
  return (
    <SectionWrapper pb={285}>
      <Heading component="h2" alignSmall="center">
        {data?.heading}
      </Heading>
      <div className="my-4 w-full largeTablet:my-10 largeTablet:w-2/3">
        <Typography variant="subheading" alignSmall="center">
          {data?.description}
        </Typography>
      </div>

      <Button href={data?.ctaLink}>{data?.ctaLabel}</Button>
    </SectionWrapper>
  )
}

export default Insights
