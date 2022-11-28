import React, { FC, ReactElement } from 'react'
import DecoratedText from './utils/DecoratedText'

interface HeadingProps {
  component?: 'h1' | 'h2' | 'h3'
  alignSmall?: 'center' | 'right' | 'left'
  alignLarge?: 'center' | 'right' | 'left'
}

const Heading: FC<HeadingProps> = ({
  children,
  component = 'h1',
  alignLarge = 'center',
  alignSmall = 'left',
}): ReactElement => {
  const commonStyle = `w-full font-bold text-textPrimary text-${alignSmall} tracking-[-0.02em] text-3xl largeTablet:text-${alignLarge}`
  if (component === 'h2') {
    return (
      <h2
        className={`${commonStyle}
        largeTablet:text-5xl`}
      >
        <DecoratedText content={children as string} />
      </h2>
    )
  }
  if (component === 'h3') {
    return (
      <h3
        className={`${commonStyle} 
        largeTablet:text-4xl`}
      >
        <DecoratedText content={children as string} />
      </h3>
    )
  }
  return (
    <h1
      className={`${commonStyle}
      largeTablet:text-6xl largeTablet:tracking-[-0.03em]`}
    >
      <DecoratedText content={children as string} />
    </h1>
  )
}

export default Heading
