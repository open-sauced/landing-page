import React from 'react'
import Image from 'next/image'
import dripGraphic2 from '../public/background-drip-mirrored2.svg'

const BlogBackgroundDrip: React.FC = ({ children }) => {
  return (
    <div className="h-fit tablet:min-h-[800px] pb-20 tablet:pb-0 relative">
      <div className="absolute w-[180vw] left-[138px] tablet:left-[148px] desktop:left-[40vw] _2k:left-[17vw]  overflow-hidden z-[-1]">
        <Image src={dripGraphic2} alt="graphics" />
      </div>

      {children}
    </div>
  )
}

export default BlogBackgroundDrip;
