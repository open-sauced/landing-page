import Link from 'next/link'
import React, { FC, ReactElement } from 'react'

// Icons
import { AiFillGithub } from 'react-icons/ai'

interface ButtonProps {
  href?: string
  borderVariant?: 'gray' | 'neon'
  backgroundVariant?: 'orange' | 'dark'
  fullWidth?: boolean
  gitHub?: boolean
  children: React.ReactNode
  className?: string
}

const Button: FC<ButtonProps> = ({
  children,
  href = '#',
  borderVariant = 'neon',
  backgroundVariant = 'dark',
  fullWidth,
  gitHub,
  className
}): ReactElement => {
  const commonStyle = `h-fit min-h-[38px] min-w-[180px] rounded-md p-[1px] cursor-pointer`
  const widthStyle = fullWidth ? `w-full largeTablet:w-fit` : `w-fit`
  const borderVariantStyle =
    borderVariant === 'neon'
      ? `bg-gradient-to-br from-[#ED5432] via-[#EDA232] to-[#ED5432] drop-shadow-[0_0_4px_#ED5432] hover:via-[#ED5432] hover:to-[#ED5432] [&_div]:hover:bg-[#ED5432]`
      : `bg-[#687076] hover:bg-[#ECE5E5] [&_div]:hover:bg-[#ECE5E5] [&_span]:hover:text-[#11181C]`
  const backgroundVariantStyle =
    backgroundVariant === 'orange' || gitHub ? 'bg-[#211E1C]' : 'bg-darkBG'

  return (
    <Link href={href} passHref>
      <div
        className={`${className} ${commonStyle} ${widthStyle} ${borderVariantStyle} transition-all ease-in-out duration-400`}
      >
        <div
          className={`h-full w-full min-h-[38px] rounded-md flex justify-center items-center px-3 py-[6px] ${backgroundVariantStyle} transition-all ease-in-out duration-400`}
        >
          <span className="font-bold text-sm leading-[1] text-[#FEF8F4] flex transition-all ease-in-out duration-400">
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
