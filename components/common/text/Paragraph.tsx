import React, { FC, ReactElement } from 'react'

interface ParagraphProps {
  align?: 'center' | 'right' | 'left'
  variant?: 'hero' | 'body' | 'testemonial'
}

const Paragraph: FC<ParagraphProps> = ({
  children,
  align = 'left',
  variant = 'body',
}): ReactElement => {
  const variantStyle =
    variant === 'hero'
      ? `text-xl tablet:leading-8`
      : variant === 'testemonial'
      ? `text-base`
      : `text-base tablet:text-2xl`
  const commonStyle = `font-normal text-[#FFF9ED] text-${align} tracking-[-0.02em] opacity-70 `
  return <p className={`${commonStyle} ${variantStyle}`}>{children}</p>
}

export default Paragraph
