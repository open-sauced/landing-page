import React from 'react'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const EndingLine = () => {
  const { ref, inView } = useInView()

  return (
    <div className="w-full flex px-1 largeTablet:px-6 mb-10">
      <div ref={ref} className="relative flex-1 bg-gradient-to-b border-b-0 border-l-0 border-r-[#F87216] border-t-[#F87216] border h-[200px] w-full to-gray-800">
        <motion.img
          initial={{ opacity: 0, scale: .2 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
          className="absolute -right-[28px] -top-[28px]"
          src="/icons/quote.svg"
          alt="Ending line"
        />
      </div>
      <div className="flex-1"></div>
    </div>
  )
}

export default EndingLine