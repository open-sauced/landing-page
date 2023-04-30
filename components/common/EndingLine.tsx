import React from 'react'

const EndingLine = () => {
  return (
    <div className="w-full flex px-6 mb-10">
      <div className="relative flex-1 bg-gradient-to-b border-b-0 border-l-0 border-r-[#F87216] border-t-[#F87216] border h-[200px] w-full to-gray-800">
        <img className="absolute -right-[28px] -top-[28px]"  src="/icons/quote.svg" alt="Endling line" />
      </div>
      <div className="flex-1"></div>
    </div>
  )
}

export default EndingLine