import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import Button from './Button'
import DropdownMenu from './DropdownMenu'

const Navigation = () => {
  return (
    <header className="flex justify-between pt-[20px] items-center">
      <div className="h-[26px] w-[150px]">
        <Image src={Logo} layout="responsive" alt="" />
      </div>

      <DesktopNavigation />
      <MobileNavigation />
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

const NavigationItems = [
  {
    label: 'Docs',
    href: '#',
  },
  {
    label: 'Blog',
    href: '#',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/open-sauced',
  },
]

const DesktopNavigation = () => {
  return (
    <div className="text-sm items-center hidden tablet:flex">
      <nav>
        <ul className="flex gap-[46px]">
          {NavigationItems.map((link) => (
            <li key={link.label}>
              <ExternalLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="pl-[100px]">
        <Button>Login</Button>
      </div>
    </div>
  )
}

const MobileNavigation = () => {
  return (
    <DropdownMenu
      className="block tablet:hidden"
      menuItems={NavigationItems.map((navItem) => ({
        label: navItem.label,
        href: navItem.href,
      }))}
    />
  )
}
