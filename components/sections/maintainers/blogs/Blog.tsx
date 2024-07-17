import Image from 'next/image'
import Link from 'next/link'
import React, { FC, ReactElement } from 'react'
import { Blog as SanityBlog } from '../../../../sanity.types'

// Components
import GradientBorderWrapper from '../../../common/GradientBorderWrapper'

interface BlogProps {
  data: SanityBlog
}

const Blog: FC<BlogProps> = ({ data }): ReactElement => {
  const { title, topics, coverImage, slug } = data
  const src = coverImage || ''
  const href = `/blog/${slug?.current}`
  return (
    <div className="w-full">
      <GradientBorderWrapper
        style={{ width: '100%', borderRadius: '5px', cursor: 'pointer' }}
      >
        <Link href={href} passHref>
          <div className="w-full h-[304px] relative rounded-[5px] overflow-hidden ">
            <Image
              src={src as string}
              layout="fill"
              objectFit="cover"
              alt="Post cover"
            />
          </div>
        </Link>
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
  children: React.ReactNode
  variant?: 'title' | 'item1'
}

const Typography: FC<TypographyProps> = ({ variant = 'item1', children }) => {
  const titleStyle =
    'font-bold text-textPrimary text-base tracking-[-0.02em] text-center pb-1 pt-4 largeTablet:text-xl largeTablet:tracking-[-0.03em] largeTablet:pt-6'
  const item1Style =
    'font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.7] pb-3'

  const appliedStyle = variant === 'title' ? titleStyle : item1Style

  return <p className={appliedStyle}>{children}</p>
}
