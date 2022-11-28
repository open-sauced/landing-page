import type { NextPage } from 'next'
import { ReactElement } from 'react'
import PageLayout from '../../../components/common/layout/PageLayout'
import Background from '../../../components/sections/blog/Background'
import PageContent from '../../../components/sections/blog/[slug]/PageContent'
import {
  getCommonData,
  getFeaturedBlogBySlug,
  getFeaturedBlogs,
} from '../../../lib/sanity'
import {
  SanityBlog,
  SanityFeaturedBlog,
  SanityFooter,
  SanityNavigation,
  SanitySeo,
} from '../../../types/schema'

interface BlogsPageProps {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
    blogs: SanityBlog[]
    pageData: SanityFeaturedBlog
  }
}

const BlogsPage: NextPage<BlogsPageProps> = ({
  data: {
    commonData: { footer, navigationLinks, seoData },
    blogs,
    pageData,
  },
}): ReactElement => {
  return (
    <PageLayout
      footerData={footer}
      seoData={seoData}
      navigationURLs={navigationLinks}
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
  const [commonData, blogs, pageData] = await Promise.all([
    getCommonData(),
    getFeaturedBlogs(),
    getFeaturedBlogBySlug(params.slug),
  ])

  const data = { commonData, blogs, pageData }

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
