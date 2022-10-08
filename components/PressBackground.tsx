import Image from 'next/image'
import React, { FC } from 'react'
import ellipesOverlap from '../public/ellipesOverlap.svg'
import pizzaSlices from '../public/pizzaSlices.svg'

const PressHero: FC = ({children}) => {
  return (
    <div className="h-fit relative bg-gradient-to-r from-gray550 to-gray110">
      <div className='max-w-6xl mx-auto px-4'>
        {children}
      </div>
    </div>
  )
}

export default PressHero