import React, { FC } from 'react'
import { SanityTestimonial } from '../../../../types/schema'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Typography } from '../../../common/text'
import Testimonial from './Testimonial'

interface TestimonialsProps {
  data: SanityTestimonial[]
}

const Testimonials: FC<TestimonialsProps> = ({ data }) => {
  return (
    <SectionWrapper pb={215}>
      <Typography variant="preHeading" alignSmall="center">
        Testimonials
      </Typography>
      <Heading component="h3" alignSmall="center">
        The value of $yOpen Source$y
      </Heading>

      <div className=" mt-[46px] grid mobile:grid-cols-1 tablet:grid-cols-3 gap-9 largeTablet:mt-24  ">
        {data.map((testimonial) => (
          <Testimonial
            key={testimonial.twitterUsername}
            testimonial={testimonial as unknown as SanityTestimonial}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Testimonials
