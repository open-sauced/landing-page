import React from 'react'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { SanityUser } from '../../../types/schema'

interface LogosProps {
  data: SanityUser[]
}

const Logos = ({ data }: LogosProps) => {
  const logos = [
    {
      _id: 'qwerzxgithub',
      name: 'GitHub',
      website: 'https://github.com',
      logo: '/logos/github.svg',
    },
    {
      _id: 'qwerzxdigitalOcean',
      name: 'Digital Ocean',
      website: 'https://digitalocean.com/',
      logo: '/logos/digitalOcean.svg',
    },
    {
      _id: 'qwerzxsupabase',
      name: 'Supabase',
      website: 'https://supabase.com',
      logo: '/logos/supabase.svg',
    },
    {
      _id: 'qwerzxquestdb',
      name: 'QuestDB',
      website: 'https://questdb.io',
      logo: '/logos/questDB.svg',
    },
    {
      _id: 'qwerzxtechstars',
      name: 'Medusa',
      website: 'https://techstars.com',
      logo: '/logos/techstars.svg',
    },
    {
      _id: 'qwerzxswim',
      name: 'Swimm',
      website: 'https://swimm.io/',
      logo: '/logos/swim.svg',
    },
  ]

  return (
    <SectionWrapper direction="row" pb={150} pbs={150}>
      <div className="w-full max-w-[900px] grid grid-cols-3 gap-x-10 gap-y-8 justify-center items-center content-center largeTablet:mt-0 largeTablet:grid-cols-6">
        {logos.map((item) => {
          const href = item.website || ''
          const src = item.logo || ''
          return (
            <a
              key={item._id}
              href={href}
              target="_blank"
              rel="noreferrer"
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

export default Logos
