import Image from 'next/image'
import React, { FC } from 'react'
import ellipesOverlap from '../public/ellipesOverlap.svg'
import pizzaSlices from '../public/pizzaSlices.svg'

const PressHero: FC = ({children}) => {
  return (
    <div className="h-fit relative bg-gray110">
      <div className='max-w-7xl mx-auto'>
        {children}
      </div>
    </div>
  )
}

export default PressHero