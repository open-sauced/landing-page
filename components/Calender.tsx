import Image from 'next/image'
import React, { FC } from 'react'
import drip_calendar from '../public/dripGraphic_calendar.svg'
import { SanityCalender } from '../types/schema'


interface CalenderProps{
  calender: SanityCalender
}

const Calender: FC<CalenderProps> = ({calender: {title, subtitle, calenderImage}}) => {
  return (
    <section className=' overflow-hidden relative  ' >
        <div className=' absolute top-[780px] tablet:top-[-600px] scale-[1.16] left-0  ' >
          <Image  src={drip_calendar} alt="" />
        </div>
        <div className='rounded-t-md bg-gradient-to-r  from-lightBlue to-darkBlue px-8 tablet:px-28 py-[50px] tablet:py-[160px] '>
            <div className=' text-center relative text-gray400 ' >
                <h1 className=' text-[38px] font-bold ' >{title}</h1>

                <p className=' text-[18px] mt-[50px] mb-[100px] '> {subtitle} </p>
            </div>
            
            <img className='mx-auto relative ' src={calenderImage as unknown as string} alt="GitHub calender" />
        </div>
    </section>  
  )
}

export default Calender