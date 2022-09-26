import Image from 'next/image'
import React, { FC } from 'react'
import github from '../public/social-proof/github.png'

const OpenSaucedLogo:FC = () => {
  return (
    <div className='max-w-[290px]'>
        <div className='flex min-h-[164px] bg-black justify-center items-center'>
            <div className=' w-3/4 mx-auto h-auto'>
                <Image  src={github} alt="github" />
            </div>
        </div>

        <div className='mt-[20px]'>
            <h2 className='text-[20px] tracking-tight mb-[5px] text-gray-700 font-bold'>Simple logo</h2>
            <p className='text-[1rem] tracking-tight text-gray-700'>Please use this logo in cases where the Full Logo Dark won’t work.</p>
        </div>

        <div className='flex gap-x-2 pt-4'>
            <button className='text-white text-[18px] font-semibold bg-gradient-to-r px-4 py-1 rounded-md from-orange-500 to-orange-400'>SVG</button>
            <button className='text-white text-[18px] font-semibold bg-gradient-to-r px-4 py-1 rounded-md from-orange-500 to-orange-400'>PNG</button>
        </div>
    </div>
  )
}

export default OpenSaucedLogo