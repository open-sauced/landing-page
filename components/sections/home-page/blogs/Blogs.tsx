import React, { FC, ReactElement } from 'react'
import { SanityBlog } from '../../../../types/schema'
import { Button } from '../../../common'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Paragraph, Typography } from '../../../common/text'
import Blog from './Blog'

interface BlogsProps {
  data: SanityBlog[]
}

const Blogs: FC<BlogsProps> = ({ data }): ReactElement => {
  return (
    <SectionWrapper pb={320}>
      <Typography variant="preHeading" alignSmall="center">
        Our Secret Sauce
      </Typography>

      <Heading>$yogOpenSauced$yog Blog</Heading>
      <div className="w-full max-w-3xl mt-4 mb-14 largeTablet:mt-10 largeTablet:mb-24">
        <Paragraph align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat,ipsum ac auctor ornare, nunc ligula scelerisque eros.
        </Paragraph>
      </div>
      <div className="w-full grid grid-cols-1 gap-10 mb-12 largeTablet:grid-cols-2 largeTablet:mb-24">
        {data.map((item) => (
          <Blog key={item._id} data={item} />
        ))}
      </div>
      <Button href="/blog">Load More</Button>
    </SectionWrapper>
  )
}

export default Blogs
