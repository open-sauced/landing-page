import Image from 'next/image'
import React, { FC } from 'react'
import ellipesOverlap from '../public/ellipesOverlap.svg'
import pizzaSlices from '../public/pizzaSlices.svg'

const PressHero: FC = ({children}) => {
  return (
    <div className="h-fit relative bg-gradient-to-r from-red-500 to-yellow-400">
      <div className="absolute">
        <Image src={ellipesOverlap} alt="Ellipes Overlap" />
      </div>
      <div className="relative bg-center bg-pizza-slices w-full">
        <div className='max-w-6xl mx-auto px-4'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PressHero