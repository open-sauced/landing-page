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
        <div className={` flex px-8 gap-20 py-24 items-center  ${index % 2 == 1 ? 'tablet:flex-row-reverse' : 'tablet:flex-row'  } `} >
          <div className=' hidden tablet:block flex-[1] '>
            <img src={previewImage as unknown as string}/>
            <img className='mt-[15px]'  src="/shadow.svg" alt="" />
          </div>

          <div className=' text-white flex-[2] '>
            <div className='flex items-center gap-4 '>
              <img className='w-auto h-[50px] tablet:hidden ' src={previewImage as unknown as string}/>
              <h1 className=' font-bold text-[28px] leading-[30px] tablet:leading-[42px] tracking-[-3%] tablet:text-[36px]'>{title}</h1>
            </div>

            <p className=' text-[18px] leading-[26px] tracking-[-2%] tablet:text-[18px] py-[45px] '>
              {subtitle}
            </p>
            
            <div className='font-bold text-[16px] tracking-[-4%] tablet:text-[18px] self-center '>
              <Link href={"/feature/"+slug?.current as unknown as string}>Learn more &gt; </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Feature