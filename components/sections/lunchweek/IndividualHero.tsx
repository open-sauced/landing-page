import React from 'react'
import { Heading, Typography } from '../../common/text'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'
import SocialShare from '../../common/SocialShare'
import moment from 'moment'

const Hero = ({
  title,
  topics,
  date,
  url,
}: {
  title: string
  topics: string[]
  date: string
  url: string
}) => {
  return (
    <section className="items-center py-16 max-w-3xl mx-auto tablet:py-24 border-slate-800 relative flex flex-col gap-y-8 from-transparent via-red-800 to-transparent">
      <Typography alignSmall="center" variant="subheading">
        {moment(date).format('DD MMM YYYY')}
      </Typography>
      <Heading alignSmall="center">{title}</Heading>
      <SocialShare url={url} size="lg" gap={6} hackerNews />
      <div className="flex gap-3 mx-auto">
        {topics &&
          topics.map((category, index) => (
            <GradientBorderWrapper key={index} style={{ borderRadius: '16px' }}>
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
