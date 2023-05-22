import React from 'react'

type Props = {
  children: React.ReactNode
}

const ContainerWithLine: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="relative w-[1.5px] mx-1 largeTablet:mx-6">
        <div
          className="absolute inset-0 bg-[#F87216] blur-sm ">
        </div>
        <div
          className="bg-[#F87216] h-full relative">  
        </div>
      </div>

      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

export default ContainerWithLine