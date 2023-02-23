import React, { FC } from 'react'
import { BsTwitter, BsLinkedin } from 'react-icons/bs'

interface SocialShareProps {
  url: string
  direction?: string
  size?: string
  gap?: number
  twitter?: boolean
  linkedin?: boolean
}

const SocialShare:FC<SocialShareProps> = ({
  twitter = true,
  linkedin = true,
  url,
  direction = "row",
  size = "xl" || "lg" || "md" || "sm" || "xs",
  gap = 2
}) => {
  
  const commonStyle = `gap-${gap} ${direction == "row" ? "flex-row" : "flex-col"}`
  const iconSize = `text-${size}`

  return (
    <div className={` ${commonStyle} ${iconSize} flex  gap-2`}>
      {twitter && <TwitterLink url={url} />}
      {linkedin && <LinkedinLink url={url}/>}
    </div>
  )
}

export default SocialShare

interface SocialLinkProps {
  url: string
}

const TwitterLink:FC<SocialLinkProps> = ({url}) => {
  return (
    <a href={`https://twitter.com/intent/tweet?url=${url}`}>
      <BsTwitter/>
    </a>
  )
}
const LinkedinLink:FC<SocialLinkProps> = ({url}) => {
  return (
    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>
      <BsLinkedin/>
    </a>
  )
}