import React, { FC, ReactElement } from 'react'
import { Blog as SanityBlog, HomePage as SanityHomePage } from '../../../../sanity.types'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

// Components
import { Button } from '../../../common'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Typography } from '../../../common/text'
import Blog from './Blog'


interface BlogsProps {
  blogs: SanityBlog[]
  data: SanityHomePage['blogSection']
}

const Blogs: FC<BlogsProps> = ({ blogs, data }): ReactElement => {
  const [ refCard, cardInView ] = useInView()

  return (
    <motion.div
      ref={refCard}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: cardInView ? 1 : 0 , y: cardInView ? 0 : 100 }}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut', type: 'spring', stiffness: 50}}
    >
      <SectionWrapper pb={320}>
        <Typography variant="preHeading" alignSmall="center">
          {data?.title}
        </Typography>

        <Heading alignSmall="center">
          {data?.heading}
        </Heading>
        <div className="w-full max-w-3xl mt-4 mb-14 largeTablet:mt-10 largeTablet:mb-24">
          <Typography variant="subheading" alignSmall="center">
            {data?.description}
          </Typography>
        </div>
        <div className="w-full grid grid-cols-1 gap-10 mb-12 largeTablet:grid-cols-2 largeTablet:mb-24">
          {blogs.map((item) => (
            <Blog key={item._id} data={item} />
          ))}
        </div>
        <Button href="/blog">Load More</Button>
      </SectionWrapper>
    </motion.div>
  )
}

export default Blogs
