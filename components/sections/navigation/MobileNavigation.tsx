import Link from 'next/link'
import React, { FC, ReactElement } from 'react'
import { SanityFooter, SanityNavigation } from '../../../types/schema'
import Image from 'next/image'
import DropdownMenu from './DropdownMenu'

interface MobileNavigationProps {
  navigationItems: SanityNavigation[]
  logo: string
  socialLinks: SanityFooter[]
}

const MobileNavigation: FC<MobileNavigationProps> = ({
  navigationItems,
  logo,
  socialLinks,
}): ReactElement => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="h-[26px] w-[150px] largeTablet:hidden  cursor-pointer">
        <Link href="/">
          <Image src={logo} layout="responsive" alt="" />
        </Link>
      </div>

      <DropdownMenu
        menuItems={navigationItems.map((navItem) => ({
          label: navItem.label as string,
          href: navItem.url as string,
        }))}
        label="Navigation"
        socialLinks={socialLinks}
      />
    </div>
  )
}

export default MobileNavigation
