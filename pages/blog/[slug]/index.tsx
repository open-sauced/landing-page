import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import PageLayout from '../../../components/common/layout/PageLayout'
import Background from '../../../components/sections/blog/Background'
import PageContent from '../../../components/sections/blog/[slug]/PageContent'
import {
  getAllBlogs,
  getCommonData,
  getFeaturedBlogs,
} from '../../../lib/sanity'
import {
  SanityAuthor,
  SanityBlog,
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
    blogs: (Omit<SanityBlog, 'author'> & { author: SanityAuthor })[]
    featuredBlogs: (Omit<SanityBlog, 'author'> & { author: SanityAuthor })[]
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
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800)
    }

    // Check scroll position on initial load
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
      <a
        href="#top"
        className={`fixed bottom-28 right-11 back-to-top bg-[#ed5432] text-white py-2 px-3 lg:px-4  rounded font-bold transition-opacity duration-300 ${
          showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        ↑ Back to Top
      </a>
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
