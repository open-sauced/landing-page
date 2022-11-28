import Link from 'next/link'
import React, { FC, ReactElement } from 'react'
import { AiFillGithub } from 'react-icons/ai'

interface ButtonProps {
  href?: string
  variant?: 'gray' | 'neon'
  fullWidth?: boolean
  gitHub?: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  href = '#',
  variant = 'neon',
  fullWidth,
  gitHub,
}): ReactElement => {
  const commonStyle = `h-fit min-h-[38px] min-w-[180px] rounded-md p-[1px] cursor-pointer`
  const widthStyle = fullWidth ? `w-full largeTablet:w-fit` : `w-fit`
  const variantStyle =
    variant === 'neon'
      ? `bg-gradient-to-br from-[#ED5432] via-[#EDA232] to-[#ED5432] drop-shadow-[0_0_4px_#ED5432]`
      : `bg-[#687076]`

  return (
    <Link href={href}>
      <div className={`${commonStyle} ${widthStyle} ${variantStyle}`}>
        <div className="h-full w-full min-h-[38px] rounded-md bg-darkBG flex justify-center items-center px-3 py-[6px]">
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
