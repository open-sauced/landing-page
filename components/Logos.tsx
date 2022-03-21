import React from 'react'
import { SanityUser } from '../types/schema'

interface LogosProps {
  users: SanityUser[]
}

const Logos = ({ users }: LogosProps) => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 tablet:grid-cols-4 gap-x-8 tablet:gap-x-28 gap-y-14 tablet:gap-y-11 pb-32 items-center justify-items-center grid-rows-[38px]">
      {users.map((user) => (
        <a
          key={user._id}
          href={user.website}
          target="_blank"
          rel="noreferrer"
          className="w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full"
            src={user.logo as unknown as string}
            alt={user.name}
          />
        </a>
      ))}
    </section>
  )
}

export default Logos
