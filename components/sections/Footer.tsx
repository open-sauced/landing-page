import Image from 'next/image'
import React, { FC } from 'react'
import { SanityFooter } from '../../types/schema'
import OpenSaucedLogo from '../../public/logos/FooterLogo.png'
import SectionWrapper from '../common/layout/SectionWrapper'
interface FooterProps {
  data: SanityFooter[]
}

const footerContext = {
  pages: [
    {
      url: 'https://app.termly.io/document/privacy-policy/5e303854-d262-468a-80ec-54b645d01c2e',
      label: 'Privacy',
    },
    {
      url: 'https://app.termly.io/document/terms-of-use-for-saas/03e4e1c1-53ad-4fc4-b415-5c3f0e8c25ef',
      label: 'Terms',
    },
    {
      url: 'https://api.opensauced.pizza/docs#/Health%20check%20service/healthStatusWeb',
      label: 'Status',
    },
  ],
  apps: [
    {
      url: 'https://hot.opensauced.pizza',
      label: 'hot.opensauced.pizza',
    },
    {
      url: 'https://insights.opensauced.pizza',
      label: 'insights.opensauced.pizza',
    },
  ],
}

const Footer: FC<FooterProps> = ({ data }) => {
  const { pages, apps } = footerContext
  return (
    <footer className="w-full min-h-[200px] bg-footerBG pb-10">
      <SectionWrapper direction="col">
        <div className="w-full pt-10 pb-16 largeTablet:pt-12">
          <div className="w-[140px] h-6 relative">
            <Image layout="fill" alt="Brand logo" src={OpenSaucedLogo} />
          </div>
        </div>
        <div className="w-full flex flex-col largeTablet:flex-row">
          <div className="w-full largeTablet:w-[45%]">
            <LocalTypography variant="title">SOCIALS</LocalTypography>
            <div className="flex relative">
              {data.map(({ url, icon, label }) => {
                const src = icon || ''
                const href = url || ''
                return (
                  <div className="cursor-pointer pr-3">
                    <a href={href} target="_blank">
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
          <div className="w-full flex flex-wrap">
            <div className="w-1/2 my-10 largeTablet:w-[35%] largeTablet:my-0">
              <LocalTypography variant="title">MENU</LocalTypography>
              <div className="w-full flex flex-col">
                <LocalTypography variant="item1">About</LocalTypography>
                <LocalTypography variant="item1">Blog</LocalTypography>
                <LocalTypography variant="item1">Services</LocalTypography>
              </div>
            </div>
            <div className="w-1/2 my-10 largeTablet:w-[35%] largeTablet:my-0">
              <LocalTypography variant="title">More Sauce</LocalTypography>
              <div className="w-full flex flex-col">
                {apps.map(({ label, url }) => (
                  <a key={url} href={url} target="_blank">
                    <LocalTypography variant="item1">{label}</LocalTypography>
                  </a>
                ))}
              </div>
            </div>
            <div className="w-1/2 mb-10 largeTablet:w-[30%] largeTablet:mb-0">
              <LocalTypography variant="title">Contact Us</LocalTypography>
              <div className="w-full flex flex-col">
                <LocalTypography variant="item1">
                  +1 (123) 456-7890
                </LocalTypography>
                <LocalTypography variant="item1">
                  email@domain.com
                </LocalTypography>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-9 mt-7 flex flex-col-reverse border-t-[0.5px] border-gray-700 largeTablet:flex-row largeTablet:mt-12">
          <div className="flex-grow">
            <LocalTypography variant="item2">{`© ${new Date().getFullYear()} Open Sauced, LLC. All rights reserved.`}</LocalTypography>
          </div>
          <div className="flex mb-5 largeTablet:mb-0 ">
            {pages.map(({ url, label }, i) => (
              <div className="flex">
                <a href={url} target="_blank">
                  <LocalTypography variant="item2">{label}</LocalTypography>
                </a>
                {i < pages.length - 1 && (
                  <div className=" mx-2">
                    <LocalTypography variant="item2">•</LocalTypography>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </footer>
  )
}

interface LocalTypographyProps {
  variant?: 'title' | 'item1' | 'item2'
}

const LocalTypography: FC<LocalTypographyProps> = ({
  variant = 'item1',
  children,
}) => {
  const titleStyle =
    'font-bold text-[#FFF9ED] opacity-[0.35] text-xs uppercase tracking-[0.2em] pb-8'
  const item1Style =
    'font-normal text-[#FFF9ED] text-sm tracking-[-0.02em] opacity-[0.7] pb-3'
  const item2Style =
    'font-normal text-[#FFF9ED] text-sm tracking-[-0.02em] opacity-[0.35]'

  const appliedStyle =
    variant === 'title'
      ? titleStyle
      : variant === 'item1'
      ? item1Style
      : item2Style
  return <p className={appliedStyle}>{children}</p>
}

export default Footer
