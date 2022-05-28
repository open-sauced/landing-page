import React, { FC } from 'react'
import { SanityTestimonial } from '../types/schema'
import Testimonial from './Testimonial'

interface TestimonialsProps{
    testimonial: SanityTestimonial[]
}

const Testimonials: FC<TestimonialsProps> = ({testimonial}) => {
  return (
    <div className=' pt-28 '>
        <h1 className=' font-bold text-[38px] leading-[42px] traking-[-3%] text-center text-gray400 '>The value of <span className='bg-clip-text text-transparent bg-gradient-to-r from-lightOrange to-darkOrange'>open source.</span></h1>

        <div className=' grid mobile:grid-cols-1 tablet:grid-cols-3 gap-[10px] py-20 '>
            {
                testimonial.map( testimonial => (
                    <Testimonial key={testimonial.twitterUsername} testimonial={testimonial as unknown as SanityTestimonial} />
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials