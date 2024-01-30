import React from 'react'
import { Heading, Typography } from '../../common/text'

const Hero = () => {
  return (
    <section className="z-50 py-24 tablet:py-56 border-slate-800 relative flex flex-col gap-y-5 from-transparent via-red-800 to-transparent">
      <Heading alignSmall="center" >
        $yellow-to-orangeChangelog$yellow-to-orange
      </Heading>
      <Typography alignSmall="center" variant="subheading">
        See what’s new with OpenSauced.
      </Typography>
    </section>
  )
}

export default Hero