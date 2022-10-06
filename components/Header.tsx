import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import Button from './Button'
import DropdownMenu from './DropdownMenu'
import { SanityNavigation } from '../types/schema'

interface NavigationProps {
  navigationItems: SanityNavigation[]
  variant?: string,
}

const Navigation = ({ navigationItems, variant="white" }: NavigationProps) => {
  return (
    <header className="flex justify-between pt-[20px] items-center">
      <div className="h-[26px] w-[150px] cursor-pointer">
        <Link href="/">
          <a>
            <Image src={Logo} layout="responsive" alt="" /> 
          </a>
        </Link>
      </div>

      <DesktopNavigation variant={variant} navigationItems={navigationItems} />
      <MobileNavigation navigationItems={navigationItems} />
    </header>
  )
}

export default Navigation

interface ExternalLinkProps {
  href: string
  label: string
  variant?: string
}

const ExternalLink = ({ href, label, variant }: ExternalLinkProps) => {
  const colorVariant = variant == 'grey' ? 'text-gray-700' : 'text-white'
  return (
    <a
      href={href}
      rel="noreferrer"
      className={"font-semibold "+colorVariant}
    >
      {label}
    </a>
  )
}

const DesktopNavigation = ({ navigationItems, variant="white" }: NavigationProps) => {
  return (
    <div className="text-[14px] tracking-[-3%] items-center hidden largeTablet:flex">
      <nav>
        <ul className="flex gap-[46px]">
          {navigationItems.map((link) => (
            <li key={link.label}>
              <ExternalLink
                variant={variant}
                href={link.url as string}
                label={link.label as string}
              />
            </li>
          ))}
        </ul>
      </nav>

      <div className="pl-[100px] ">
        <a href="https://insights.opensauced.pizza/signin">
          <Button>Login</Button>
        </a>
      </div>
    </div>
  )
}

const MobileNavigation = ({ navigationItems }: NavigationProps) => {
  return (
    <DropdownMenu
    className="block largeTablet:hidden"
    menuItems={navigationItems.map((navItem) => ({
      label: navItem.label as string,
      href: navItem.url as string,
    }))}
    label="Navigation"
    />
  )
}
