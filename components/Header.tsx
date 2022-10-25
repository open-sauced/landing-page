import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DropdownMenu from './DropdownMenu'
import { SanityNavigation } from '../types/schema'
import BrandLogo from '../public/brandLogo.svg'
import BrandLogoDark from '../public/brandLogoDark.svg'
import { AiFillGithub } from 'react-icons/ai'

interface NavigationProps {
  navigationItems: SanityNavigation[]
  variant?: string,
  logo?: any,
  textColor?: string,
}

const Navigation = ({ navigationItems, variant="orangeWhite" }: NavigationProps) => {
  let logo = BrandLogo
  let textColor = "white"
  
  if (variant === "orangeWhite"){
    logo = logo;
    textColor = "white"
  }
  else if (variant === "orangeGrey") {
    logo = BrandLogoDark
    textColor = "text-gray-500"
  }

  return (
    <header className="flex px-4 py-9 font-inter justify-between items-center">
      <DesktopNavigation textColor={textColor} logo={logo} navigationItems={navigationItems} />
      <MobileNavigation navigationItems={navigationItems} logo={logo} />
    </header>
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
      className={"font-bold text-sm  "+textColor}
    >
      {label}
    </a>
  )
}

const DesktopNavigation = ({ navigationItems, logo, textColor }: NavigationProps) => {
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
      
      <div className="relative border-orange-500 border-2 font-semibold text-sm text-white rounded-md">
            <div className="bg-orange-500 absolute -inset-1 rounded-md blur-sm"></div>
            <a href="https://insights.opensauced.pizza/signin">
              <button className="relative bg-darkBG rounded-md px-3 py-2 flex items-center gap-2">
                <AiFillGithub/>
                Connect with GitHub
              </button>
            </a>
      </div>
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
