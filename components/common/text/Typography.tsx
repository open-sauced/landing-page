import React, { FC, ReactElement } from 'react'

interface TypographyProps {
  variant?: 'preHeading' | 'title1' | 'body1' | 'body2' | 'body4'
  alignSmall?: 'center' | 'right' | 'left'
  alignLarge?: 'center' | 'right' | 'left'
}

const Typography: FC<TypographyProps> = ({
  variant = 'title1',
  children,
  alignLarge = 'center',
  alignSmall = 'left',
}): ReactElement => {
  const commonStyle = `w-full text-${alignSmall} largeTablet:text-${alignLarge}`
  const preHeadingStyle = `font-bold text-xs text-textPrimary tracking-[0.2em] opacity-70 uppercase mb-4`
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
      : variant === 'preHeading'
      ? preHeadingStyle
      : ''
  return (
    <p
      className={`${commonStyle} ${appliedStyle}`}
      // className="text-sm opacity-70 text-textPrimary"
    >
      {children}
    </p>
  )
}

export default Typography
