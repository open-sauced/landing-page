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
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
  leading?: '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | 'none'
    | 'tight'
    | 'snug'
    | 'normal'
    | 'relaxed'
    | 'loose'
}

const Typography: FC<TypographyProps> = ({
  variant = 'title1',
  children,
  alignLarge = 'center',
  alignSmall = 'left',
  tracking = 'normal',
  leading= 'normal',
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
  const leadingStyle =
    leading === '3'
      ? 'leading-3'
      : leading === '4'
      ? 'leading-4'
      : leading === '5'
      ? 'leading-5'
      : leading === '6'
      ? 'leading-6'
      : leading === '7'
      ? 'leading-7'
      : leading === '8'
      ? 'leading-8'
      : leading === '9'
      ? 'leading-9'
      : leading === '10'
      ? 'leading-10'
      : leading === 'none'
      ? 'leading-none'
      : leading === 'tight'
      ? 'leading-tight'
      : leading === 'snug'
      ? 'leading-snug'
      : leading === 'normal'
      ? 'leading-normal'
      : leading === 'relaxed'
      ? 'leading-relaxed'
      : leading === 'loose'
      ? 'leading-loose'
      : ''

  const trackingStyle = 
    tracking === 'tighter'
      ? 'tracking-tighter'
      : tracking === 'tight'
      ? 'tracking-tight'
      : tracking === 'normal'
      ? 'tracking-normal'
      : tracking === 'wide'
      ? 'tracking-wide'
      : tracking === 'wider'
      ? 'tracking-wider'
      : tracking === 'widest'
      ? 'tracking-widest'
      : ''
  return (
    <p
      style={{
        textAlign: isLargeTablet ? alignLarge : alignSmall,
      }}
      className={`${commonStyle} ${appliedStyle} ${leadingStyle} ${trackingStyle}`}
    >
      {children}
    </p>
  )
}

export default Typography
