import React, { FC, ReactElement } from 'react'
import { SanityBlog, SanityFeaturedBlog } from '../../../../types/schema'
import SectionWrapper from '../../../common/layout/SectionWrapper'
import { Heading, Typography } from '../../../common/text'
import OrangeClock from '../../../../public/orange_clock.png'
import OrangeAuthor from '../../../../public/orange_author.png'
import Image from 'next/image'
import LocalTypography from '../components/LocalTypography'
import GradientBorderWrapper from '../../../common/GradientBorderWrapper'
import BlogTextContent from './BlogTextContent'
import { useRouter } from 'next/router'
import Blog from '../components/Post'
import ReactPlayer from 'react-player'

interface PageContentProps {
  pageContent: SanityFeaturedBlog
  blogs: SanityBlog[]
}

const PageContent: FC<PageContentProps> = ({
  pageContent,
  blogs,
}): ReactElement => {
  const { query } = useRouter()
  const { topics, title, author, readTime, coverImage, blogContent, blogUrl } =
    pageContent
  const src = coverImage || ''
  const displayBlogs =
    blogs.filter((item) => item.slug?.current != query.slug) || []
  return (
    <SectionWrapper pt={205} pb={235}>
      <div className=" w-full flex gap-5 justify-start largeTablet:justify-center">
        {topics?.map((item) => (
          <Typography key={item} variant="body4">{`#${item}`}</Typography>
        ))}
      </div>
      <div className="max-w-[750px] pt-3 pb-4 largeTablet:pt-4 largeTablet:pb-10 ">
        <Heading align="center">{title}</Heading>
      </div>
      <div className="w-full flex justify-start pb-11 largeTablet:pb-20 largeTablet:justify-center">
        <div className="flex-shrink-0 mr-2">
          <Image src={OrangeAuthor} />
        </div>

        <LocalTypography>{author}</LocalTypography>
        <div className="flex-shrink-0 mr-2 ml-4">
          <Image src={OrangeClock} />
        </div>

        <LocalTypography>{`${readTime} ${
          readTime === 1 ? 'min' : 'mins'
        } read`}</LocalTypography>
      </div>

      <GradientBorderWrapper style={{ width: '100%', borderRadius: '8px' }}>
        <div className="w-full h-[304px] relative rounded-[5px] overflow-hidden largeTablet:h-[496px]  ">
          <Image src={src as string} layout="fill" objectFit="cover" />
        </div>
      </GradientBorderWrapper>
      <BlogTextContent data={blogContent} />
      <div className="mt-6 largeTablet:mt-10">
        <ReactPlayer url={blogUrl} />
      </div>
      <div className="w-full mt-9 largeTablet:mt-28">
        <Typography variant="preHeading" alignLarge="left">
          Recent Posts
        </Typography>
        <div className="grid grid-cols-1 gap-y-20 mt-10 largeTablet:grid-cols-2 largeTablet:gap-x-11">
          {displayBlogs.slice(0, 2).map((item) => (
            <Blog key={item._id} data={item} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default PageContent
