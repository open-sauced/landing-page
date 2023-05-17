import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SanityNavigation } from '../../../types/schema'

import DropdownMenu from './DropdownMenu'

interface MobileNavigationProps {
  navigationItems: SanityNavigation[]
  logo: string
}

const MobileNavigation: FC<MobileNavigationProps> = ({
  navigationItems,
  logo,
}): ReactElement => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="h-[26px] w-[150px] largeTablet:hidden  cursor-pointer">
        <Link href="/" passHref>
          <Image src={logo} alt="Open Sauced" />
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

export default MobileNavigation
