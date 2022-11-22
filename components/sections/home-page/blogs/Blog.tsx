import Image from 'next/image'
import React, { FC, ReactElement } from 'react'
import { SanityBlog } from '../../../../types/schema'
import GradientBorderWrapper from '../../../common/GradientBorderWrapper'

interface BlogProps {
  data: SanityBlog
}

const Blog: FC<BlogProps> = ({ data }): ReactElement => {
  const { title, topics, coverImage } = data
  const src = coverImage || ''
  return (
    <div className="w-full">
      <GradientBorderWrapper style={{ width: '100%', borderRadius: "5px" }}>
        <div className="w-full h-[304px] relative rounded-[5px] overflow-hidden ">
          <Image src={src as string} layout="fill" objectFit='cover' />
        </div>
      </GradientBorderWrapper>
      <Typography variant="title">{title}</Typography>
      <div className="flex justify-center gap-5">
        {topics?.map((item) => (
          <Typography key={item}>{`#${item}`}</Typography>
        ))}
      </div>
    </div>
  )
}

export default Blog

interface TypographyProps {
  variant?: 'title' | 'item1'
}

const Typography: FC<TypographyProps> = ({ variant = 'item1', children }) => {
  const titleStyle =
    'font-bold text-[#FFF9ED] text-base tracking-[-0.02em] text-center pb-1 pt-4 largeTablet:text-xl largeTablet:tracking-[-0.03em] largeTablet:pt-6'
  const item1Style =
    'font-normal text-[#FFF9ED] text-sm tracking-[-0.02em] opacity-[0.7] pb-3'

  const appliedStyle = variant === 'title' ? titleStyle : item1Style

  return <p className={appliedStyle}>{children}</p>
}
