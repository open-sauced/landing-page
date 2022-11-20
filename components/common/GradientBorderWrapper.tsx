import React, { FC, ReactElement } from 'react'

interface GradientBorderWrapperProps {
  radius?: string
}

const GradientBorderWrapper: FC<GradientBorderWrapperProps> = ({
  children,
  radius = '6px',
}): ReactElement => {
  return (
    <div
      style={{
        borderRadius: `${radius}`,
      }}
      className={`h-fit w-fit p-[1px] bg-gradient-to-tr from-[#ED5432] via-[#EDA232] to-[#ED5432] drop-shadow-[0_0_4px_#ED5432]`}
    >
      {children}
    </div>
  )
}

export default GradientBorderWrapper
