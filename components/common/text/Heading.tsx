import React, { FC, ReactElement } from 'react'
import DecoratedText from './utils/DecoratedText'

interface HeadingProps {
  component?: 'h1' | 'h2' | 'h3'
  align?: 'center' | 'right' | 'left'
}

const Heading: FC<HeadingProps> = ({
  children,
  component = 'h1',
  align = 'left',
}): ReactElement => {
  const commonStyle = `font-bold text-textPrimary text-${align} tracking-[-0.02em] text-3xl`
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
