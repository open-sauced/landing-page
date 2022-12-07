import Link from 'next/link'
import React, { FC, ReactElement } from 'react'
import { AiFillGithub } from 'react-icons/ai'

interface ButtonProps {
  href?: string
  borderVariant?: 'gray' | 'neon'
  backgroundVariant?: 'orange' | 'dark'
  fullWidth?: boolean
  gitHub?: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  href = '#',
  borderVariant = 'neon',
  backgroundVariant = 'dark',
  fullWidth,
  gitHub,
}): ReactElement => {
  const commonStyle = `h-fit min-h-[38px] min-w-[180px] rounded-md p-[1px] cursor-pointer`
  const widthStyle = fullWidth ? `w-full largeTablet:w-fit` : `w-fit`
  const borderVariantStyle =
    borderVariant === 'neon'
      ? `bg-gradient-to-br from-[#ED5432] via-[#EDA232] to-[#ED5432] drop-shadow-[0_0_4px_#ED5432]`
      : `bg-[#687076]`
  const backgroundVariantStyle =
    backgroundVariant === 'orange' || gitHub ? 'bg-[#211E1C]' : 'bg-darkBG'

  return (
    <Link href={href} passHref>
      <div className={`${commonStyle} ${widthStyle} ${borderVariantStyle}`}>
        <div
          className={`h-full w-full min-h-[38px] rounded-md flex justify-center items-center px-3 py-[6px] ${backgroundVariantStyle}`}
        >
          <span className="font-bold text-sm leading-[1] text-[#FEF8F4] flex">
            {gitHub && (
              <span className="mr-2">
                <AiFillGithub />
              </span>
            )}
            {children}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default Button
