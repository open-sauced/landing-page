import React, { FC, ReactElement } from 'react'

interface HeadingProps {
  component?: 'h1' | 'h2'
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
  const commonStyle = `font-bold text-[#FFF9ED] text-${align} tracking-[-0.02em]`
  if (component === 'h2') {
    return (
      <h2
        className={`${commonStyle} text-2xl
        laptop:text-5xl`}
      >
        {children}
      </h2>
    )
  }
  return (
    <h1
      className={`${commonStyle} text-3xl  
      laptop:text-6xl laptop:tracking-[-0.03em]`}
    >
      {children}
    </h1>
  )
}

export default Heading
