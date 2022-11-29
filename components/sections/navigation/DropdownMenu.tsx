import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import MobileMenu from '../../../public/mobile_menu.svg'
import { SanityFooter } from '../../../types/schema'

interface MenuItem {
  label: string
  href: string
}

interface DropdownMenuProps {
  menuItems: MenuItem[]
  className?: string
  label: string
  socialLinks: SanityFooter[]
}

const DropdownMenu = ({
  menuItems,
  className,
  label,
  socialLinks,
}: DropdownMenuProps) => {
  return (
    <Menu as="div" className={` inline-block text-left ${className}`}>
      <div>
        <Menu.Button className="text-white" aria-label={label}>
          <Image src={MobileMenu} alt="Menu" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-50 h-fit min-h-[470px] right-6 left-6 mt-6 bg-gradient-to-r from-[#ED5432] to-[#EDA232] py-9 px-7 rounded-lg">
          <p className="font-bold text-textPrimary text-xs opacity-70 tracking-[0.2em] pb-8">
            MENU
          </p>
          <div className="flex flex-col gap-y-8 pb-14">
            {menuItems.map(({ label, href }) => (
              <Menu.Item key={label}>
                <Link href={href}>
                  <span className="font-bold text-textPrimary text-lg">
                    {label}
                  </span>
                </Link>
              </Menu.Item>
            ))}
          </div>
          <div>
            <p className="font-bold text-textPrimary text-xs opacity-70 tracking-[0.2em] pb-10">
              SOCIALS
            </p>
            <div className="flex relative">
              {socialLinks.map(({ url, icon, label }) => {
                const src = icon || ''
                const href = url || ''
                return (
                  <div key={label} className="cursor-pointer pr-3">
                    <a href={href} target="_blank" rel="noreferrer">
                      <Image
                        alt={label}
                        src={src as string}
                        width={36}
                        height={36}
                      />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropdownMenu
