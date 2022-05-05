import Image from 'next/image'
import React, { FC } from 'react'

interface TestimonialProps{
    testimonial:{
        username: string,
        date: string,
        comment: string,
        photo: string
    }
}

const Testimonial:FC<TestimonialProps> = ({ testimonial:{username, date, comment, photo} }) => {
  return (
    <div className=' border-[2px] border-gray200 rounded-xl p-[15px] ' >
        <div className=' flex items-center gap-2 '>
            <div className=' shadow-md overflow-hidden rounded-full w-[36px] h-[36px]'>
                <Image className=' rounded-full flex-[1] shadow-md  ' src={photo} width={36} height={36} />
            </div>
            <h6 className='text-gray400 text-[14px] flex-[3]' ><span className='font-bold text-twitterBlue '>{username}</span> <span/>@{username}. {date} </h6>
        </div>

        <p className='text-gray400 text-[14px] pl-[44px]  '>
            {comment}
        </p>


    </div>
  )
}

export default Testimonial