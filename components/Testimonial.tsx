import Image from 'next/image'
import React, { FC } from 'react'
import { SanityTestimonial } from '../types/schema'

interface TestimonialProps{
    testimonial : SanityTestimonial
}

const Testimonial:FC<TestimonialProps> = ({ testimonial: { twitterUsername, twitterName, userImage, date, testimonial, tweetLink } }) => {
  return (

    <div className=' border-[2px] border-gray200 rounded-xl p-[15px] ' >
        <div className=' flex items-center gap-2 '>
            <div className=' shadow-md overflow-hidden rounded-full w-[36px] h-[36px]'>
                <Image className=' rounded-full flex-[1] shadow-md  ' alt={twitterUsername+ "'s photo"} src={userImage as unknown as string} width={36} height={36} />
            </div>
            <h6 className='text-gray400 text-[14px] flex-[3]' ><span className='font-bold text-gray400 '>{twitterName} </span > <a className=' hover:text-gray-800 ' href={tweetLink as unknown as string}> @{twitterUsername} </a><span/></h6>
        </div>

        <p className='text-gray400 text-[14px] pl-[44px]  '>
            {testimonial}
        </p>


    </div>
  )
}

export default Testimonial