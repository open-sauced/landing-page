import React from 'react'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { SanityUser } from '../../../types/schema'

interface LogosProps {
  data: SanityUser[]
}

const Logos = ({ data }: LogosProps) => {
  const logos = [
    {
      _id: 'qwerzxsupabase',
      name: 'Supabase',
      website: 'https://supabase.com',
      logo: '/logos/supabase.svg',
    },
    {
      _id: 'qwerzxdigitalOcean',
      name: 'Digital Ocean',
      website: 'https://digitalocean.com/',
      logo: '/logos/digitalOcean.svg',
    },
    {
      _id: 'qwerzxmedusa',
      name: 'Medusa',
      website: 'https://medusajs.com',
      logo: '/logos/medusa.svg',
    },
    {
      _id: 'qwerzxgithub',
      name: 'GitHub',
      website: 'https://github.com',
      logo: '/logos/github.svg',
    }
  ]

  return (
    <SectionWrapper direction='row' pb={150} pbs={150}>
      <div className="w-full max-w-[900px] mt-[-200px] flex gap-x-14 gap-y-8 flex-wrap justify-center items-center largeTablet:mt-0">
        {data.map((item) => {
          const href = item.website || ''
          const src = item.logo || ''
          return (
            <a
              key={item._id}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="relative h-[18px] largeTablet:h-6"
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
