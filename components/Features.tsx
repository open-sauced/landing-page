import React, { FC } from 'react'
import { SanityFeature } from '../types/schema'
import Feature from './Feature'

interface Props{
  features: SanityFeature[]
}

const Features: FC<Props> = ({features}) => {

  return (
    <div>
        {
          features.map((feature, i) => (
            <Feature key={feature.slug?.current} feature={feature as SanityFeature} index={i} />
          ))
        }
        
    </div>
  )
}

export default Features