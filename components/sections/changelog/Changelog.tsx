import React, { FC, useRef, useState } from 'react'
import { Typography } from '../../common/text'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'
import { IoMdGitCommit } from "react-icons/io";
import ReactMarkdown from 'react-markdown';
import { MdOutlineExpandMore } from "react-icons/md";
import { SanityChangelog } from '../../../types/schema';
import moment from 'moment';

interface ChangelogProps {
  changelog: SanityChangelog
  index: number
  count: number
}

const Changelog: FC<ChangelogProps> = ({
  changelog: {
    title,
    date,
    changelogCategory,
    changelogContent,
    topics},
  index,
  count
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  // function to expand the changelog
  const expandChangelog = () => {
    setIsExpanded(!isExpanded)
  }

  const containerHeightStyle = {
    overflow: "hidden",
    transition: "height 0.5s ease-in-out",
    height: isExpanded ? `${contentRef.current?.clientHeight}px` : "120px",
  }

  // check if the changelog content has an image
  const hasImageInContent = changelogContent.includes("![image](")

  // check the line of the changelog content
  const lineCount = changelogContent.split("\n").length

  return (
    <div className="flex gap-x-10">
      <div className={`hidden  tablet:flex relative pb-28 flex-1 border-textPrimary border-opacity-50 pl-10 max-w-md flex-col ${index+1 === count ? "" : "border-l-2"}`}>
        <span>
          <IoMdGitCommit className="absolute -left-5 bg-darkBG text-4xl" />
        </span>
        <Typography alignLarge="left" variant="title3">
          {title}
        </Typography>
        <span className="py-4">
          <Typography alignLarge="left" variant="body4">
            {moment(date).format("DD MMM YYYY")}
          </Typography>
        </span>
        <div className="flex gap-3">
          {topics && topics.map((category, index) => (
            <GradientBorderWrapper key={index} style={{borderRadius: "16px"}}>
              <div className="bg-darkBG rounded-2xl text-sm px-2 py-1">
                {category}
              </div>
            </GradientBorderWrapper>
          ))}
        </div>
      </div>
      <div className={`flex-1 relative pb-10 tablet:border-0 tablet:pl-0 pl-6 ${index+1 === count ? "" : "border-l-2"}`}>
        <div className="tablet:hidden relative flex-col flex gap-y-2 pb-4">
          <span className=" -left-6 -top-4 z-50 absolute">
            <IoMdGitCommit className="absolute -left-4 top-4 bg-darkBG text-3xl" />
          </span>
          <Typography alignLarge="left" variant="title3">
            {title}
          </Typography>
          <Typography alignLarge="left" variant="body4">
            {moment(date).format("DD MMM YYYY")}
          </Typography>
          <div className="flex gap-2">
            {topics && topics.map((category, index) => (
              <GradientBorderWrapper key={index} style={{ borderRadius: "16px"}}>
                <div className="bg-darkBG rounded-2xl text-sm px-2 py-1">
                  { category }
                </div>
              </GradientBorderWrapper>
            ))}
          </div>
        </div>

        <div style={containerHeightStyle}>
          <div className="relative" ref={contentRef}>
            <ReactMarkdown
              className="prose prose-sm prose-headings:text-textPrimary prose-p:text-textPrimary prose-p:text-base">
              {changelogContent}
            </ReactMarkdown>
          </div>
        </div>
        {(hasImageInContent || changelogContent.length > 260) && (
          <button onClick={expandChangelog} className="text-textPrimary font-bold flex items-center mt-8 gap-x-2 transition-all hover:text-brandOrange">
            {isExpanded ? "Collapse" : "See more"}
            {isExpanded ? <MdOutlineExpandMore className="transform rotate-180" /> : <MdOutlineExpandMore />}
          </button>
        )}
      </div>
    </div>
  )
}

export default Changelog