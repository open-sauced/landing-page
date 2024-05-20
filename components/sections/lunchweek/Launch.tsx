import React, { FC, useRef, useState } from 'react'
import { Typography } from '../../common/text'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'
import { IoMdGitCommit } from 'react-icons/io'
import { HiOutlineBookOpen, HiOutlineDocumentText, HiOutlineVideoCamera } from 'react-icons/hi'
import xLogoOrange from '../../../public/logos/xLogoOrange.svg'


import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import Link from 'next/link'

import moment from 'moment'

interface LaunchItemsProps {
  launchItems:  { 
    title: string,
    subtitle: string,
    image: string,
    launchDay: string,
    docsLink: string,
    logLink: string,
    videoLink: string,
    twitterLink: string,
    blurred: boolean,
  }
  index: number
  count: number
}


const Launch: FC<LaunchItemsProps> = ({
  launchItems: { title, subtitle, image, launchDay, docsLink, logLink, videoLink, twitterLink, blurred},
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
      className={`flex flex-col justify-between largeTablet:flex-row pb-24 gap-x-10 h-full relative border-brandOrange border-opacity-50 border-l-2 ${
        blurred ? 'blur-md' : ''
      }`}
    >
      <div className="relative largeTablet:pb-28 pb-8 flex-1">
        <section className={`self-start sticky top-8 tablet:flex flex-1 pl-10 max-w-md flex-col `}>
          <span>
            <IoMdGitCommit className="absolute -left-3 rounded-3xl text-2xl p-1  text-white bg-gradient-to-tr from-[#ED5432] to-[#EDA232] drop-shadow-[0_0_4px_#ED5432]" />
          </span>

          <p className="pb-2 text-brandRed">
            {launchDay}
          </p>

          <Typography alignLarge="left" variant="title3">
              {title}
          </Typography>
          <span className="py-2">
            <Typography alignLarge="left" variant="body3">
                {subtitle}
            </Typography>
          </span>
          
          {/* Links */}
          <section className="flex flex-col gap-1 text-gray-300">
            <Link href="" className="flex gap-1.5 items-center hover:text-brandRed hover:font-medium transition-all">
                <HiOutlineBookOpen className="text-brandRed" />
                Docs
            </Link>
            <Link href="" className="flex gap-1.5 items-center hover:text-brandRed hover:font-medium transition-all">
              <HiOutlineDocumentText className="text-brandRed"/>  
              Blogpost
            </Link>
            <Link href="" className="flex gap-1.5 items-center hover:text-brandRed hover:font-medium transition-all">
              <HiOutlineVideoCamera className="text-brandRed"/>  
              Video
            </Link>
            <Link href="" className="flex gap-1.5 items-center hover:text-brandRed hover:font-medium transition-all">
              <Image alt="X logo" width={14} src={xLogoOrange} className="text-brandRed"/>
              See thread
            </Link>
          </section>
        </section>
      </div>
      <div className="flex-1" style={containerHeightStyle}>
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
