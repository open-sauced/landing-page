import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import Button from './Button'

const Navigation = () => {
  return (
    <header className="flex justify-between pt-[20px] items-center">
      <div className="h-[26px] w-[150px]">
        <Image src={Logo} layout="responsive" alt="" />
      </div>

      <div className="flex text-sm items-center">
        <nav>
          <ul className="flex gap-[46px]">
            <li>
              <ExternalLink href="#" label="Docs" />
            </li>
            <li>
              <ExternalLink href="#" label="Blog" />
            </li>
            <li>
              <ExternalLink
                href="https://github.com/open-sauced"
                label="GitHub"
              />
            </li>
          </ul>
        </nav>

        <div className="pl-[100px]">
          <Button>Login</Button>
        </div>
      </div>
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
