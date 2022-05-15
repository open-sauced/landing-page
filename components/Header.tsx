import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import Button from './Button'
import DropdownMenu from './DropdownMenu'
import { SanityNavigation } from '../types/schema'

interface NavigationProps {
  navigationItems: SanityNavigation[]
}

const Navigation = ({ navigationItems }: NavigationProps) => {
  return (
    <header className="flex justify-between pt-[20px] items-center">
      <div className="h-[26px] w-[150px]">
        <Link href="/">
          <Image src={Logo} layout="responsive" alt="" />
        </Link>
      </div>

      <DesktopNavigation navigationItems={navigationItems} />
      <MobileNavigation navigationItems={navigationItems} />
    </header>
  )
}

export default Navigation

interface ExternalLinkProps {
  href: string
  label: string
}

const ExternalLink = ({ href, label }: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-bold text-white"
    >
      {label}
    </a>
  )
}

const DesktopNavigation = ({ navigationItems }: NavigationProps) => {
  return (
    <div className="text-sm items-center hidden tablet:flex">
      <nav>
        <ul className="flex gap-[46px]">
          {navigationItems.map((link) => (
            <li key={link.label}>
              <ExternalLink
                href={link.url as string}
                label={link.label as string}
              />
            </li>
          ))}
        </ul>
      </nav>

      <div className="pl-[100px]">
        <a href="https://app.opensauced.pizza/">
          <Button>Login</Button>
        </a>
      </div>
    </div>
  )
}

const MobileNavigation = ({ navigationItems }: NavigationProps) => {
  return (
    <DropdownMenu
      className="block tablet:hidden"
      menuItems={navigationItems.map((navItem) => ({
        label: navItem.label as string,
        href: navItem.url as string,
      }))}
      label="Navigation"
    />
  )
}
