import Image from 'next/image'
import React, { FC } from 'react'

const PressHero: FC = ({children}) => {
  return (
    <div className="h-fit relative bg-gray105">
      <div className='max-w-7xl mx-auto'>
        {children}
      </div>
    </div>
  )
}

export default PressHero