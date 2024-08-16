import React, { FC, ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'

interface BlogTextContentProps {
  data: any
}

const BlogTextContent: FC<BlogTextContentProps> = ({ data }): ReactElement => {
  return (
    <div 
      className="
        w-full max-w-[780px] mt-6 largeTablet:mt-24 text-textPrimary contentWrapper text-lg
        prose prose-invert space-y-0 
        prose-ol:flex prose-ol:flex-col prose-ol:gap-0
        prose-ul:flex prose-ul:flex-col prose-ul:gap-0
        prose-headings:font-bold prose-headings:py-4
        prose-a:no-underline
      "
    >
      <ReactMarkdown>
        {data}
      </ReactMarkdown>
    </div>
  )
}

export default BlogTextContent
