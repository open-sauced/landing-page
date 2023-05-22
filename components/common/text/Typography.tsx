import React, { FC, ReactElement } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'

interface TypographyProps {
  children: React.ReactNode
  variant?:
    | 'preHeading'
    | 'subheading'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
  alignSmall?: 'center' | 'right' | 'left'
  alignLarge?: 'center' | 'right' | 'left'
}

const Typography: FC<TypographyProps> = ({
  variant = 'title1',
  children,
  alignLarge = 'center',
  alignSmall = 'left',
}): ReactElement => {
  const isLargeTablet = useMediaQuery()
  const commonStyle = `w-full text-textPrimary`

  const preHeadingStyle = `font-bold text-xs tracking-[0.2em] opacity-70 uppercase mb-4`
  const subheadingStyle =
    'font-normal opacity-70 text-base largeTablet:text-2xl'
  const title1Style = 'font-bold text-3xl largeTablet:text-4xl'
  const title2Style =
    'font-bold tracking-[-0.03em] text-lg largeTablet:text-xl '
  const title3Style = 'font-bold text-2xl largeTablet:text-4xl'
  const body1Style = 'text-lg opacity-70 largeTablet:text-xl'
  const body2Style = 'text-base opacity-70 largeTablet:text-lg'
  const body3Style = 'text-sm opacity-70 largeTablet:text-base'
  const body4Style = 'text-sm opacity-70'
  const appliedStyle =
    variant === 'title1'
      ? title1Style
      : variant === 'title2'
      ? title2Style
      : variant === 'title3'
      ? title3Style
      : variant === 'body1'
      ? body1Style
      : variant === 'body2'
      ? body2Style
      : variant === 'body3'
      ? body3Style
      : variant === 'body4'
      ? body4Style
      : variant === 'preHeading'
      ? preHeadingStyle
      : variant === 'subheading'
      ? subheadingStyle
      : ''
  return (
    <p
      style={{
        textAlign: isLargeTablet ? alignLarge : alignSmall,
      }}
      className={`${commonStyle} ${appliedStyle}`}
    >
      {children}
    </p>
  )
}

export default Typography
