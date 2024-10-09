import React, { FC } from 'react'
// Icons
import { BsTwitter, BsLinkedin, BsFacebook ,BsReddit} from 'react-icons/bs'
import { FaHackerNewsSquare } from 'react-icons/fa'

interface SocialShareProps {
  title:string
  url: string
  direction?: string
  size?: string
  gap?: number
  twitter?: boolean
  linkedin?: boolean
  facebook?: boolean
  hackerNews?: boolean
  reddit?: boolean
}
const extractTitleFromURL = (url: string): string => {
  const slug = url.split('/').pop() || '';
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
const SocialShare:FC<SocialShareProps> = ({
  reddit= true,
  twitter = true,
  linkedin = true,
  facebook = false,
  hackerNews = false,
  url,
  direction = "row",
  size = "xl" || "lg" || "md" || "sm" || "xs",
  gap = 2,

}) => {
  const title= extractTitleFromURL(url);
  const commonStyle = `gap-${gap} ${direction == "row" ? "flex-row" : "flex-col"}`
  const iconSize = `text-${size}`

  return (
    <div className={` ${commonStyle} ${iconSize} flex  gap-2`}>
      {twitter && <TwitterLink url={url} title={title} />}
      {linkedin && <LinkedinLink url={url} title={title} />}
      {facebook && <FacebookLink url={url} title={title} />}
      {hackerNews && <HackerNewsLink url={url} title={title} />}
      {reddit && <RedditLink url={url} title={title} />}
    </div>
  )
}

export default SocialShare


interface SocialLinkProps {
  url: string
  title: string
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
const FacebookLink:FC<SocialLinkProps> = ({url}) => {
  return (
    <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
      <BsFacebook/>
    </a>
  )
}
const HackerNewsLink:FC<SocialLinkProps> = ({url}) => {
  return (
    <a href={`https://news.ycombinator.com/submitlink?u=${url}`}>
      <FaHackerNewsSquare/>
    </a>
  )
}

const RedditLink: FC<SocialShareProps> = ({title , url}) => {
  return (
    <a href={`https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}>
      <BsReddit/>
    </a>
  )
}