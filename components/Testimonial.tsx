import React, { FC } from 'react'

interface TestimonialProps{
    testimonial:{
        username: string,
        date: string,
        comment: string,
        photo: string
    }
}

const Testimonial:FC<TestimonialProps> = ({ testimonial:{username, date, comment} }) => {
  return (
    <div className=' border-[2px] border-gray200 rounded-xl p-[15px] ' >
        <div>
            <h6 className='text-gray400 text-[14px]' ><span className='font-bold text-twitterBlue '>{username}</span> <span/>@{username}. {date} </h6>
        </div>
        <p className='text-gray400 text-[14px]'>
            {comment}
        </p>


    </div>
  )
}

export default Testimonial