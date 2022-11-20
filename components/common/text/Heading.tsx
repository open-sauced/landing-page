import React, { FC, ReactElement } from 'react'

interface HeadingProps {
  component?: 'h1' | 'h2' | 'h3'
  align?: 'center' | 'right' | 'left'
}

/* <h1 className="font-bold text-6xl laptop:text-5xl leading-none">
            {titleExceptLastTwoWords}
            <br />{' '}
            <span className="bg-gradient-to-r from-brandYellow via-brandRed to-brandRed text-transparent bg-clip-text">
              {lastTwoWordsOfTitle}
            </span>
          </h1> */

const Heading: FC<HeadingProps> = ({
  children,
  component = 'h1',
  align = 'left',
}): ReactElement => {
  const commonStyle = `font-bold text-[#FFF9ED] text-${align} tracking-[-0.02em] text-3xl`
  if (component === 'h2') {
    return (
      <h2
        className={`${commonStyle}
        largeTablet:text-5xl`}
      >
        {children}
      </h2>
    )
  }
  if (component === 'h3') {
    return (
      <h3
        className={`${commonStyle} 
        largeTablet:text-4xl`}
      >
        {children}
      </h3>
    )
  }
  return (
    <h1
      className={`${commonStyle}
      largeTablet:text-6xl largeTablet:tracking-[-0.03em]`}
    >
      {children}
    </h1>
  )
}

export default Heading
