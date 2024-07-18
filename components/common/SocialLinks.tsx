import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { AboutPage as SanityAboutPage } from '../../sanity.types'

// Static assets
import InstagramLogoW from '../../public/logos/instagramLogoW.svg'
import xLogoW from '../../public/logos/xLogoW.svg'
import GithubLogoW from '../../public/logos/githubLogoW.svg'
import DevLogoW from '../../public/logos/devLogoW.svg'
import YoutubeLogoW from '../../public/logos/youtubeLogoW.svg'

const data = [
  {
    url: 'https://twitter.com/saucedopen',
    icon: xLogoW,
    label: 'X',
  },
  {
    url: 'https://github.com/open-sauced',
    icon: GithubLogoW,
    label: 'Github',
  },
  {
    url: 'https://instagram.com/opensauced',
    icon: InstagramLogoW,
    label: 'Instagram',
  },
  {
    url: 'https://youtube.com/opensauced',
    icon: YoutubeLogoW,
    label: 'Youtube',
  },
  {
    url: 'https://dev.to/opensauced',
    icon: DevLogoW,
    label: 'Dev',
  },
]

interface SocialLinksProps {
  aboutPage?: boolean
  social?: SanityAboutPage['socialLinks']
}

const SocialLinks: FC<SocialLinksProps> = ({ aboutPage, social }): ReactElement => {
  const wrapperStyle = aboutPage
    ? 'grid grid-cols-3 gap-x-8 gap-y-3 largeTablet:flex'
    : 'flex flex-wrap relative gap-x-3 pr-2'

  return (
    social
    ? <div className={wrapperStyle}>
        {social.map(({ socialUrl, socialIcon, socialLinkPlaceholder }) => (
          <div key={socialLinkPlaceholder} className="flex items-center cursor-pointer">
            <a href={socialUrl} target="_blank"  className="opacity-70">
              <Image width={37} height={37} alt={socialLinkPlaceholder as string} src={socialIcon as unknown as string || ""} />
            </a>
          </div>
        ))}
      </div>
    : <div className={wrapperStyle}>
        {data.map(({ url, icon, label }) => (
          <div key={label} className="flex items-center cursor-pointer">
            <a href={url} target="_blank"  className="opacity-70">
              <Image width={18} height={18} alt={label} src={icon} />
            </a>
          </div>
        ))}
      </div>
  )
}

export default SocialLinks

