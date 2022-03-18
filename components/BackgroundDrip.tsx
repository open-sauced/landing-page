import React from 'react'
import Image from 'next/image'
import dripGraphic from '../public/background-drip.svg'

const BackgroundDrip: React.FC = ({ children }) => {
  return (
    <div className="h-[800px]">
      <div className="absolute right-0 overflow-clip z-[-1]">
        <Image src={dripGraphic} alt="" />
      </div>

      {children}
    </div>
  )
}

export default BackgroundDrip
