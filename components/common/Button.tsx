import Link from 'next/link'
import React, { FC, ReactElement } from 'react'

interface ButtonProps {
  href?: string
  variant?: 'gray' | 'neon'
}

const Button: FC<ButtonProps> = ({
  children,
  href = '#',
  variant = 'neon',
}): ReactElement => {
  const commonStyle = `h-fit min-h-[38px] w-fit min-w-[180px] rounded-md p-[1px] cursor-pointer `
  const variantStyle =
    variant === 'neon'
      ? `bg-gradient-to-br from-[#ED5432] via-[#EDA232] to-[#ED5432] drop-shadow-[0_0_4px_#ED5432]`
      : `bg-[#687076]`

  return (
    <div className={`${commonStyle} ${variantStyle}`}>
      <div className="h-full w-full min-h-[38px] rounded-md bg-darkBG flex justify-center items-center px-3 py-[6px]">
        <Link href={href}>
          <span className="font-bold text-sm leading-[1] text-[#FEF8F4] ">
            {children}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Button
