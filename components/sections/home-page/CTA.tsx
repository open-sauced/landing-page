import React, { FC } from 'react'
import { HomePage as SanityHomePage } from '../../../sanity.types'

// Components
import SectionWrapper from '../../common/layout/SectionWrapper'
import { Heading, Typography } from '../../common/text'
import { Button } from '../../common'

interface CTAProps {
  data: SanityHomePage['ctaSection']
}

const CTA: FC<CTAProps> = ({ data }) => {
  return (
    <SectionWrapper pb={215} pbs={105} >
      <Heading component="h2" alignSmall="center">
        {data?.heading}
      </Heading>
      <div className="my-10 w-full largeTablet:w-[55%]">
        <Typography variant="subheading" alignSmall="center">
          {data?.description}
        </Typography>
      </div>
      <Button href={data?.ctaLink}>Get Started</Button>
    </SectionWrapper>
  )
}

export default CTA
