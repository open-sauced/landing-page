import React, { FC, ReactElement } from 'react'

interface LocalTypographyProps {
  variant?: 'title' | 'content1'
}

const LocalTypography: FC<LocalTypographyProps> = ({
  variant = 'content1',
  children,
}) => {
  const titleStyle = 'font-bold text-[#FFF9ED] text-2xl'
  const content1Style = 'font-normal opacity-70 text-[#FFF9ED] text-base'

  const appliedStyle = variant === 'title' ? titleStyle : content1Style

  return <p className={appliedStyle}>{children}</p>
}

export default LocalTypography
