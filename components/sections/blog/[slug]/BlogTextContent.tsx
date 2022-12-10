import React, { FC, ReactElement } from 'react'
import { PortableText, PortableTextProps } from '@portabletext/react'

interface BlogTextContentProps {
  data: any
}

const BlogTextContent: FC<BlogTextContentProps> = ({ data }): ReactElement => {
  return (
    <div className="w-full max-w-[780px] mt-6 largeTablet:mt-24 text-textPrimary contentWrapper text-lg ">
      <PortableText value={data} />
    </div>
  )
}

export default BlogTextContent
