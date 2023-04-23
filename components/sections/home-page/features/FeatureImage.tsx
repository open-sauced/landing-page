import React, { FC } from 'react'

interface FeatureImageProps {
  src: string
  alt: string
  className?: string
}

const FeatureImage: FC<FeatureImageProps> = (
  {
    src,
    alt,
    className = ""
  }
) => {
  return (
    <img className={`${className} z-50 relative`} src={src} alt={alt} />
  )
}

export default FeatureImage