import React, { FC, ReactElement } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'

interface SectionWrapperProps {
  children: React.ReactNode
  justify?: 'center' | 'between'
  direction?: 'col' | 'row'
  pt?: number
  pb?: number
  pts?: number
  pbs?: number
  px?: number
}

const SectionWrapper: FC<SectionWrapperProps> = ({
  justify = 'center',
  direction = 'col',
  pt = 0,
  pb = 0,
  pts = 0,
  pbs = 120,
  px = 6, 
  children,
}): ReactElement => {
  const isLargeTablet = useMediaQuery()
  return (
    <div
      style={{
        paddingBottom: isLargeTablet ? `${pb}px` : `${pbs}px`,
        paddingTop: isLargeTablet ? `${pt}px` : `${pts}px`,
      }}
      className={`w-full max-w-[1256px] mx-auto px-${px} h-fit flex justify-${justify} flex-${direction} items-center`}
    >
      {children}
    </div>
  )
}

export default SectionWrapper
