import React, { FC, ReactElement } from 'react'

interface TypographyProps {
  variant?: 'title1' | 'body1' | 'body2' | 'body4'
}

const Typography: FC<TypographyProps> = ({
  variant = 'title1',
  children,
}): ReactElement => {
  const title1Style = 'font-bold text-3xl text-textPrimary largeTablet:text-4xl'
  const body1Style = 'text-lg opacity-70 text-textPrimary largeTablet:text-xl'
  const body2Style = 'text-base opacity-70 text-textPrimary largeTablet:text-lg'
  const body4Style = 'text-sm opacity-70 text-textPrimary'
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
      // className="text-sm opacity-70 text-textPrimary"
    >
      {children}
    </p>
  )
}

export default Typography
