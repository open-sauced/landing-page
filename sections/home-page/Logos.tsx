import React from 'react'
import { SanityUser } from '../../types/schema'

interface LogosProps {
  users: SanityUser[]
}

const Logos = ({ users }: LogosProps) => {
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
    },
  ]

  return (
    <section className="py-28 px-4">
      <div className="w-full flex gap-x-14 gap-y-8 flex-wrap justify-center items-center">
        {logos.map((user) => (
          <a
            key={user._id}
            href={user.website}
            target="_blank"
            rel="noreferrer"
            className="h-6 w-auto"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full"
              src={`${user.logo as unknown as string}?auto=format&h=64`}
              alt={user.name}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  )
}

export default Logos
