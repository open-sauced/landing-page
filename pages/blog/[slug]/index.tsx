import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import PageLayout from '../../../components/common/layout/PageLayout'
import Background from '../../../components/sections/blog/Background'
import PageContent from '../../../components/sections/blog/[slug]/PageContent'
import {
  getAllBlogs,
  getCommonData,
  getFeaturedBlogs,
} from '../../../lib/sanity'
import {
  Author as SanityAuthor,
  Blog as SanityBlog,
  Footer as SanityFooter,
  Navigation as SanityNavigation,
  Seo as SanitySeo,
} from '../../../sanity.types'

interface BlogPageProps {
  data: {
    commonData: {
      navigationLinks: SanityNavigation[]
      seoData: SanitySeo
      footer: SanityFooter[]
    }
    blogs: (Omit<SanityBlog, "author"> & { author: SanityAuthor })[]
    featuredBlogs: (Omit<SanityBlog, "author"> & { author: SanityAuthor })[]
  }
}

const BlogPage: NextPage<BlogPageProps> = ({ data }): ReactElement => {
  const { isFallback, query } = useRouter()

  if (isFallback) {
    return <div>Loading...</div>
  }

  const { commonData, blogs, featuredBlogs } = data
  const slug = query.slug as string

  let pageContent = featuredBlogs.find((item) => item.slug?.current === slug)
  const featuredPost = !!pageContent
  if (!featuredPost) {
    pageContent = blogs.filter((item) => item.slug?.current === slug)[0]
  }

  const displayBlogs = [...blogs, ...featuredBlogs].sort(
    (a, b) => +new Date(b._createdAt) - +new Date(a._createdAt)
  )

  return (
    <PageLayout
      seoData={commonData.seoData}
      navigationURLs={commonData.navigationLinks}
      BackgroundWrapper={Background}
      blogPage={true}
    >
      {pageContent && (
        <PageContent
          pageContent={pageContent}
          blogs={displayBlogs}
          featuredPost={featuredPost}
        />
      )}
    </PageLayout>
  )
}

export default BlogPage

export async function getStaticPaths() {
  const featuredBlogs = await getFeaturedBlogs()
  const blogs = await getAllBlogs()

  const path = [...featuredBlogs, ...blogs].map((feature) => {
    return { params: { slug: feature.slug?.current } }
  })

  return {
    paths: path,
    fallback: true,
  }
}

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
