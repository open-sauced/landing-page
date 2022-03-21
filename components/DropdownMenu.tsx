import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface MenuItem {
  label: string
  href: string
}

interface DropdownMenuProps {
  menuItems: MenuItem[]
  className?: string
  label: string
}

const DropdownMenu = ({ menuItems, className, label }: DropdownMenuProps) => {
  return (
    <Menu as="div" className={`relative inline-block text-left ${className}`}>
      <div>
        <Menu.Button
          className="text-white bg-gray100 rounded-3xl py-2 px-4 bg-opacity-40 items-center gap-2 tablet:hidden inline-flex justify-center w-full text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          aria-label={label}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4.75 5.75H19.25"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4.75 18.25H19.25"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4.75 12H19.25"
            ></path>
          </svg>
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
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {menuItems.map((menuItem) => (
              <Menu.Item key={menuItem.label}>
                {({ active }) => (
                  <a
                    href={menuItem.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${
                      active ? 'bg-gray400 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-bold`}
                  >
                    {menuItem.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropdownMenu
