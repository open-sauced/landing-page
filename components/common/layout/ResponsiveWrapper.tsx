import React, { FC, ReactElement, useEffect, useState } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'

interface ResponsiveWrapperProps {
  reverse?: boolean
  mb?: number
}

const ResponsiveWrapper: FC<ResponsiveWrapperProps> = ({
  children,
  reverse = false,
  mb = 250,
}): ReactElement => {
  const isLargeTablet = useMediaQuery()

  return (
    <div
      style={{
        marginBottom: isLargeTablet ? `${mb}px` : '120px',
      }}
      className={`w-full flex items-center ${
        reverse ? 'largeTablet:flex-row-reverse' : 'largeTablet:flex-row'
      } flex-col`}
    >
      {children}
    </div>
  )
}

export default ResponsiveWrapper
