import type { NextPage } from 'next'
import { useRouter } from 'next/router'
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

interface BlogPageProps {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
    blogs: SanityBlog[]
    pageContent: SanityFeaturedBlog
  }
}

const BlogPage: NextPage<BlogPageProps> = ({ data }): ReactElement => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <div>Loading...</div>
  }

  const { commonData, blogs, pageContent } = data

  return (
    <PageLayout
      seoData={commonData.seoData}
      navigationURLs={commonData.navigationLinks}
      BackgorundWrapper={Background}
    >
      <PageContent pageContent={pageContent} blogs={blogs} />
    </PageLayout>
  )
}

export default BlogPage

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
  const [commonData, blogs, pageContent] = await Promise.all([
    getCommonData(),
    getFeaturedBlogs(),
    getFeaturedBlogBySlug(params.slug),
  ])

  const data = { commonData, blogs, pageContent }

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
