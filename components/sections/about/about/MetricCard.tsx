import React, { FC, ReactElement } from 'react'
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
  const content = `$org${title} ${index + 1}$org`
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <p>
        <DecoratedText content={content} />
      </p>
      <p className="pt-4">{label}</p>
    </div>
  )
}

export default MetricCard
