import type { NextPage } from 'next'
import { ReactElement } from 'react'
import PageLayout from '../../components/common/layout/PageLayout'
import Background from '../../components/sections/blog/Background'
import Blogs from '../../components/sections/blog/Blogs'
import { getAllBlogs, getCommonData, getFeaturedBlogs } from '../../lib/sanity'
import {
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
    blogs: SanityBlog[]
    featuredBlogs: SanityBlog[]
  }
}

const BlogsPage: NextPage<BlogsPageProps> = ({
  data: {
    commonData: { navigationLinks, seoData },
    blogs,
    featuredBlogs,
  },
}): ReactElement => {
  const displayBlogs = [...blogs, ...featuredBlogs].sort(
    (a, b) => +new Date(b._createdAt) - +new Date(a._createdAt)
  )

  console.log('blogs:', blogs)
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
  const [commonData, featuredBlogs, blogs] = await Promise.all([
    getCommonData(),
    getFeaturedBlogs(),
    getAllBlogs(),
  ])

  const data = { commonData, featuredBlogs, blogs }

  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}
