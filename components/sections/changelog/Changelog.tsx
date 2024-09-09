import React, { FC, useRef, useState } from 'react'
import { Typography } from '../../common/text'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'
import { IoMdGitCommit } from 'react-icons/io'
import ReactMarkdown from 'react-markdown'
import { MdOutlineExpandMore } from 'react-icons/md'
import { Changelog as SanityChangelog } from '../../../sanity.types'
import moment from 'moment'

import Link from 'next/link'

interface ChangelogProps {
  changelog: SanityChangelog
  index: number
  count: number
}

const Changelog: FC<ChangelogProps> = ({
  changelog: { title, date, changelogCategory, changelogContent, topics, slug },
  index,
  count,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  // function to expand the changelog
  const expandChangelog = () => {
    setIsExpanded(!isExpanded)
  }

  const containerHeightStyle = {
    overflow: 'hidden',
    transition: 'height 0.5s ease-in-out',
    height: isExpanded ? `${contentRef.current?.clientHeight}px` : '360px',
  }

  // check if the changelog content has an image
  const hasImageInContent = changelogContent?.includes('![image](')

  // check the line of the changelog content
  const lineCount = changelogContent?.split('\n').length

  return (
    <article
      className={`flex pb-24 gap-x-10 h-full relative border-textPrimary border-opacity-50 ${
        index + 1 === count ? '' : 'border-l-2'
      }`}
    >
      <div className="relative pb-28">
        <section
          className={`hidden self-start sticky top-8 tablet:flex flex-1 pl-10 max-w-md flex-col `}
        >
          <span>
            <IoMdGitCommit className="absolute -left-3 rounded-3xl text-2xl p-1  text-white bg-gradient-to-tr from-[#ED5432] to-[#EDA232] drop-shadow-[0_0_4px_#ED5432]" />
          </span>
          <Typography alignLarge="left" variant="title3">
            <Link
              href={`/changelog/${slug?.current}`}
              className="hover:text-brandOrange hover:decoration-brandOrange transition-all"
            >
              {title}
            </Link>
          </Typography>
          <span className="py-4">
            <Typography alignLarge="left" variant="body4">
              {moment(date).format('DD MMM YYYY')}
            </Typography>
          </span>
          <div className="flex gap-3">
            {topics &&
              topics.map((category, index) => (
                <GradientBorderWrapper
                  key={index}
                  style={{ borderRadius: '16px' }}
                >
                  <div className="bg-darkBG rounded-2xl text-sm px-2 py-1">
                    {category}
                  </div>
                </GradientBorderWrapper>
              ))}
          </div>
        </section>
      </div>

      <section
        className={`flex-1 relative pb-10 tablet:border-0 tablet:pl-0 pl-6 ${
          index + 1 === count ? '' : 'border-l-2'
        }`}
      >
        <div className="tablet:hidden relative flex-col flex gap-y-2 pb-4">
          <span className=" -left-6 -top-4 absolute">
            <IoMdGitCommit className="absolute -left-4 top-4 bg-darkBG text-3xl" />
          </span>
          <Typography alignLarge="left" variant="title3">
            <Link
              href={`/changelog/${slug?.current}`}
              className="hover:text-brandOrange hover:decoration-brandOrange transition-all"
            >
              {title}
            </Link>
          </Typography>
          <Typography alignLarge="left" variant="body4">
            {moment(date).format('DD MMM YYYY')}
          </Typography>
          <div className="flex gap-2">
            {topics &&
              topics.map((category, index) => (
                <GradientBorderWrapper
                  key={index}
                  style={{ borderRadius: '16px' }}
                >
                  <div className="bg-darkBG rounded-2xl text-sm px-2 py-1">
                    {category}
                  </div>
                </GradientBorderWrapper>
              ))}
          </div>
        </div>

        <div style={containerHeightStyle}>
          <div className="relative" ref={contentRef}>
            <ReactMarkdown className="prose prose-invert prose-img:rounded-md">
              {changelogContent || ''}
            </ReactMarkdown>
          </div>
        </div>
        {(hasImageInContent || changelogContent?.length || 0 > 260) && (
          <button
            onClick={expandChangelog}
            className="text-textPrimary font-bold flex items-center mt-8 gap-x-2 transition-all hover:text-brandOrange"
          >
            {isExpanded ? 'Collapse' : 'See more'}
            {isExpanded ? (
              <MdOutlineExpandMore className="transform rotate-180" />
            ) : (
              <MdOutlineExpandMore />
            )}
          </button>
        )}
      </section>
    </article>
  )
}

export default Changelog
