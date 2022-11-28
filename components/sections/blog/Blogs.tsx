import React, { FC, ReactElement } from 'react'
import { SanityBlog } from '../../../types/schema'
import SectionWrapper from '../../common/layout/SectionWrapper'
import { Heading, Paragraph, Subheading } from '../../common/text'
import Post from './components/Post'
import FeaturedPost from './FeaturedPost'

interface BlogsProps {
  data: SanityBlog[]
}

const Blogs: FC<BlogsProps> = ({ data }): ReactElement => {
  return (
    <SectionWrapper direction="col" pt={0} pb={265} pbs={135}>
      <Subheading>Blog</Subheading>
      <div className="max-w-[750px]">
        <Heading align="center">
          $yogArticles and updates$yog from OpenSauced
        </Heading>
      </div>
      <div className="max-w-[750px] pt-4 pb-16 largeTablet:pt-10 largeTablet:pb-32 ">
        <Paragraph align="center">
          A collection of the latest OpenSauced thoughts, insights, updates  and
          announcements.
        </Paragraph>
      </div>
      <FeaturedPost data={data[0]} />
      <div className="w-full mt-20">
        <Subheading>Recent Posts</Subheading>
        <div className="grid grid-cols-1 gap-y-20 mt-10 largeTablet:grid-cols-2 largeTablet:gap-x-11 ">
          {data.slice(1).map((item) => (
            <Post key={item._id} data={item} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Blogs
