import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation as SanityNavigation } from '../../../sanity.types'

import DropdownMenu from './DropdownMenu'

interface MobileNavigationProps {
  navigationItems: SanityNavigation[]
  logo: string
}

const useCases = [
  { label: "Teams", url: "/teams" },
  { label: "Maintainers", url: "/maintainers" },
  { label: "Contributors", url: "/contributors" },
  { label: "Students", url: "/students" },
]

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
        menuItems={[...useCases, ...navigationItems].map((navItem) => ({
          label: navItem.label as string,
          href: navItem.url as string,
        }))}
        label="Navigation"
      />
    </div>
  )
}

export default MobileNavigation
