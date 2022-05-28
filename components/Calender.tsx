import Image from 'next/image'
import React, { FC } from 'react'
import drip_calendar from '../public/dripGraphic_calendar_vector.svg'
import { SanityCalender } from '../types/schema'
import {PortableText} from '@portabletext/react'


interface CalenderProps{
  calender: SanityCalender
}

const Calender: FC<CalenderProps> = ({calender: {title, subtitle, calenderImage, titleRich}}) => {
  return (
    <section className=' mx-auto ' >
      <div className=' z-10 relative pt-[100px] max-w-6xl px-8 tablet:px-40  text-center mx-auto text-gray400 ' >
          <h1 className=' text-[38px] leading-[42px] tracking-[-3%] font-bold boldToGrad ' >
            <PortableText value={titleRich as unknown as [] | []}/>
          </h1>

          <p className=' text-[18px] leading-[26px] tracking-[-2%] mt-[50px] mb-[20px] '> {subtitle} </p>
      </div>
      <div className=' bg-gradient-to-r relative  from-darkOrange to-lightOrange px-8 tablet:px-28 py-[50px] tablet:pb-[350px] '>
            <div className=' absolute top-0 scale-[1.16]  left-0  ' >
                <Image   src={drip_calendar} loading="eager" alt="" />
            </div> 

          <img className='mx-auto relative ' src={calenderImage as unknown as string}  alt="GitHub calender" />
      </div>
    </section>  
  )
}

export default Calender