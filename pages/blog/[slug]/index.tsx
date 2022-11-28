import type { NextPage } from 'next'
import { ReactElement } from 'react'
import PageLayout from '../../../components/common/layout/PageLayout'
import Background from '../../../components/sections/blog/Background'
import PageContent from '../../../components/sections/blog/[slug]/PageContent'
import {
  getFeaturedBlogBySlug,
  getFeaturedBlogs,
  getHomePageData,
  getSEOData,
} from '../../../lib/sanity'
import {
  SanityAbout,
  SanityBlog,
  SanityFeaturedBlog,
  SanityFooter,
  SanityNavigation,
  SanitySeo,
} from '../../../types/schema'

interface BlogsPageProps {
  data: {
    blogPageData: {
      about: SanityAbout
      footer: SanityFooter[]
    }
    seoData: SanitySeo
    blogs: SanityBlog[]
    pageData: SanityFeaturedBlog
  }
}

const BlogsPage: NextPage<BlogsPageProps> = ({
  data: {
    blogPageData: { footer, about },
    seoData,
    blogs,
    pageData,
  },
}): ReactElement => {
  return (
    <PageLayout
      footerData={footer}
      seoData={seoData}
      navigationURLs={about.navigationURLs as unknown as SanityNavigation[]}
      BackgorundWrapper={Background}
    >
      <PageContent pageContent={pageData} blogs={blogs} />
    </PageLayout>
  )
}

export default BlogsPage

export async function getStaticPaths() {
  const blogs = await getFeaturedBlogs()

  const path = blogs.map((feature) => {
    return { params: { slug: feature.slug?.current } }
  })

  return {
    paths: path,
    fallback: true,
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const [blogPageData, seoData, blogs, pageData] = await Promise.all([
    getHomePageData(),
    getSEOData(),
    getFeaturedBlogs(),
    getFeaturedBlogBySlug(params.slug),
  ])

  const data = { blogPageData, seoData, blogs, pageData }

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
