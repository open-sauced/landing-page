import React, { FC } from 'react'

interface FeatureImageProps {
  top: number
  left: number
  scale: number
  src: string
  alt: string
}

const FeatureImage: FC<FeatureImageProps> = (
  {
    top,
    left,
    scale,
    src,
    alt,
  }
) => {
  
  const style = {
    zIndex: 50,
    position: "relative",
    left: `${left}px`,
    top: `${top}px`,
    transform: `scale(${scale})`,
  }

  return (
    <img src={src} alt={alt} />
  )
}

export default FeatureImage