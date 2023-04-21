import React from 'react'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { SanityUser } from '../../../types/schema'
import { Typography } from '../../common/text'

interface LogosProps {
  data: SanityUser[]
}

const Logos = ({ data }: LogosProps) => {
  return (
    <SectionWrapper items='start' direction="col" pb={150} pbs={150}>
      <div className="mt-20 mb-4 pl-14 largeTablet:my-0 mx-auto largeTablet:mx-0">
        <Typography variant="preHeading" alignLarge="left">
          TRUSTED BY 
        </Typography>
      </div>
      <div className="w-full pl-14 max-w-[900px] grid grid-cols-3 gap-x-6 largeTablet:gap-x-16 gap-y-8 largeTablet:mt-4 largeTablet:grid-cols-6">
        {data?.map((item) => {
          const href = item.website || ''
          const src = item.logo || ''
          return (
            <a
              key={item.name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="relative h-[18px] largeTablet:h-7 mx-auto"
            >
              <img
                className="h-full"
                src={src as string}
                alt={item.name}
                loading="lazy"
              />
            </a>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default Logos
