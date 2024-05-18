import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import PageLayout from '../../components/common/layout/PageLayout'
import Background from '../../components/sections/blog/Background'
import Blogs from '../../components/sections/blog/Blogs'
import { getAllBlogs, getCommonData } from '../../lib/sanity'
import {
  SanityAuthor,
  SanityBlog,
  SanityFooter,
  SanityNavigation,
  SanitySeo,
} from '../../types/schema'

interface BlogsPageProps {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
    blogs: (Omit<SanityBlog, 'author'> & { author: SanityAuthor })[]
    featuredBlogs: (Omit<SanityBlog, 'author'> & { author: SanityAuthor })[]
  }
}

const BlogsPage: NextPage<BlogsPageProps> = ({
  data: {
    commonData: { navigationLinks, seoData },
    blogs,
  },
}): ReactElement => {
  return (
    <PageLayout
      seoData={seoData}
      navigationURLs={navigationLinks}
      BackgroundWrapper={Background}
    >
      <Blogs data={blogs} />
    </PageLayout>
  )
}

export default BlogsPage

export async function getStaticProps() {
  const [commonData, blogs] = await Promise.all([
    getCommonData(),
    getAllBlogs(),
  ])

  const data = { commonData, blogs }

  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}
