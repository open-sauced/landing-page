import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

import SocialLinks from '../../common/SocialLinks';
import MobileMenu from '../../../public/mobile_menu.svg';
import MobileCloseMenu from '../../../public/close_btn.svg';

interface MenuItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  menuItems: MenuItem[];
  className?: string;
  label: string;
}

const DropdownMenu = ({ menuItems, className, label }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Menu as="div" className={`inline-block text-left ${className}`}>
      <div onClick={toggleMenu}>
        <Menu.Button className="text-white" aria-label={label}>
          <Image src={isOpen ? MobileCloseMenu : MobileMenu} alt="Menu" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(isOpen) && (
          <Menu.Items className="absolute z-50 h-fit min-h-[470px] right-6 left-6 mt-6 bg-gradient-to-r from-[#ED5432] to-[#EDA232] py-9 px-7 rounded-lg">
            <p className="font-bold text-textPrimary text-xs opacity-70 tracking-[0.2em] pb-8">
              MENU
            </p>
            <div className="flex flex-col gap-y-8 pb-14">
              {menuItems.map(({ label, href }) => (
                <Menu.Item key={label}>
                  <Link href={href} passHref>
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
              <SocialLinks />
            </div>
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
