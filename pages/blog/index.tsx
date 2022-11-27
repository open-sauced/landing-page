import type { NextPage } from 'next'
import { ReactElement } from 'react'
import PageLayout from '../../components/common/layout/PageLayout'
import Background from '../../components/sections/blog/Background'
import Blogs from '../../components/sections/blog/Blogs'
import { getFeaturedBlogs, getHomePageData, getSEOData } from '../../lib/sanity'
import {
  SanityAbout,
  SanityBlog,
  SanityFooter,
  SanityNavigation,
  SanitySeo,
} from '../../types/schema'

interface BlogsPageProps {
  data: {
    blogPageData: {
      about: SanityAbout
      footer: SanityFooter[]
    }
    seoData: SanitySeo
    blogs: SanityBlog[]
  }
}

const BlogsPage: NextPage<BlogsPageProps> = ({
  data: {
    blogPageData: { footer, about },
    seoData,
    blogs,
  },
}): ReactElement => {
  return (
    <PageLayout
      footerData={footer}
      seoData={seoData}
      navigationURLs={about.navigationURLs as unknown as SanityNavigation[]}
      BackgorundWrapper={Background}
    >
      <Blogs data={blogs} />
    </PageLayout>
  )
}

export default BlogsPage

export async function getStaticProps() {
  const [blogPageData, seoData, blogs] = await Promise.all([
    getHomePageData(),
    getSEOData(),
    getFeaturedBlogs(),
  ])

  const data = { blogPageData, seoData, blogs }

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
