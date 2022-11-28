import Image from 'next/image'
import React, { FC, ReactElement } from 'react'
import { SanityBlog } from '../../../../types/schema'
import GradientBorderWrapper from '../../../common/GradientBorderWrapper'
import { Typography } from '../../../common/text'
import OrangeClock from '../../../../public/orange_clock.png'
import OrangeAuthor from '../../../../public/orange_author.png'
import { Button } from '../../../common'
import LocalTypography from './LocalTypography'

interface PostProps {
  data: SanityBlog
  featured?: boolean
}

const Post: FC<PostProps> = ({ data, featured }): ReactElement => {
  const { title, topics, coverImage, author, readTime, summary, slug } = data
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
          <div className="w-full h-[304px] relative rounded-[5px] overflow-hidden ">
            <Image src={src as string} layout="fill" objectFit="cover" />
          </div>
        </GradientBorderWrapper>
      </div>

      <div className="flex justify-start pt-6 pb-2 largeTablet:pt-10">
        {topics?.map((item) => (
          <div className="mr-5">
            <Typography key={item} variant="body4">{`#${item}`}</Typography>
          </div>
        ))}
      </div>
      <div className=" min-h-[55px] largeTablet:min-h-[90px]">
        <LocalTypography variant="title">{title}</LocalTypography>
      </div>
      <div className="flex items-center pb-6 largeTablet:pb-10 ">
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
      <Typography variant="body1">{getDisplaySummary()}</Typography>
      <div className="pt-10">
        <Button href={href}>Read More</Button>
      </div>
    </div>
  )
}

export default Post
