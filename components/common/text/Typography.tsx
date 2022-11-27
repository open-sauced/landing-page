import React, { FC, ReactElement } from 'react'

interface TypographyProps {
  variant?: 'title1' | 'body1' | 'body2' | 'body4'
}

const Typography: FC<TypographyProps> = ({
  variant = 'title1',
  children,
}): ReactElement => {
  const title1Style = 'font-bold text-3xl text-[#FFF9ED] largeTablet:text-4xl'
  const body1Style = 'text-lg opacity-70 text-[#FFF9ED] largeTablet:text-xl'
  const body2Style = 'text-base opacity-70 text-[#FFF9ED] largeTablet:text-lg'
  const body4Style = 'text-base opacity-70 text-[#FFF9ED] largeTablet:text-lg'
  const appliedStyle =
    variant === 'title1'
      ? title1Style
      : variant === 'body1'
      ? body1Style
      : variant === 'body2'
      ? body2Style
      : variant === 'body4'
      ? body4Style
      : ''
  return (
    <p
      className={appliedStyle}
      // className="text-sm opacity-70 text-[#FFF9ED]"
    >
      {children}
    </p>
  )
}

export default Typography
