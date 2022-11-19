import React, { FC, ReactElement } from 'react'

interface SectionWrapperProps {
  justify?: 'center' | 'between'
  direction?: 'col' | 'row'
}

const SectionWrapper: FC<SectionWrapperProps> = ({
  justify = 'center',
  direction= 'row',
  children,
}): ReactElement => {
  return (
    <div
      className={`w-full max-w-[1256px] mx-auto px-6 flex justify-${justify} flex-${direction} items-center`}
    >
      {children}
    </div>
  )
}

export default SectionWrapper
