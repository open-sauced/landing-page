import React, { FC, ReactElement } from 'react'
import SectionWrapper from '../../common/layout/SectionWrapper'
import DesktopNavigation from './DesktopNavigation'
import BrandLogo from '../../../public/logos/brandLogo.svg'
import { SanityNavigation } from '../../../types/schema'
import MobileNavigation from './MobileNavigation'

interface HeaderProps {
  navigationItems: SanityNavigation[]
}

export const navigationLinks = [
  { url: '/#features', label: 'Features' },
  { url: '/pricing', label: 'Pricing' },
  { url: '/about', label: 'About' },
  { url: '/blog', label: 'Blog' },
] as SanityNavigation[]

const Header: FC<HeaderProps> = ({ navigationItems }): ReactElement => {
  let logo = BrandLogo
  return (
    <SectionWrapper direction="row" pbs={0}>
      <header className="flex flex-grow py-9 font-inter justify-between items-center">
        <DesktopNavigation logo={logo} navigationItems={navigationLinks} />
        <div className="flex w-full largeTablet:hidden">
          <MobileNavigation logo={logo} navigationItems={navigationLinks} />
        </div>
      </header>
    </SectionWrapper>
  )
}

export default Header
