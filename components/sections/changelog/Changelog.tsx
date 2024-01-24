import React, { useState } from 'react'
import { Typography } from '../../common/text'
import GradientBorderWrapper from '../../common/GradientBorderWrapper'
import { IoMdGitCommit } from "react-icons/io";
import ReactMarkdown from 'react-markdown';
import { MdOutlineExpandMore } from "react-icons/md";


const Changelog = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  // function to expand the changelog
  const expandChangelog = () => {
    setIsExpanded(!isExpanded)
  }

  const containerHeightStyle = {
    height: isExpanded ? "auto" : "200px",
    overflow: "hidden",
  }

  const markdown = `## for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. *hello*
  sdfhfhjkahsjdf
  sdfsf
  `

  return (
    <div className="flex gap-x-10">
      <div className="hidden tablet:flex relative flex-1 border-l-2 border-textPrimary border-opacity-50 pl-10 max-w-md flex-col gap-y-4">
        <span>
          <IoMdGitCommit className="absolute -left-4 top-4 bg-darkBG text-3xl" />
        </span>
        <Typography alignLarge="left" variant="title3">
          Follower and following count to contributor profile
        </Typography>
        <Typography alignLarge="left" variant="body4">
          Jan 9, 2024
        </Typography>
        <div className="flex">
          <GradientBorderWrapper style={{ borderRadius: "16px"}}>
            <div className="bg-darkBG rounded-2xl px-2 py-1">
              education
            </div>
          </GradientBorderWrapper>
        </div>
      </div>
      <div  className="flex-1 relative border-l-2 tablet:border-0 tablet:pl-0 pl-6 ">
        <div className="tablet:hidden relative flex-col flex gap-y-2 pb-4">
          <span className=" -left-6 -top-4 z-50 absolute">
            <IoMdGitCommit className="absolute -left-4 top-4 bg-darkBG text-3xl" />
          </span>
          <Typography alignLarge="left" variant="title3">
            Follower and following count to contributor profile
          </Typography>
          <Typography alignLarge="left" variant="body4">
            Jan 9, 2024
          </Typography>
          <div className="flex">
            <GradientBorderWrapper style={{ borderRadius: "16px"}}>
              <div className="bg-darkBG rounded-2xl text-sm px-2 py-1">
                education
              </div>
            </GradientBorderWrapper>
          </div>
        </div>

        <div style={containerHeightStyle}>
          <ReactMarkdown className="prose prose-sm prose-headings:text-textPrimary ">
            { markdown }
          </ReactMarkdown>
        </div>

        <button onClick={expandChangelog} className="text-textPrimary font-bold flex items-center gap-x-2 transition-all hover:text-brandOrange">
          {isExpanded ? "Collapse" : "See more"}
          {isExpanded ? <MdOutlineExpandMore className="transform rotate-180" /> : <MdOutlineExpandMore />}
        </button>
      </div>
    </div>
  )
}

export default Changelog