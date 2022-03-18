import React from 'react'

type Props = {
  type?: 'primary' | 'default'
  endIcon?: React.ReactNode
}

const Button: React.FC<Props> = ({ children, type = 'default', endIcon }) => {
  let baseStyles =
    'text-white font-bold bg-gray100 rounded-lg py-3 px-6 bg-opacity-40 uppercase text-[11px] leading-none flex items-center gap-2'

  switch (type) {
    case 'primary':
      baseStyles = `${baseStyles} bg-gray400 bg-opacity-100 normal-case text-[12px]`
      break
    default:
    case 'default':
      break
  }

  return (
    <button className={baseStyles}>
      <span>{children}</span>

      {endIcon && <span>{endIcon}</span>}
    </button>
  )
}

export default Button
