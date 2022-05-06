import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { SanityFeature } from '../types/schema'


interface Props{
  feature: SanityFeature,
  index: number
}

const Feature:FC<Props> = ({feature: {title, subtitle, previewImage, slug }, index}) => {
  return (
    <div className=' px-2 tablet:px-20 ' >
      <div className=' h-[1px]  bg-white ' ></div>
      <div className={` flex flex-col px-8 gap-20 py-24 items-center ${index % 2 == 1 ? 'tablet:flex-row-reverse' : 'tablet:flex-row'  } `} >
        <div className=' flex-[1] '>
          <img src={previewImage as unknown as string}/>
        </div>
        <div className=' text-white flex-[2] '>
          <h1 className=' font-bold text-[36px]'>{title}</h1>

          <p className='text-[18px] py-[45px] '>
            {subtitle}
          </p>
          
          <div className='font-bold text-[18px]'>
            <Link href={"/"+slug?.current as unknown as string}>Learn more &gt; </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature