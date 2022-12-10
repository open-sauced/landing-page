import React, { FC, ReactElement } from 'react'
import { Typography } from '../../../common/text'
import DecoratedText from '../../../common/text/utils/DecoratedText'

interface MetricCardProps {
  data: {
    title: string
    label: string
  }
  index: number
}

const MetricCard: FC<MetricCardProps> = ({
  data: { title, label },
  index,
}): ReactElement => {
  const content = `$orange-to-red${title}$orange-to-red`
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <p className="font-bold text-2xl largeTablet:text-3xl">
        <DecoratedText content={content} />
      </p>
      <div className="pt-4">
        <Typography variant="preHeading">{label}</Typography>
      </div>
    </div>
  )
}

export default MetricCard
