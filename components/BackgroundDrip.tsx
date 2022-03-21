import React from 'react'
import Image from 'next/image'
import dripGraphic from '../public/background-drip-mirrored.svg'

const BackgroundDrip: React.FC = ({ children }) => {
  return (
    <div className="h-fit tablet:h-[800px] pb-20 tablet:pb-0 relative">
      <div className="absolute w-[300vw] left-[138px] tablet:left-[148px] desktop:left-[20vw] overflow-clip z-[-1]">
        <Image src={dripGraphic} alt="" />
      </div>

      {children}
    </div>
  )
}

export default BackgroundDrip
