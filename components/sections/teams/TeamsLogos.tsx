import React from 'react'
import { User as SanityUser } from '../../../sanity.types'

import SectionWrapper from '../../common/layout/SectionWrapper'

interface LogosProps {
  data: SanityUser[]
}

const TeamLogos = ({ data }: LogosProps) => {
  return (
    <SectionWrapper direction="row" pb={150} pbs={150}>
      <div className="w-full max-w-[900px] grid grid-cols-3 gap-x-10 gap-y-8 justify-center items-center content-center largeTablet:mt-0 largeTablet:grid-cols-6">
        {data?.map((item) => {
          const href = item.website || ''
          const src = item.logo || ''
          return (
            <a
              key={item.name}
              href={href}
              target="_blank"
              
              className="relative h-[18px] largeTablet:h-6 mx-auto"
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

export default TeamLogos
