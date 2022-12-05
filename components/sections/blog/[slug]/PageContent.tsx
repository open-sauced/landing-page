import React, { FC, ReactElement } from 'react'
import { SanityBlog } from '../../../../types/schema'
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
import DecoratedText from '../../../common/text/utils/DecoratedText'

interface PageContentProps {
  pageContent: SanityBlog
  blogs: SanityBlog[]
  featuredPost?: boolean
}

const PageContent: FC<PageContentProps> = ({
  pageContent,
  blogs,
  featuredPost,
}): ReactElement => {
  const { query } = useRouter()
  const { topics, title, author, readTime, coverImage, blogContent, blogUrl } =
    pageContent
  const src = coverImage || ''
  const displayBlogs =
    blogs.filter((item) => item.slug?.current != query.slug) || []
  return (
    <SectionWrapper pt={205} pts={60} pb={235}>
      <div className=" w-full flex justify-start largeTablet:justify-center">
        {topics?.map((item) => (
          <div key={item} className="mr-5">
            <Typography key={item} variant="body4">{`#${item}`}</Typography>
          </div>
        ))}
      </div>
      <div className="w-full max-w-[750px] pt-3 pb-4 largeTablet:pt-4 largeTablet:pb-10 ">
        <Heading>{title}</Heading>
      </div>
      <div className="w-full flex justify-start pb-11 largeTablet:pb-20 largeTablet:justify-center">
        <div className="flex-shrink-0 mr-2">
          <Image src={OrangeAuthor} alt="Author" />
        </div>

        <LocalTypography>{author}</LocalTypography>
        <div className="flex-shrink-0 mr-2 ml-4">
          <Image src={OrangeClock} alt="Clock" />
        </div>

        <LocalTypography>{`${readTime} ${
          readTime === 1 ? 'min' : 'mins'
        } read`}</LocalTypography>
      </div>

      <GradientBorderWrapper style={{ width: '100%', borderRadius: '8px' }}>
        <div className="w-full h-[304px] relative rounded-[5px] overflow-hidden largeTablet:h-[496px]  ">
          <Image
            src={src as string}
            layout="fill"
            objectFit="cover"
            alt="Cover"
          />
        </div>
      </GradientBorderWrapper>
      <BlogTextContent data={blogContent} />
      {featuredPost && (
        <div className="w-full mt-6 largeTablet:mt-10">
          <ReactPlayer url={blogUrl} width="100%" />
        </div>
      )}
      {!featuredPost && (
        <a
          className="w-full max-w-[780px]"
          href={blogUrl}
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-left font-bold text-2xl border-b-[1px] w-fit tracking-[0.14em] pt-6">
            <DecoratedText content="$yellow-to-orangeRead entire article" />
          </p>
        </a>
      )}
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
