import Link from 'next/link'
import { Button } from '../../common'
import Image from 'next/image'
import { SanityNavigation } from '../../../types/schema'
import { FC } from 'react'
import { useRouter } from 'next/router'

interface DesktopNavigationProps {
  navigationItems: SanityNavigation[]
  logo: string
}

const DesktopNavigation: FC<DesktopNavigationProps> = ({
  navigationItems,
  logo,
}) => {
  const { pathname } = useRouter()
  const defaultStyle = 'font-bold text-textPrimary text-sm'
  const activeLinkStyle =
    'after:absolute after:bg-gradient-to-r from-[#ED5432] to-[#EDA232] after:w-full after:h-[3px] after:bottom-[-8px] after:left-0'

  const getProperStyle = (link?: string) => {
    if (pathname.includes(link as string)) {
      return `${defaultStyle} ${activeLinkStyle}`
    }
    return defaultStyle
  }
  return (
    <div className="items-center w-full justify-between hidden largeTablet:flex">
      <div className="h-[26px] w-[150px] cursor-pointer">
        <Link href="/" passHref>
          <a>
            <Image src={logo} layout="responsive" alt="Logo image" />
          </a>
        </Link>
      </div>

      <nav className="flex gap-8">
        {navigationItems.map((link) => (
          <div key={link.label} className="relative cursor-pointer top">
            <Link key={link.label} href={link.url as string} passHref>
              <p className={`${getProperStyle(link.url)}`}>{link.label}</p>
            </Link>
          </div>
        ))}
      </nav>

      <Button href="https://insights.opensauced.pizza/start" gitHub>
        Connect with GitHub
      </Button>
    </div>
  )
}

export default DesktopNavigation
