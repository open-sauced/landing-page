import React from 'react'
import Image from 'next/image'
import dripGraphic2 from '../public/background-drip-mirrored2.svg'

const BlogBackgroundDrip: React.FC = ({ children }) => {
  return (
    <div className="h-fit tablet:min-h-[800px] pb-20 tablet:pb-0 relative">
      <div className="absolute w-[250vw] left-[180px] tablet:left-[300px] laptop:left-[500px] desktop:left-[45vw] _2k:left-[45vw]  overflow-hidden z-[-1]">
        <Image src={dripGraphic2} alt="graphics" />
      </div>

      {children}
    </div>
  )
}

export default BlogBackgroundDrip;
