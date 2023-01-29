import React, { FC, ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'

interface BlogTextContentProps {
  data: any
}

const BlogTextContent: FC<BlogTextContentProps> = ({ data }): ReactElement => {
  return (
    <div className="w-full max-w-[780px] mt-6 largeTablet:mt-24 text-textPrimary contentWrapper text-lg ">
      <ReactMarkdown>
        {data}
      </ReactMarkdown>
    </div>
  )
}

export default BlogTextContent
