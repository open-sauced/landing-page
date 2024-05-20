import React, { FC, useRef, useState } from 'react'
import { Typography } from '../../common/text'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'
import { IoMdGitCommit } from 'react-icons/io'
import { HiOutlineBookOpen, HiOutlineDocumentText, HiOutlineVideoCamera } from 'react-icons/hi'
import xLogoW from '../../../public/logos/xLogoW.svg'

import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import Link from 'next/link'

import moment from 'moment'

interface LaunchItemsProps {
  // changelog: SanityChangelog
  launchItems:  { 
    title: string, 
    image: string
  }
  index: number
  count: number
}


const Launch: FC<LaunchItemsProps> = ({
  launchItems: { title, image },
  index,
  count,
}) => {
  const contentRef = useRef<HTMLDivElement>(null)

  const containerHeightStyle = {
    overflow: 'hidden',
    transition: 'height 0.5s ease-in-out',
    height: '360px',
  }

  return (
    <article
      className={`flex flex-col largeTablet:flex-row pb-24 gap-x-10 h-full relative border-textPrimary border-opacity-50 ${
        index + 1 === count ? '' : 'border-l-2'
      }`}
    >
      <div className="relative pb-28">
        <section className={`self-start sticky top-8 tablet:flex flex-1 pl-10 max-w-md flex-col `}>
          <span>
            <IoMdGitCommit className="absolute -left-3 rounded-3xl text-2xl p-1  text-white bg-gradient-to-tr from-[#ED5432] to-[#EDA232] drop-shadow-[0_0_4px_#ED5432]" />
          </span>

          <Typography alignLarge="left" variant="title3">
              {title}
          </Typography>
          <Typography alignLarge="left" variant="body3">
            "Training Open Source Leaders and Maintainers."
              {/* {subtitle} */}
          </Typography>
          <section className="flex flex-col gap-1 pt-2">
            <Link href="" className="flex gap-1.5 items-center ">
                <HiOutlineBookOpen className="text-brandRed" />
                Docs
            </Link>
            <Link href="" className="flex gap-1.5 items-center ">
              <HiOutlineDocumentText className="text-brandRed"/>  
              Blogpost
            </Link>
            <Link href="" className="flex gap-1.5 items-center ">
              <HiOutlineVideoCamera className="text-brandRed"/>  
              Video
            </Link>
            <Link href="" className="flex gap-1.5 items-center ">
              <Image alt="X logo" width={16} src={xLogoW} className="text-brandRed"/>
              See thread
            </Link>
          </section>
        </section>
      </div>
      <div style={containerHeightStyle}>
        <div className="relative" ref={contentRef}>
          <Image 
            src={image}
            width={500}
            height={500}
            alt={title}
          />
        </div>
      </div>
    </article>
  )
}

export default Launch
