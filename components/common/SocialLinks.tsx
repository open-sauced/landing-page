import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import InstagramLogoW from '../../public/logos/instagramLogoW.svg'
import TwitterLogoW from '../../public/logos/twitterLogoW.svg'
import GithubLogoW from '../../public/logos/githubLogoW.svg'
import DiscordLogoW from '../../public/logos/discordLogoW.svg'
import DevLogoW from '../../public/logos/devLogoW.svg'
import YoutubeLogoW from '../../public/logos/youtubeLogoW.svg'

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
    url: 'https://instagram.com/opensauced?igshid=ZmVmZTY5ZGE=',
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
}

const SocialLinks: FC<SocialLinksProps> = ({ aboutPage }): ReactElement => {
  const wrapperStyle = aboutPage
    ? 'grid grid-cols-3 gap-x-8 gap-y-3 largeTablet:flex'
    : 'flex relative gap-x-3'

  return (
    <div className={wrapperStyle}>
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
