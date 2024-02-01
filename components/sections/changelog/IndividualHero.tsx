import React from 'react'
import { Heading, Typography } from '../../common/text'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'

const Hero = ({ title, topics, date } : { title: string, topics: string[], date: string}) => {
  return (
    <section className="z-50 py-16 max-w-3xl mx-auto tablet:py-24 border-slate-800 relative flex flex-col gap-y-8 from-transparent via-red-800 to-transparent">
      <Typography alignSmall='center'>{ date }</Typography>
      <Heading alignSmall="center">
        { title }
      </Heading>
      <div className="flex gap-3 mx-auto">
        {topics && topics.map((category, index) => (
          <GradientBorderWrapper key={index} style={{borderRadius: "16px"}}>
            <div className="bg-darkBG rounded-2xl text-sm px-2 py-1">
              {category}
            </div>
          </GradientBorderWrapper>
        ))}
      </div>
    </section>
  )
}

export default Hero
