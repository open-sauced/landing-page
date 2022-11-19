import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DropdownMenu from './DropdownMenu'
import { SanityNavigation } from '../types/schema'
import BrandLogo from '../public/brandLogo.svg'
import BrandLogoDark from '../public/brandLogoDark.svg'
import SectionWrapper from './SectionWrapper'
import { Button } from './common'

interface NavigationProps {
  navigationItems: SanityNavigation[]
  variant?: string
  logo?: any
  textColor?: string
}

const Navigation = ({
  navigationItems,
  variant = 'orangeWhite',
}: NavigationProps) => {
  let logo = BrandLogo
  let textColor = 'white'

  if (variant === 'orangeWhite') {
    logo = logo
    textColor = 'white'
  } else if (variant === 'orangeGrey') {
    logo = BrandLogoDark
    textColor = 'text-gray-500'
  }

  return (
    <SectionWrapper justify="between">
      <header className="flex flex-grow py-9 font-inter justify-between items-center">
        <DesktopNavigation
          textColor={textColor}
          logo={logo}
          navigationItems={navigationItems}
        />
        <MobileNavigation navigationItems={navigationItems} logo={logo} />
      </header>
    </SectionWrapper>
  )
}

export default Navigation

interface ExternalLinkProps {
  href: string
  label: string
  textColor?: string
}

const ExternalLink = ({ href, label, textColor }: ExternalLinkProps) => {
  return (
    <a
      href={href}
      rel="noreferrer"
      className={'font-bold text-sm  ' + textColor}
    >
      {label}
    </a>
  )
}

const DesktopNavigation = ({
  navigationItems,
  logo,
  textColor,
}: NavigationProps) => {
  return (
    <div className="items-center w-full justify-between hidden largeTablet:flex">
      <div className="h-[26px] w-[150px] cursor-pointer">
        <Link href="/">
          <a>
            <Image src={logo} layout="responsive" alt="" />
          </a>
        </Link>
      </div>

      <nav>
        <ul className="flex gap-8">
          {navigationItems.map((link) => (
            <li key={link.label}>
              <ExternalLink
                href={link.url as string}
                label={link.label as string}
                textColor={textColor}
              />
            </li>
          ))}
        </ul>
      </nav>

      <Button href="https://insights.opensauced.pizza/signin" gitHub>
        Connect with GitHub
      </Button>
    </div>
  )
}

const MobileNavigation = ({ navigationItems, logo }: NavigationProps) => {
  return (
    <div className="flex justify-between w-full largeTablet:hidden">
      <div className="h-[26px] w-[150px] largeTablet:hidden  cursor-pointer">
        <Link href="/">
          <a>
            <Image src={logo} layout="responsive" alt="" />
          </a>
        </Link>
      </div>

      <DropdownMenu
        menuItems={navigationItems.map((navItem) => ({
          label: navItem.label as string,
          href: navItem.url as string,
        }))}
        label="Navigation"
      />
    </div>
  )
}
