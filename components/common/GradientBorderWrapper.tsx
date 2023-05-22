import React, { FC, ReactElement } from 'react'

interface GradientBorderWrapperProps {
  style?: React.CSSProperties
  children: React.ReactNode
}

const GradientBorderWrapper: FC<GradientBorderWrapperProps> = ({
  children,
  style,
}): ReactElement => {
  return (
    <div
      style={{
        borderRadius: '6px',
        ...style,
      }}
      className={`h-fit w-fit p-[1px] bg-gradient-to-tr from-[#ED5432] via-[#EDA232] to-[#ED5432] drop-shadow-[0_0_4px_#ED5432]`}
    >
      {children}
    </div>
  )
}

export default GradientBorderWrapper
