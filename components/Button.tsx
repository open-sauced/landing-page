import React from 'react'

type Props = {
  type?: 'primary' | 'default'
  endIcon?: React.ReactNode
  asLink?: boolean
  href?: string
}

const Button: React.FC<Props> = ({
  children,
  type = 'default',
  endIcon,
  asLink,
  href,
}) => {
  let styles =
    'text-white font-bold bg-gray100 rounded-lg py-3 px-6 bg-opacity-40 uppercase text-[11px] leading-none flex items-center gap-2'

  switch (type) {
    case 'primary':
      styles = `${styles} bg-gray400 bg-opacity-100 normal-case text-[12px]`
      break
    default:
    case 'default':
      break
  }

  const innerContents = (
    <>
      <span>{children}</span>

      {endIcon && <span>{endIcon}</span>}
    </>
  )

  if (asLink && href) {
    return (
      <a href={href} className={styles}>
        {innerContents}
      </a>
    )
  }
  return <button className={styles}>{innerContents}</button>
}

export default Button
