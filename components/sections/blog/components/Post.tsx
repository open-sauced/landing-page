import Image from 'next/image'
import Link from 'next/link'
import React, { FC, ReactElement } from 'react'
import { Blog as SanityBlog, Author as SanityAuthor } from '../../../../sanity.types'
import getReadTime from '../../../../utils/getReadTime'

// Components
import GradientBorderWrapper from '../../../common/GradientBorderWrapper'
import { Typography } from '../../../common/text'
import OrangeClock from '../../../../public/orange_clock.png'
import OrangeAuthor from '../../../../public/orange_author.png'
import { Button } from '../../../common'
import LocalTypography from './LocalTypography'
import { BiCalendarAlt } from 'react-icons/bi'

interface PostProps {
  data: Omit<SanityBlog, 'author'> & { author: SanityAuthor }
  featured?: boolean
}

const Post: FC<PostProps> = ({ data, featured }): ReactElement => {
  const {
    title,
    topics,
    published_date,
    coverImage,
    author,
    summary,
    slug,
    blogContent,
  } = data
  const src = coverImage || ''
  const href = `/blog/${slug?.current}`

  const getDisplaySummary = (): string => {
    if (summary) {
      if (summary.length > 150) {
        return `${summary?.slice(0, 150)}...`
      }
      return summary
    }
    return ''
  }
  return (
    <div className="w-full">
      {featured && (
        <div className="mb-6 largeTablet:mb-0 ">
          <GradientBorderWrapper
            style={{ borderRadius: '24px', padding: '4px 16px 6px' }}
          >
            <span className="font-bold text-xs uppercase tracking-[0.2em] text-[#11181C]">
              Featured Post
            </span>
          </GradientBorderWrapper>
        </div>
      )}
      <div className={`${featured && 'largeTablet:hidden'}`}>
        <GradientBorderWrapper style={{ width: '100%', borderRadius: '5px' }}>
          <div className="w-full relative rounded-[5px] overflow-hidden ">
            <Image width="580" height={304} src={src as string} alt="Cover" />
          </div>
        </GradientBorderWrapper>
      </div>

      <div className="flex justify-start pt-6 pb-2 largeTablet:pt-10">
        {topics?.map((item) => (
          <div key={item} className="mr-5">
            <Typography key={item} variant="body4">{`#${item}`}</Typography>
          </div>
        ))}
      </div>
      <div className=" min-h-[55px] largeTablet:min-h-[90px]">
        <LocalTypography featured={featured} variant="title">
          <Link
            href={href}
            className="hover:text-brandOrange hover:decoration-brandOrange transition-all"
          >
            {title}
          </Link>
        </LocalTypography>
      </div>
      <div className="flex items-center pb-6 largeTablet:pb-10 ">
        <div className="flex-shrink-0 mr-2">
          <Image src={OrangeAuthor} alt="Author" />
        </div>
        <LocalTypography>{author?.name}</LocalTypography>

        <div className="flex-shrink-0 mr-2 ml-4">
          <Image src={OrangeClock} alt="Time" />
        </div>
        <LocalTypography>{`${getReadTime(blogContent || '')} ${
          getReadTime(blogContent || '') === 1 ? 'min' : 'mins'
        } read`}</LocalTypography>

        {published_date && (
          <>
            <div className="flex-shrink-0 mr-2 ml-4">
              <BiCalendarAlt className="text-[#E33E24] w-5 h-5" />
            </div>
            <LocalTypography>
              <time>{published_date}</time>
            </LocalTypography>
          </>
        )}
      </div>
      <Typography variant="body1" alignLarge="left">
        {getDisplaySummary()}
      </Typography>
      <div className="pt-10">
        <Button href={href}>Read More</Button>
      </div>
    </div>
  )
}

export default Post
