import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import InstagramLogoW from '../../public/logos/instagramLogoW.svg'
import TwitterLogoW from '../../public/logos/twitterLogoW.svg'
import GithubLogoW from '../../public/logos/githubLogoW.svg'
import DiscordLogoW from '../../public/logos/discordLogoW.svg'
import DevLogoW from '../../public/logos/devLogoW.svg'
import YoutubeLogoW from '../../public/logos/youtubeLogoW.svg'
import { SanityAboutPage } from '../../types/schema'

const data = [
  {
    url: 'https://twitter.com/saucedopen',
    icon: TwitterLogoW,
    label: 'Twitter',
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
    url: 'https://discord.com/invite/U2peSNf23P',
    icon: DiscordLogoW,
    label: 'Discord',
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
            <a href={socialUrl} target="_blank" rel="noreferrer" className="opacity-70">
              <Image width={37} height={37} alt={socialLinkPlaceholder} src={socialIcon as unknown as string || ""} />
            </a>
          </div>
        ))}
      </div>
    : <div className={wrapperStyle}>
        {data.map(({ url, icon, label }) => (
          <div key={label} className="flex items-center cursor-pointer">
            <a href={url} target="_blank" rel="noreferrer" className="opacity-70">
              <Image alt={label} src={icon} />
            </a>
          </div>
        ))}
      </div>
  )
}

export default SocialLinks

