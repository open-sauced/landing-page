import React from 'react'
import Image from 'next/image'
import dripGraphic from '../public/background-drip-mirrored.svg'
import dripGraphic2 from '../public/background-drip-mirrored2.svg'

const BackgroundDrip: React.FC = ({ children }) => {
  return (
    <div className="h-fit tablet:min-h-[800px] pb-20 tablet:pb-0 relative">
      <div className="absolute w-[300vw] left-[138px] tablet:left-[148px] desktop:left-[20vw] overflow-hidden z-[-1]">
        <Image src={dripGraphic2} alt="" />
      </div>

      {children}
    </div>
  )
}

export default BackgroundDrip
