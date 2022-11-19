import React, { FC, ReactElement } from 'react'

interface SubheadingProps {
  align?: 'center' | 'right' | 'left'
}

const Subheading: FC<SubheadingProps> = ({
  children,
  align = 'left',
}): ReactElement => {
  return (
    <p
      className={`font-bold text-xs text-[#FFF9ED] text-${align} tracking-[0.2em] opacity-70 uppercase mb-4`}
    >
      {children}
    </p>
  )
}

export default Subheading
