import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Components
import { Button } from '../../common'
import { Menu } from '@headlessui/react'
import { SanityNavigation } from '../../../types/schema'

interface DesktopNavigationProps {
  navigationItems: SanityNavigation[]
  logo: string
}

const useCases = [
  {
    link: '/teams',
    title: 'Teams',
    description:
      'Insights to validate and share the impact of open source to your organization.',
  },
  {
    link: '/maintainers',
    title: 'Maintainers',
    description: 'Grow and celebrate your open source community.',
  },
  {
    link: '/contributors',
    title: 'Contributors',
    description: 'Start the path to your next contribution.',
  },
  {
    link: '/students',
    title: 'Students',
    description: 'Follow your passion and make your mark.',
  },
]

const DesktopNavigation: FC<DesktopNavigationProps> = ({
  navigationItems,
  logo,
}) => {
  const { pathname } = useRouter()
  const defaultStyle = 'font-bold text-textPrimary text-sm'
  const activeLinkStyle =
    'after:absolute after:bg-gradient-to-r from-[#ED5432] to-[#EDA232] after:w-full after:h-[3px] after:bottom-[-8px] after:left-0'

  const getProperStyle = (link?: string) => {
    if (pathname.includes(link as string)) {
      return `${defaultStyle} ${activeLinkStyle}`
    }
    return defaultStyle
  }
  return (
    <div className="items-center w-full justify-between hidden largeTablet:flex">
      <div className="h-[26px] w-[150px] cursor-pointer">
        <Link href="/" passHref>
          <Image src={logo} alt="Open Sauced" />
        </Link>
      </div>

      <nav className="flex gap-8 items-center">
        <Menu as="div" className="relative -top-0.5">
          <Menu.Button className={`${defaultStyle}`}>Use Cases</Menu.Button>
          <Menu.Items className="rounded-lg absolute left-0 w-96 flex flex-col gap-4 p-3 shadow-xl origin-top-left bg-darkBG z-50 my-4">
            {useCases.map((useCase) => (
              <Menu.Item key={`usecase_${useCase.title}`}>
                {({ active }) => (
                  <a
                    href={useCase.link}
                    className={`${
                      active &&
                      'bg-gradient-to-r from-darkOrange to-lightOrange'
                    } flex flex-col gap-2 p-4 rounded-xl`}
                  >
                    <h3 className="font-semibold">{useCase.title}</h3>
                    <p>{useCase.description}</p>
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
        {navigationItems.map((link) => (
          <div key={link.label} className="relative cursor-pointer top">
            <Link key={link.label} href={link.url as string} passHref>
              <p className={`${getProperStyle(link.url)}`}>{link.label}</p>
            </Link>
          </div>
        ))}
      </nav>

      <Button href="https://app.opensauced.pizza/start" gitHub>
        Connect your GitHub
      </Button>
    </div>
  )
}

export default DesktopNavigation
