import React, { FC, useState } from 'react'
import { SanityHomePage, SanityTestimonial } from '../../../../types/schema'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Typography } from '../../../common/text'
import Testimonial from './Testimonial'
import 'react-slideshow-image/dist/styles.css'
import { Slide, SlideshowRef } from 'react-slideshow-image'

interface TestimonialsProps {
  data: SanityHomePage['testimonialsSection']
}

const Testimonials: FC<TestimonialsProps> = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const slideRef = React.createRef<SlideshowRef>()
  const testimonials = data?.testimonials as unknown as SanityTestimonial[]

  const handleSlideChange = (index: number) => {
    setSlideIndex(index)
  }

  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 200,
    arrows: false,
    infinite: true,
    easing: 'ease',
    indicators: (i?: number) => {
      const backgroundStyle = i === slideIndex ? 'bg-[#F87216]' : 'bg-slate-700'
      return (
        <div
          className={`mr-3 h-3 w-3 rounded-[50%] mt-4 cursor-pointer ${backgroundStyle}`}
        ></div>
      )
    },
  }
  return (
    <SectionWrapper pb={215}>
      <div className="flex w-full mb-14">
        <div className="relative flex-1 border-t-[1.5px] border-r-[1.5px] h-40 border-orange-500">
          <img className="absolute top-[-28px] right-[-28px] " src="/quote-icon.svg" alt="Quote" />
        </div>
        <div className=" flex-1">
        </div>
      </div>
      
      <Typography variant="preHeading" alignSmall="center">
        {data?.title || ''}
      </Typography>
      <Heading component="h3" alignSmall="center">
        {data?.heading || ''}
      </Heading>

      <div className="w-full mt-[46px] grid-cols-1 largeTablet:grid-cols-3 gap-9 largeTablet:mt-24 hidden largeTablet:grid ">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.twitterUsername}
            testimonial={testimonial as unknown as SanityTestimonial}
          />
        ))}
      </div>
      <div className="w-full mt-[46px] largeTablet:mt-24 largeTablet:hidden ">
        <Slide
          ref={slideRef}
          {...properties}
          onChange={(x, y) => handleSlideChange(y)}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.twitterUsername}
              style={{
                padding: '0px 5px',
                boxSizing: 'border-box',
              }}
            >
              <Testimonial
                testimonial={testimonial as unknown as SanityTestimonial}
              />
            </div>
          ))}
        </Slide>
      </div>
    </SectionWrapper>
  )
}

export default Testimonials
